## Câu A1 

### 1. Inline CSS
**Ví dụ:**
```html
<p style="color:red; font-size:20px;">Hello World</p>
```
**Ưu điểm:**
- Áp dụng nhanh cho một phần tử.
- Không cần tạo file CSS riêng.

**Nhược điểm:**
- Khó quản lý khi trang web lớn.
- Không tái sử dụng được.
- Làm code HTML rối.

**Nên dùng:**
- Khi chỉnh nhanh một phần tử.
- Khi thử nghiệm hoặc sửa lỗi nhỏ.

### 2. Internal CSS
**Ví dụ:**
```
<!DOCTYPE html>
<html>
    <head>
        <style>
            p{
                color: blue;
                font-size: 18px;
            }
        </style>
    </head>
    <body>
            <p>Hello World</p>
        </body>
</html>
```
**Ưu điểm:**
- Dễ quản lý hơn Inline CSS.
- Có thể áp dụng cho nhiều phần tử trong cùng một trang.

**Nhược điểm:**
- Chỉ áp dụng cho một file HTML.
- Không dùng chung được cho nhiều trang.

**Nên dùng:**
- Website nhỏ.
- Trang HTML đơn lẻ.

### 3. External CSS
**Ví dụ:**
```
<link rel="stylesheet" href="style.css">
<p>Hello World</p>
```
**Ưu điểm:**
- Dễ quản lý và bảo trì.
- Dùng chung cho nhiều trang web.
- Code gọn gàng.

**Nhược điểm:**
- Cần tạo file CSS riêng.
- Nếu file CSS lỗi có thể ảnh hưởng nhiều trang.

**Nên dùng:**
- Website lớn.
- Dự án có nhiều trang HTML.

