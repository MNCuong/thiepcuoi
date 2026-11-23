# Thiệp cưới online — HTML tĩnh, deploy GitHub Pages

```
thiep-cuoi/
├── index.html          # giao diện (không cần sửa)
├── config.js           # ← SỬA NỘI DUNG Ở ĐÂY
├── images/             # hero.jpg, 1.jpg … 6.jpg
├── music/              # song.mp3
└── apps-script/Code.gs # (tuỳ chọn) lưu RSVP vào Google Sheet
```

## 1. Sửa nội dung
Mở `config.js`, đổi tên, ngày giờ, địa chỉ, link Google Maps, số tài khoản… Ảnh bỏ vào `images/` (nên nén < 500KB/ảnh, ảnh hero ngang ~1920px). Thiếu ảnh/nhạc trang vẫn chạy.

Gửi link cá nhân hoá cho từng khách: `https://<user>.github.io/<repo>/?to=Anh%20Nam`

## 2. Deploy GitHub Pages
1. Tạo repo public trên GitHub, ví dụ `wedding`.
2. Upload toàn bộ file (`index.html` phải nằm ở gốc repo) (kéo thả trên web GitHub, hoặc):
   ```bash
   git init && git add . && git commit -m "Thiệp cưới"
   git branch -M main
   git remote add origin https://github.com/<user>/wedding.git
   git push -u origin main
   ```
3. Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)` → Save.
4. Sau ~1 phút trang chạy tại `https://<user>.github.io/wedding/`.

## 3. Bật RSVP + sổ lưu bút (tuỳ chọn, miễn phí)
GitHub Pages là web tĩnh nên cần Google Sheet làm nơi lưu:
1. Tạo Google Sheet mới → **Extensions → Apps Script** → dán nội dung `apps-script/Code.gs` → Save.
2. **Deploy → New deployment** → loại *Web app* → Execute as: *Me*, Who has access: *Anyone* → Deploy → cấp quyền.
3. Copy URL dạng `https://script.google.com/macros/s/.../exec` → dán vào `sheetApi` trong `config.js` → push lại.

Khi `sheetApi` để trống, form chạy chế độ demo (chỉ lưu trên trình duyệt của người gửi).

## Lưu ý
- Repo public ⇒ mọi người đều xem được số tài khoản, địa chỉ nhà trong `config.js`. Chỉ đưa thông tin bạn chấp nhận công khai.
- Nhạc tự phát sau khi khách bấm "mở thiệp" (trình duyệt chặn autoplay khi chưa tương tác).
- Chỉ dùng ảnh/nhạc bạn có quyền sử dụng.
