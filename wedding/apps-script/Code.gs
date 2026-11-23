// Google Apps Script — lưu RSVP/lời chúc vào Google Sheet và trả danh sách lời chúc.
// Cài đặt: xem README.md mục "Bật RSVP + sổ lưu bút".
const SHEET = "RSVP";
const HEADERS = ["time", "name", "attend", "side", "guests", "message"];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET);
  if (!sh) { sh = ss.insertSheet(SHEET); sh.appendRow(HEADERS); }
  return sh;
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const d = JSON.parse(e.postData.contents || "{}");
    const clean = (v, n) => String(v == null ? "" : v).slice(0, n).replace(/^[=+\-@]/, "'$&"); // chặn formula injection
    sheet_().appendRow([
      new Date(), clean(d.name, 60), clean(d.attend, 10), clean(d.side, 20),
      Math.min(Math.max(parseInt(d.guests, 10) || 1, 1), 10), clean(d.message, 500)
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } finally { lock.releaseLock(); }
}

// Chỉ trả tên + lời chúc (không lộ số người, bên nào...)
function doGet() {
  const rows = sheet_().getDataRange().getValues().slice(1);
  const out = rows.filter(r => r[5]).slice(-200).map(r => ({ name: r[1], attend: r[2], message: r[5] }));
  return ContentService.createTextOutput(JSON.stringify(out)).setMimeType(ContentService.MimeType.JSON);
}
