# Câu A1 — var / let / const

## Dự đoán output từng đoạn

### Đoạn 1
```js
console.log(x); // undefined
var x = 5;
```
**Dự đoán:** `undefined`

### Đoạn 2
```js
console.log(y);
let y = 10;
```
**Dự đoán:** `ReferenceError: Cannot access 'y' before initialization`

### Đoạn 3
```js
const z = 15;
z = 20;
console.log(z);
```
**Dự đoán:** `TypeError: Assignment to constant variable.`

### Đoạn 4
```js
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
```
**Dự đoán:** `[1, 2, 3, 4]`

### Đoạn 5
```js
let a = 1;
{
  let a = 2;
  console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
```
**Dự đoán:**
```
Trong block: 2
Ngoài block: 1
```

---

## Kết quả sau khi chạy

| Đoạn | Dự đoán | Kết quả thực tế | Khớp? |
|------|---------|-----------------|-------|
| 1 | `undefined` | `undefined` | ✅ |
| 2 | `ReferenceError` | `ReferenceError: Cannot access 'y' before initialization` | ✅ |
| 3 | `TypeError` | `TypeError: Assignment to constant variable.` | ✅ |
| 4 | `[1, 2, 3, 4]` | `[1, 2, 3, 4]` | ✅ |
| 5 | `Trong block: 2` / `Ngoài block: 1` | `Trong block: 2` / `Ngoài block: 1` | ✅ |

---

## Giải thích các kết quả bất ngờ

### Đoạn 1 — `var` hoisting
`var` được **hoisted** (kéo lên đầu scope) nhưng chưa được gán giá trị tại thời điểm `console.log(x)` chạy. Vì vậy kết quả là `undefined` thay vì báo lỗi như `let`/`const`.

### Đoạn 2 — `let` + Temporal Dead Zone (TDZ)
`let` cũng được hoist nhưng nằm trong **Temporal Dead Zone** từ đầu scope đến dòng khai báo. Truy cập biến trong vùng TDZ sẽ ném `ReferenceError` ngay lập tức.

### Đoạn 3 — `const` không thể gán lại
`const` khai báo một hằng số — sau khi gán giá trị lần đầu, không thể gán lại. Dòng `z = 20` vi phạm quy tắc này nên ném `TypeError`.

### Đoạn 4 — `const` chỉ khóa tham chiếu (reference)
Kết quả bất ngờ: dù dùng `const`, array vẫn thay đổi được. Vì `const` chỉ khóa **tham chiếu** trỏ tới array, không khóa **nội dung** bên trong. Phương thức `.push()` thay đổi nội dung array chứ không thay đổi tham chiếu, nên hoàn toàn hợp lệ.

### Đoạn 5 — `let` có block scope
`let` có **block scope** — biến `a` khai báo bên trong `{}` là một biến hoàn toàn khác với `a` bên ngoài. Hai biến tồn tại độc lập, không ghi đè lên nhau.

# Câu A2 — Data Types & Coercion

## Dự đoán output (không chạy code)

| Dòng code | Dự đoán | Giải thích ngắn |
|-----------|---------|-----------------|
| `console.log(typeof null)` | `"object"` | Lỗi lịch sử của JS, null bị coi là object |
| `console.log(typeof undefined)` | `"undefined"` | undefined đúng kiểu |
| `console.log(typeof NaN)` | `"number"` | NaN thuộc kiểu number |
| `console.log("5" + 3)` | `"53"` | `+` với string → nối chuỗi (concatenation) |
| `console.log("5" - 3)` | `2` | `-` không có nghĩa với string → ép `"5"` thành số |
| `console.log("5" * "3")` | `15` | `*` ép cả hai string thành số rồi nhân |
| `console.log(true + true)` | `2` | `true` bị ép thành `1`, `1 + 1 = 2` |
| `console.log([] + [])` | `""` | Cả hai array → chuỗi rỗng `""`, nối lại = `""` |
| `console.log([] + {})` | `"[object Object]"` | `[]` → `""`, `{}` → `"[object Object]"`, nối lại |
| `console.log({} + [])` | `"[object Object]"` | `{}` → `"[object Object]"`, `[]` → `""`, nối lại |

## Giải thích tại sao `"5" + 3` và `"5" - 3` cho kết quả khác nhau

- **`"5" + 3` → `"53"`** (string)
  Toán tử `+` có hai nhiệm vụ: cộng số VÀ nối chuỗi.
  Khi một trong hai toán hạng là **string**, JS ưu tiên nối chuỗi.
  → `"5"` + `3` = `"5"` + `"3"` = `"53"`

- **`"5" - 3` → `2`** (number)
  Toán tử `-` **chỉ dùng cho số**, không có nghĩa với chuỗi.
  → JS tự động ép `"5"` thành số `5`, rồi tính `5 - 3 = 2`

> **Kết luận:** `+` là toán tử "nguy hiểm" vì nó kiêm nhiệm hai vai trò.
> Các toán tử còn lại (`-`, `*`, `/`) luôn ép về số.

---

# Câu A3 — So sánh `==` vs `===`

## Dự đoán true / false

| Dòng code | Dự đoán | Giải thích ngắn |
|-----------|---------|-----------------|
| `console.log(5 == "5")` | `true` | `==` ép kiểu: `"5"` → `5`, rồi so sánh |
| `console.log(5 === "5")` | `false` | `===` khác kiểu (number vs string) → false ngay |
| `console.log(null == undefined)` | `true` | Quy tắc đặc biệt: `null == undefined` luôn true |
| `console.log(null === undefined)` | `false` | Khác kiểu → false |
| `console.log(NaN == NaN)` | `false` | NaN không bằng bất kỳ thứ gì kể cả chính nó |
| `console.log(0 == false)` | `true` | `false` → `0`, `0 == 0` → true |
| `console.log(0 === false)` | `false` | Khác kiểu (number vs boolean) → false |
| `console.log("" == false)` | `true` | `""` → `0`, `false` → `0`, `0 == 0` → true |

## Quy tắc: Nên dùng `==` hay `===`?

**Luôn dùng `===` (strict equality).**

**Lý do:**

1. `===` so sánh cả **giá trị** lẫn **kiểu dữ liệu** — không có ép kiểu ngầm → kết quả dễ đoán, không có bất ngờ.
2. `==` thực hiện **type coercion** theo các quy tắc phức tạp, dễ gây bug khó tìm (ví dụ: `0 == false`, `"" == false` đều là `true`).
3. Hầu hết các style guide chuyên nghiệp (Airbnb, Google) đều bắt buộc dùng `===`.

**Ngoại lệ duy nhất chấp nhận được:**
```js
if (value == null) { ... }
// Kiểm tra cả null lẫn undefined cùng lúc
// Tương đương: value === null || value === undefined
```

# Câu A4 — Truthy & Falsy

## Tất cả giá trị Falsy trong JavaScript

JavaScript chỉ có đúng **7 giá trị Falsy**:

| Giá trị | Kiểu |
|---------|------|
| `false` | boolean |
| `0` | number |
| `-0` | number |
| `0n` | bigint |
| `""` | string (chuỗi rỗng) |
| `null` | null |
| `undefined` | undefined |
| `NaN` | number |

> Tất cả giá trị còn lại đều là **Truthy** — kể cả `"0"`, `[]`, `{}`, `-1`.

---

## Dự đoán kết quả từng dòng

| Dòng code | In hay không? | Giải thích |
|-----------|---------------|------------|
| `if ("0") console.log("A")` | ✅ **In "A"** | `"0"` là string có nội dung → Truthy |
| `if ("") console.log("B")` | ❌ **Không in** | `""` chuỗi rỗng → Falsy |
| `if ([]) console.log("C")` | ✅ **In "C"** | `[]` array rỗng → Truthy |
| `if ({}) console.log("D")` | ✅ **In "D"** | `{}` object rỗng → Truthy |
| `if (null) console.log("E")` | ❌ **Không in** | `null` → Falsy |
| `if (0) console.log("F")` | ❌ **Không in** | `0` → Falsy |
| `if (-1) console.log("G")` | ✅ **In "G"** | `-1` khác 0 → Truthy |
| `if (" ") console.log("H")` | ✅ **In "H"** | `" "` có dấu cách → string có nội dung → Truthy |

**Kết quả cuối:** In ra `A`, `C`, `D`, `G`, `H`

---

# Câu A5 — Template Literals

## Viết lại bằng template literal (backtick)

### Cách 1
```js
// Cách cũ
var greeting = "Xin chào " + name + "! Bạn " + age + " tuổi.";

// Template literal
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
```

### Cách 2
```js
// Cách cũ
var url = "https://api.example.com/users/" + userId + "/orders?page=" + page;

// Template literal
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
```

### Cách 3
```js
// Cách cũ
var html = "<div class=\"card\">" +
    "<h2>" + title + "</h2>" +
    "<p>" + description + "</p>" +
    "<span>Giá: " + price + "đ</span>" +
    "</div>";

// Template literal
var html = `<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>`;
```

> **Lợi ích của template literal:**
> - Không cần dấu `+` và dấu `"` lồng nhau
> - Viết HTML nhiều dòng trực tiếp, dễ đọc
> - Dùng `${}` để nhúng biến hoặc biểu thức bất kỳ


# Phần C: Suy luận

## Câu C1 — Debug JavaScript

| #   | Vị trí                           | Lỗi                                           | Sửa                                     |
| --- | -------------------------------- | --------------------------------------------- | --------------------------------------- |
| 1   | `tinhGiaGiamGia("100000", 20)`   | truyền string thay vì number → tính ra `NaN`  | truyền `100000` hoặc validate trong hàm |
| 2   | `var giamGia`                    | dùng `var`                                    | đổi thành `const`                       |
| 3   | `let giaSauGiam`                 | không cần gán lại                             | đổi thành `const`                       |
| 4   | `if (giaSauGiam = 0)`            | `=` là gán chứ không phải so sánh, luôn falsy | đổi thành `===`                         |
| 5   | thiếu validate `giaBan`          | không kiểm tra input có phải số không         | thêm `typeof giaBan !== "number"`       |
| 6   | `for (var i ...)` + `setTimeout` | lỗi closure ẩn                                | đổi `var` thành `let`                   |

- Code sau khi sửa

```js
function tinhGiaGiamGia(giaBan, phanTramGiam) {
  if (typeof giaBan !== "number" || isNaN(giaBan)) {
    return "Giá bán không hợp lệ";
  }

  if (phanTramGiam < 0 || phanTramGiam > 100) {
    return "Phần trăm giảm không hợp lệ";
  }

  const giamGia = (giaBan * phanTramGiam) / 100;
  const giaSauGiam = giaBan - giamGia;

  if (giaSauGiam === 0) {
    console.log("Sản phẩm miễn phí!");
  }

  return giaSauGiam;
}

const gia = tinhGiaGiamGia(100000, 20);
console.log("Giá sau giảm: " + gia + "đ");

const gia2 = tinhGiaGiamGia(50000, 110);
console.log("Giá: " + gia2);

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("Item " + i);
  }, 1000);
}
```

`var` có function scope nên chỉ có một biến `i` duy nhất dùng chung cho cả 5 callback. Khi setTimeout chạy sau 1 giây, vòng lặp đã xong và `i = 5` rồi → cả 5 đều in `Item 5`.

Dùng `let` thì mỗi lần lặp tạo ra một `i` riêng, callback nhớ đúng giá trị của lần lặp đó.