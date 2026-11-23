// =====================================================================
//  CHỈ CẦN SỬA FILE NÀY — mọi nội dung trên thiệp đều lấy từ đây.
// =====================================================================
window.WEDDING = {
  groom: { short: "Ngọc Cường", full: "Mai Ngọc Cường" },
  bride: { short: "Thùy Giang", full: "Nguyễn Thùy Giang" },

  // Thời điểm đếm ngược tới (giờ Việt Nam, +07:00)
  weddingDate: "2026-12-20T10:00:00+07:00",

  families: {
    groom: { label: "Nhà Trai", father: "Ông Mai Ngọc Trược", mother: "Bà Mai Thị Thúy", address: "SN114 thôn Yên Khoái, xã Nga Sơn, tỉnh Thanh Hóa" },
    bride: { label: "Nhà Gái", father: "Ông Nguyễn Văn Tình", mother: "Bà Nguyễn Thị Thúy", address: "Thôn Bạch Câu, xã Nga Sơn, tỉnh Thanh Hóa" }
  },

  invitation: "Trân trọng kính mời tới dự buổi tiệc chung vui cùng gia đình chúng tôi",

  story: [
    { year: "2019", title: "Lần đầu gặp gỡ", text: "Chúng mình gặp nhau trong một buổi làm thêm thời sinh viên — một cái chạm mắt, một lời chào ngập ngừng." },
    { year: "2022", title: "Cùng nhau trưởng thành", text: "Qua những ngày bận rộn, những chuyến đi xa, chúng mình học cách lắng nghe và nắm tay nhau thật chặt." },
    { year: "2026", title: "Về chung một nhà", text: "Sau 7 năm, chúng mình quyết định viết tiếp câu chuyện này — cùng nhau, trọn đời." }
  ],

  events: [
    {
      name: "Tiệc Mừng",
      time: "17:00", date: "2026-12-19", lunar: "Ngày 20 tháng 11 năm Bính Ngọ",
      place: "Tại tư gia nhà gái", address: "Thôn Bạch Câu, xã Nga Sơn, tỉnh Thanh Hóa",
      map: "https://maps.google.com/?q=Hoan+Kiem+Lake"
    },
    {
      name: "Lễ Thành Hôn",
      time: "10:00", date: "2026-12-20", lunar: "Ngày 21 tháng 11 năm Bính Ngọ",
      place: "Tại tư gia nhà trai", address: "SN114 thôn Yên Khoái, xã Nga Sơn, tỉnh Thanh Hóa",
      map: "https://maps.google.com/?q=Hoan+Kiem+Lake"
    }
  ],

  // Nhúng bản đồ: Google Maps → Chia sẻ → Nhúng bản đồ → copy link trong src="..."
  mapEmbed: "https://www.google.com/maps?q=Hoan+Kiem+Lake,Hanoi&output=embed",

  timeline: [
    { time: "17:00", text: "Đón khách & chụp ảnh" },
    { time: "18:00", text: "Khai tiệc" },
    { time: "19:00", text: "Giao lưu & chụp ảnh kỷ niệm" },
    { time: "20:30", text: "Khép lại tiệc mừng" }
  ],

  dressCode: {
    note: "Rất vui nếu bạn diện trang phục theo tông màu dưới đây",
    colors: ["#F3EDE2", "#C9B79C", "#8A9A7B", "#5E6B52", "#2F3A2C"]
  },

  // Ảnh: bỏ file vào thư mục images/ rồi khai báo ở đây. Thiếu ảnh sẽ hiện khung trang trí.
  heroImage: "images/hero.jpg",
  gallery: ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg"],

  // Nhạc nền (mp3 trong thư mục music/). Để "" nếu không dùng.
  music: "music/song.mp3",

  // Mừng cưới — QR sinh tự động qua VietQR (mã ngân hàng: VCB, TCB, MB, ACB, BIDV, VPB...)
  gifts: [
    { who: "Chú rể", bankCode: "VCB", bankName: "Vietcombank", account: "9965509515", holder: "MAI NGOC CUONG" },
    { who: "Cô dâu", bankCode: "TCB", bankName: "Techcombank", account: "0000000000", holder: "NGUYEN THUY GIANG" }
  ],

  // RSVP + sổ lưu bút: dán URL Web App của Google Apps Script (xem README). Để "" = chạy demo, chỉ lưu trên trình duyệt.
  sheetApi: ""
};
