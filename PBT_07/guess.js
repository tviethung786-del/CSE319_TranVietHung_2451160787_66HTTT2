// Máy random 1 số từ 1-100
const answer = Math.floor(Math.random() * 100) + 1;
const MAX_TURNS = 7;

let turns = 0;
const guessed = []; // Lưu các số đã đoán

while (turns < MAX_TURNS) {
  const input = prompt(
    `🎯 Đoán số từ 1-100\n` +
    `Lượt: ${turns + 1}/${MAX_TURNS}` +
    (guessed.length > 0 ? `\nĐã đoán: ${guessed.join(", ")}` : "")
  );

  // Người dùng bấm Cancel
  if (input === null) {
    alert("Bạn đã thoát game!");
    break;
  }

  const num = Number(input);

  // Validate: chỉ chấp nhận số nguyên 1-100
  if (!Number.isInteger(num) || num < 1 || num > 100) {
    alert("⚠️ Vui lòng nhập số nguyên từ 1 đến 100!");
    continue;
  }

  // Kiểm tra đã đoán số này chưa
  if (guessed.includes(num)) {
    alert("⚠️ Bạn đã đoán số này rồi! Hãy thử số khác.");
    continue;
  }

  guessed.push(num);
  turns++;

  if (num === answer) {
    alert(`🎉 Đúng rồi! Bạn đoán đúng sau ${turns} lần!`);
    break;
  } else if (num < answer) {
    alert(`📈 Cao hơn! (Lượt ${turns}/${MAX_TURNS})`);
  } else {
    alert(`📉 Thấp hơn! (Lượt ${turns}/${MAX_TURNS})`);
  }

  // Hết lượt
  if (turns === MAX_TURNS) {
    alert(`😢 Hết lượt! Đáp án là: ${answer}`);
  }
}