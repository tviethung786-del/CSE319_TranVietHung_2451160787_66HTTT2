// ============================================================
// Version 1: Classic FizzBuzz
// In 1-100. Chia hết 3 → "Fizz", chia hết 5 → "Buzz",
// chia hết cả 2 → "FizzBuzz"
// ============================================================
console.log("=== Version 1: Classic FizzBuzz (1-100) ===");

for (let i = 1; i <= 100; i++) {
  let result = "";
  if (i % 3 === 0) result += "Fizz";
  if (i % 5 === 0) result += "Buzz";
  console.log(result || i);
}

// ============================================================
// Version 2: Custom FizzBuzz
// customFizzBuzz(n, rules) — hoạt động với BẤT KỲ bộ rules nào
// rules = [{ divisor: 3, word: "Fizz" }, { divisor: 5, word: "Buzz" }, ...]
// ============================================================
function customFizzBuzz(n, rules) {
  console.log(`\n=== Version 2: Custom FizzBuzz (1-${n}) ===`);
  console.log("Rules:", rules.map(r => `${r.divisor}→"${r.word}"`).join(", "));
  console.log("");

  for (let i = 1; i <= n; i++) {
    let result = "";
    for (const rule of rules) {
      if (i % rule.divisor === 0) result += rule.word;
    }
    console.log(`${i}: ${result || i}`);
  }
}

// Test theo đề bài
customFizzBuzz(30, [
  { divisor: 3, word: "Fizz" },
  { divisor: 5, word: "Buzz" },
  { divisor: 7, word: "Jazz" },
]);
// → 21 = "FizzJazz", 15 = "FizzBuzz", 35 = "BuzzJazz", 105 = "FizzBuzzJazz"