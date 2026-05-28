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