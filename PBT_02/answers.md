# Phần A

## Câu A1

### Danh sách 10 input types

1. **email** → Ô nhập text, tự kiểm tra có ký tự @ → Dùng cho form đăng ký tài khoản  
2. **password** → Ô nhập text ẩn ký tự bằng dấu chấm → Dùng cho form đăng nhập  
3. **number** → Ô nhập số, có nút tăng/giảm → Dùng cho nhập số lượng sản phẩm  
4. **tel** → Ô nhập số điện thoại, kiểm tra ký tự số → Dùng cho nhập số liên hệ khách hàng  
5. **url** → Ô nhập đường dẫn, tự kiểm tra có http/https → Dùng cho nhập link website của shop  
6. **date** → Hiển thị lịch chọn ngày → Dùng cho chọn ngày giao hàng  
7. **time** → Hiển thị đồng hồ chọn giờ → Dùng cho chọn giờ nhận hàng  
8. **checkbox** → Ô vuông tick chọn nhiều mục → Dùng cho chọn nhiều phương thức thanh toán  
9. **radio** → Nút tròn chọn một trong nhiều mục → Dùng cho chọn giới tính hoặc phương thức giao hàng  
10. **range** → Thanh trượt chọn giá trị trong khoảng → Dùng cho lọc sản phẩm theo giá  

## Câu A3 

1. 
   - Screen reader đọc nội dung label và liên kết với input tương ứng.  
   - Nếu không có label, người dùng khiếm thị sẽ không biết ô nhập đó dùng để làm gì.  
   - Ví dụ: `<label for="email">Email</label><input id="email" type="email">`.

2. 
   - Dùng khi nhóm nhiều input liên quan để tạo ngữ cảnh rõ ràng.  
   - `<legend>` mô tả ý nghĩa của nhóm.  
   - Ví dụ:  
     ```html
     <fieldset>
       <legend>Thông tin thanh toán</legend>
       <label for="card">Số thẻ:</label>
       <input id="card" type="text">
       <label for="expiry">Ngày hết hạn:</label>
       <input id="expiry" type="date">
     </fieldset>
     ```

3. 
   - Dùng khi không thể hiển thị label trực quan nhưng vẫn cần mô tả cho screen reader.  
   - Ví dụ: icon nút tìm kiếm `<button aria-label="Tìm kiếm">🔍</button>`.  
   - Không nên dùng song song với `<label>` vì gây dư thừa, có thể làm screen reader đọc lặp lại, gây khó hiểu.

## Câu A4 

1. 
   - Trì hoãn tải ảnh cho đến khi người dùng cuộn đến vị trí ảnh.  
   - Giúp cải thiện tốc độ tải trang, tiết kiệm băng thông.  
   - KHÔNG nên dùng cho ảnh quan trọng hiển thị ngay (logo, banner chính).

2. 
   - Trình duyệt khác nhau hỗ trợ định dạng video khác nhau.  
   - Cung cấp nhiều nguồn giúp video chạy ổn định trên nhiều trình duyệt.  
   - Các format phổ biến: `mp4 (H.264)`, `webm`, `ogg`.

   Ví dụ:  
   ```html
   <video controls>
     <source src="video.mp4" type="video/mp4">
     <source src="video.webm" type="video/webm">
     <source src="video.ogv" type="video/ogg">
     Trình duyệt của bạn không hỗ trợ video.
   </video>

## Câu A5

### Giới thiệu
Trong HTML, thẻ `<img>` dùng để hiển thị hình ảnh, trong khi `<figure>` kết hợp với `<figcaption>` giúp bổ sung ngữ nghĩa và chú thích cho hình ảnh. Việc lựa chọn thẻ nào phụ thuộc vào ngữ cảnh sử dụng.

---

### Khi nào dùng `<img>`
- Dùng khi chỉ cần hiển thị hình ảnh đơn giản, không cần chú thích.  
- Thường áp dụng cho logo, banner, icon hoặc ảnh minh họa nhỏ.  

**Ví dụ 1: Logo website**
```html
<img src="logo.png" alt="Logo cửa hàng ABC">

---

```
# Phần C

## Câu C1
1. **Thiếu label cho input "Tên"**  
   - Lỗi: Input không có `<label for="...">` → screen reader không đọc được.  
   - Sửa: Thêm `<label for="name">Tên:</label>` và `id="name"`.
2. **Email không có label và name**  
   - Lỗi: Không có label, không có `name` để gửi dữ liệu.  
   - Sửa: Thêm `<label for="email">Email:</label>` và `name="email"`.
3. **Password không có label**  
   - Lỗi: Người dùng không biết ô nào là mật khẩu.  
   - Sửa: Thêm `<label for="password">Mật khẩu:</label>`.
4. **Confirm password không có label và không thể validate bằng HTML**  
   - Lỗi: Không có label, không thể so sánh với password.  
   - Sửa: Thêm `<label for="confirm_password">Nhập lại mật khẩu:</label>`.  
5. **Phone dùng type="text"**  
   - Lỗi: Không đúng loại dữ liệu, không có pattern.  
   - Sửa: Dùng `type="tel"` và `pattern="[0-9]{10}"`.
6. **Select không có label và name**  
   - Lỗi: Không rõ ô chọn gì, dữ liệu không gửi được.  
   - Sửa: Thêm `<label for="city">Thành phố:</label>` và `name="city"`.
7. **Checkbox không liên kết với label và thiếu required**  
   - Lỗi: Người dùng không biết checkbox dùng để làm gì.  
   - Sửa: Thêm `<input type="checkbox" id="terms" required>` và `<label for="terms">Tôi đồng ý điều khoản</label>`.
8. **Form thiếu action và method**  
   - Lỗi: Không xác định cách gửi dữ liệu.  
   - Sửa: Thêm `<form action="#" method="POST">`.
## Câu C2 
1. Pattern Regex
   - CMND/CCCD: `^[0-9]{12}$`
   - Số tài khoản: `^[0-9]{10,15}$`
2. - HTML5 validation chỉ chạy trên frontend (trình duyệt). Người dùng có thể tắt JavaScript, chỉnh sửa DOM, hoặc gửi request trực tiếp qua công cụ như Postman.
   - Validation HTML5 chỉ mang tính tiện lợi, giúp người dùng nhập đúng định dạng cơ bản, nhưng không thể thay thế kiểm tra logic và bảo mật ở backend.
   - Với ứng dụng ngân hàng, dữ liệu nhạy cảm và yêu cầu bảo mật cao, chỉ dựa vào HTML5 là không an toàn.
3. 3 loại validation HTML5 không làm được
   - So sánh giá trị giữa hai input
   - Kiểm tra dữ liệu động từ server
   - Logic phức tạp vượt ngoài regex
4. 2 rủi ro bảo mật nếu chỉ validate frontend
   - Injection dữ liệu độc hại
   - Giả mạo request
