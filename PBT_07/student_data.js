const students = [
  { name: "An",    math: 8,  physics: 7, cs: 9, gender: "M" },
  { name: "Bình",  math: 6,  physics: 9, cs: 7, gender: "F" },
  { name: "Chi",   math: 9,  physics: 6, cs: 8, gender: "F" },
  { name: "Dũng",  math: 5,  physics: 5, cs: 6, gender: "M" },
  { name: "Em",    math: 10, physics: 8, cs: 9, gender: "F" },
  { name: "Phong", math: 3,  physics: 4, cs: 5, gender: "M" },
  { name: "Giang", math: 7,  physics: 7, cs: 7, gender: "F" },
  { name: "Huy",   math: 4,  physics: 6, cs: 3, gender: "M" },
];

// ============================================================
// 1. Tính điểm trung bình cho mỗi sinh viên
// ============================================================
function tinhTB(sv) {
  return sv.math * 0.4 + sv.physics * 0.3 + sv.cs * 0.3;
}

// ============================================================
// 2. Xếp loại
// ============================================================
function xepLoai(tb) {
  if (tb >= 8.0) return "Giỏi";
  if (tb >= 6.5) return "Khá";
  if (tb >= 5.0) return "Trung bình";
  return "Yếu";
}

// Gắn TB và xếp loại vào từng sinh viên
const data = students.map((sv, i) => {
  const tb = parseFloat(tinhTB(sv).toFixed(1));
  return { stt: i + 1, ...sv, tb, loai: xepLoai(tb) };
});

// ============================================================
// 3. In bảng kết quả
// ============================================================
console.log("=== BẢNG KẾT QUẢ SINH VIÊN ===\n");
console.log("| STT | Tên      | TB   | Xếp loại   |");
console.log("|-----|----------|------|------------|");
for (const sv of data) {
  const stt  = String(sv.stt).padEnd(3);
  const name = sv.name.padEnd(8);
  const tb   = String(sv.tb).padEnd(4);
  const loai = sv.loai.padEnd(10);
  console.log(`| ${stt} | ${name} | ${tb} | ${loai} |`);
}

// ============================================================
// 4. Đếm số SV mỗi xếp loại
// ============================================================
console.log("\n=== SỐ SINH VIÊN MỖI XẾP LOẠI ===");
const loaiList = ["Giỏi", "Khá", "Trung bình", "Yếu"];
for (const loai of loaiList) {
  let count = 0;
  for (const sv of data) {
    if (sv.loai === loai) count++;
  }
  console.log(`  ${loai}: ${count} SV`);
}

// ============================================================
// 5. SV có điểm TB cao nhất và thấp nhất
// ============================================================
console.log("\n=== ĐIỂM CAO NHẤT & THẤP NHẤT ===");
let max = data[0];
let min = data[0];
for (const sv of data) {
  if (sv.tb > max.tb) max = sv;
  if (sv.tb < min.tb) min = sv;
}
console.log(`  Cao nhất: ${max.name} — ${max.tb} (${max.loai})`);
console.log(`  Thấp nhất: ${min.name} — ${min.tb} (${min.loai})`);

// ============================================================
// 6. Điểm TB toàn lớp cho từng môn
// ============================================================
console.log("\n=== ĐIỂM TB TOÀN LỚP TỪNG MÔN ===");
let sumMath = 0, sumPhysics = 0, sumCs = 0;
for (const sv of students) {
  sumMath    += sv.math;
  sumPhysics += sv.physics;
  sumCs      += sv.cs;
}
const n = students.length;
console.log(`  Toán:    ${(sumMath    / n).toFixed(2)}`);
console.log(`  Lý:      ${(sumPhysics / n).toFixed(2)}`);
console.log(`  CNTT:    ${(sumCs      / n).toFixed(2)}`);

// ============================================================
// 7. BONUS: Điểm TB theo giới tính
// ============================================================
console.log("\n=== ĐIỂM TB THEO GIỚI TÍNH ===");
let sumM = 0, countM = 0, sumF = 0, countF = 0;
for (const sv of data) {
  if (sv.gender === "M") { sumM += sv.tb; countM++; }
  else                   { sumF += sv.tb; countF++; }
}
console.log(`  Nam (M): ${(sumM / countM).toFixed(2)} (${countM} SV)`);
console.log(`  Nữ  (F): ${(sumF / countF).toFixed(2)} (${countF} SV)`);