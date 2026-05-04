# PHẦN A 

## Câu A1

### 1. 

Các bước xảy ra theo thứ tự:

1. DNS Lookup: Trình duyệt tìm địa chỉ IP của domain shopee.vn thông qua DNS server.
2. Thiết lập kết nối TCP: Trình duyệt thiết lập kết nối TCP với server.
3. TLS Handshake: Vì website sử dụng HTTPS nên trình duyệt và server thực hiện bắt tay TLS để tạo kết nối bảo mật.
4. Gửi HTTP Request: Trình duyệt gửi HTTP request (GET) đến server.
5. Server trả về HTTP Response: Server trả về file HTML của trang web.
6. Trình duyệt tải thêm tài nguyên: Trình duyệt tiếp tục tải CSS, JavaScript, hình ảnh.
7. Render trang: Trình duyệt xây dựng DOM, CSSOM và hiển thị trang web.

Nguồn: 01_introduction_html_universe.md — phần From URL to Render

### 2. 

Tab Network trong DevTools hiển thị tất cả các request mạng khi trang web được tải.

Các thông tin gồm:
- Danh sách request (HTML, CSS, JS, image)
- Status Code (200, 404, 301)
- Type của tài nguyên
- Size của file
- Thời gian tải request
- Timeline của quá trình tải tài nguyên

Screenshot tab Network đã được chụp và đánh dấu:
- Status Code của request đầu tiên
- Tổng thời gian load trang
- Một request trả về file CSS

Nguồn: 01_introduction_html_universe.md — phần Browser DevTools / Network

## Câu A2 

Trang web sử dụng quá nhiều thẻ <div> thay vì các thẻ semantic HTML.
Điều này làm cho công cụ tìm kiếm như Google khó hiểu được cấu trúc nội dung của trang web.

Các lỗi Semantic HTML
1. Dùng `<div>` thay cho `<header>`
   `<div class="header">` = `<header>`
2. Menu điều hướng không dùng `<nav>`
   `<div class="menu">` = `<nav>`
3. Nội dung chính không dùng `<main>`
   `<div class="main">` = `<main>`
4. Sản phẩm không dùng `<article>`
   `div class="product">` = `<article>`

Nguồn: 04_visible_part_html.md

## Câu A3 

Kết quả hiển thị (text art)
Hộp 1
Text A Text B
Hộp 2
Text C Text D
Hộp 3

Giải thích
* `<div>` là block element nên luôn chiếm toàn bộ chiều ngang và tự xuống dòng.
* `<span>` là inline element nên hiển thị trên cùng một dòng với nội dung bên cạnh.
* `<strong>` cũng là inline element, chỉ làm chữ đậm nhưng vẫn nằm cùng dòng.
Vì vậy:
* `Hộp 1` nằm một dòng riêng (do `<div>`).
* `Text A` và `Text B` nằm cùng dòng (do `<span>` là inline).
* `Hộp 2` xuống dòng mới (do `<div>`).
* `Text C` và `Text D` cùng dòng (`span` và `strong` đều inline).
* `Hộp 3` tiếp tục xuống dòng mới.

Nguồn: 01_introduction_html_universe.md — phần Block vs Inline Elements

## Câu A4 

Sự khác nhau giữa `<thead>`, `<tbody>`, `<tfoot>`
* `<thead>`: chứa phần tiêu đề của bảng (header rows).
* `<tbody>`: chứa nội dung chính của bảng (data rows).
* `<tfoot>`: chứa phần kết hoặc tổng kết của bảng.

KHÔNG NÊN dùng table để tạo layout trang web
1. Không đúng ngữ nghĩa (semantic HTML)
   Table được thiết kế để hiển thị dữ liệu dạng bảng, không phải để bố trí layout.
2. Khó bảo trì và khó đọc code
   Layout bằng table thường phải lồng nhiều bảng làm code phức tạp.
3. Không responsive tốt
   Layout bằng table khó thích nghi với màn hình nhỏ (mobile).
4. Hiệu suất kém hơn CSS layout
   Trình duyệt phải tải toàn bộ bảng trước khi render.
Hiện nay nên dùng CSS layout như `Flexbox` hoặc `Grid`.

Nguồn: 05_tables_hyperlinks.md

# PHẦN C

## Câu C1

```<!-- Header: phần đầu trang chứa logo và menu -->
<header>

  <!-- nav: dùng cho điều hướng trang web -->
  <nav>
    <a href="/">Trang chủ</a>
    <a href="/products">Sản phẩm</a>
    <a href="/contact">Liên hệ</a>
  </nav>

</header>
```
```
<!-- Breadcrumb: hiển thị vị trí trang hiện tại -->
<nav aria-label="breadcrumb">

  <!-- ol: breadcrumb có thứ tự -->
  <ol>
    <li><a href="/">Trang chủ</a></li>
    <li><a href="/phones">Điện thoại</a></li>
    <li>iPhone 16</li>
  </ol>

</nav>
```

<!-- main: nội dung chính của trang -->
<main>


  <!-- section: khu vực hiển thị sản phẩm -->
  <section>

    <!-- div: chứa danh sách ảnh sản phẩm -->
    <div class="product-images">

      <!-- figure: dùng để chứa ảnh -->
      <figure>
        <img src="img1.jpg" alt="Ảnh sản phẩm 1">
      </figure>

      <figure>
        <img src="img2.jpg" alt="Ảnh sản phẩm 2">
      </figure>

      <figure>
        <img src="img3.jpg" alt="Ảnh sản phẩm 3">
      </figure>

      <figure>
        <img src="img4.jpg" alt="Ảnh sản phẩm 4">
      </figure>

      <figure>
        <img src="img5.jpg" alt="Ảnh sản phẩm 5">
      </figure>

    </div>
    
    <!-- article: thông tin chi tiết sản phẩm -->
    <article>

      <!-- h1: tiêu đề chính của trang -->
      <h1>iPhone 16</h1>

      <!-- p: hiển thị giá -->
      <p class="price">Giá sản phẩm</p>

      <!-- p: hiển thị đánh giá -->
      <p class="rating">Đánh giá sao</p>

      <!-- p: mô tả sản phẩm -->
      <p class="description">Mô tả sản phẩm</p>

    </article>

  </section>


  <!-- section: bảng thông số kỹ thuật -->
  <section>

    <h2>Thông số kỹ thuật</h2>

    <!-- table: hiển thị dữ liệu dạng bảng -->
    <table>

      <!-- thead: tiêu đề bảng -->
      <thead>
        <tr>
          <th>Thông số</th>
          <th>Chi tiết</th>
        </tr>
      </thead>

      <!-- tbody: dữ liệu chính -->
      <tbody>
        <tr>
          <td>Màn hình</td>
          <td>...</td>
        </tr>

        <tr>
          <td>CPU</td>
          <td>...</td>
        </tr>
      </tbody>

    </table>

  </section>


  <!-- section: khu vực đánh giá -->
  <section>

    <h2>Đánh giá & Bình luận</h2>

    <!-- article: một bình luận -->
    <article>
      <p>Tên người dùng</p>
      <p>Nội dung bình luận</p>
    </article>

  </section>


  <!-- aside: sidebar sản phẩm tương tự -->
  <aside>

    <h2>Sản phẩm tương tự</h2>

    <article>
      <p>Sản phẩm 1</p>
    </article>

    <article>
      <p>Sản phẩm 2</p>
    </article>

  </aside>


</main>


<!-- footer: thông tin cuối trang -->`

### Câu C2

Quan điểm “dùng `<div>` cho mọi thứ rồi thêm class là đủ” không hoàn toàn đúng. Semantic HTML mang lại nhiều lợi ích kỹ thuật quan trọng mà chỉ dùng `<div>` không thể thay thế.Thứ nhất là SEO (Search Engine Optimization). Các công cụ tìm kiếm như Google phân tích cấu trúc HTML để hiểu nội dung trang. Khi sử dụng các thẻ semantic như `<header>`, `<nav>`, `<main>`, `<article>` hoặc `<footer>`, công cụ tìm kiếm có thể xác định rõ phần nào là tiêu đề, phần nào là nội dung chính hay điều hướng. Điều này giúp trang web được lập chỉ mục chính xác hơn và có thể cải thiện thứ hạng tìm kiếm.Thứ hai là Accessibility (khả năng truy cập). Các thiết bị hỗ trợ như screen reader cho người khiếm thị dựa vào semantic HTML để hiểu cấu trúc trang. Ví dụ, khi sử dụng `<nav>`, screen reader có thể thông báo rằng đây là khu vực điều hướng, giúp người dùng dễ dàng di chuyển trong trang. Nếu chỉ dùng `<div>` thì các công cụ này khó xác định ý nghĩa của từng phần nội dung.Một ví dụ cụ thể là khi xây dựng menu điều hướng. Nếu dùng `<nav>` chứa danh sách `<ul>` và `<li>`, trình duyệt và công cụ hỗ trợ có thể nhận diện ngay đây là menu. Điều này giúp SEO tốt hơn và cải thiện trải nghiệm cho người dùng sử dụng screen reader.Tuy nhiên, `<div>` vẫn có vai trò quan trọng trong thực tế. Nó phù hợp khi cần một container trung tính để bố trí layout hoặc nhóm các phần tử phục vụ cho CSS hoặc JavaScript, ví dụ như một khối layout trong Flexbox hoặc Grid.Vì vậy, semantic HTML không phải là lãng phí thời gian học, mà là cách viết HTML rõ ràng, chuẩn và thân thiện hơn với cả máy tìm kiếm và người dùng.

# Phần B - Câu B3

Lỗi 1: Dòng 1 — `<!DOCTYPE>` thiếu loại tài liệu — Sửa thành `<!DOCTYPE html>`
Lỗi 2: Dòng 4 — Thẻ `<title>` không đóng — Thêm `</title>`
Lỗi 3: Dòng 5 — `utf8` không chuẩn — Sửa thành `utf-8`
Lỗi 4: Dòng 8 — Thẻ `<h1>` không đóng đúng — Sửa thành `</h1>`
Lỗi 5: Dòng 12 — Thẻ `<a>` đầu tiên không đóng — Sửa thành `</a>`
Lỗi 6: Dòng 21 — Thuộc tính `src=iphone.jpg` thiếu dấu ngoặc kép — Sửa thành `src="iphone.jpg"`
Lỗi 7: Dòng 23–24 — Thẻ `<b>` và `<p>` lồng sai thứ tự — Sửa thành `<p>Giá: <b>25.990.000đ</b></p>`
Lỗi 8: Dòng 29 — Bảng thiếu `<thead>` và `<th>` cho tiêu đề — Thêm `<thead>` và đổi `<td>` thành `<th>`
Lỗi 9: Dòng 41 — Có 2 thẻ `<main>` trong cùng tài liệu — Thay cái thứ hai bằng `<aside>`
Lỗi 10: Dòng 46 — Thẻ `<p>` trong footer không đóng — Thêm `</p>`
Lỗi 11: Dòng 47 — Thẻ `<footer>` không đóng đúng — Thêm `</footer>` sau đoạn văn
Lỗi 12: Dòng cuối — Thẻ `<html>` không đóng — Thêm `</html>`

## Bài B4

1. Semantic tags
- Thẻ `<header>`: nằm ở phần đầu trang.
- Thẻ `<nav>`: chứa menu điều hướng.
- Thẻ `<footer>`: cuối trang.
- Lỗi semantic: dùng `<div>` thay cho `<header>`.
- Lỗi semantic: dùng `<span>` bao cả đoạn văn dài.
2. Table
- Nội dung: bảng hiển thị thông số sản phẩm.
- Có dùng `<thead>` và `<tbody>`.
3. Form
- Action: `/search`
- Method: `GET`
- Input types: `text`, `submit`
