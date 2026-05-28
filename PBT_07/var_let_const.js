// Đoạn 1
// Dự đoán: undefined
console.log(x);
var x = 5;

// Đoạn 2
// Dự đoán: ReferenceError: Cannot access 'y' before initialization
try {
  console.log(y);
} catch (e) {
  console.log(e.message);
}
let y = 10;

// Đoạn 3
// Dự đoán: TypeError: Assignment to constant variable.
try {
  const z = 15;
  z = 20;
  console.log(z);
} catch (e) {
  console.log(e.message);
}

// Đoạn 4
// Dự đoán: [1, 2, 3, 4]
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// Đoạn 5
// Dự đoán: "Trong block: 2" rồi "Ngoài block: 1"
let a = 1;
{
  let a = 2;
  console.log("Trong block:", a);
}
console.log("Ngoài block:", a);