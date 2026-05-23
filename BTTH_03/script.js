var danhSach = [];
var dangSuaIndex = -1;
var timerThongBao;

// ===== LOCALSTORAGE =====
function luuLocalStorage() {
  localStorage.setItem("danhSachSV", JSON.stringify(danhSach));
}

function docLocalStorage() {
  var data = localStorage.getItem("danhSachSV");
  if (data) {
    danhSach = JSON.parse(data);
  } else {
    danhSach = [
      { maSV: "SV001", hoTen: "Nguyễn Văn An",  ngaySinh: "2003-05-14", lop: "CNTT1", diem: 8.5, email: "an@gmail.com" },
      { maSV: "SV002", hoTen: "Trần Thị Bình",   ngaySinh: "2003-08-22", lop: "CNTT2", diem: 6.0, email: "binh@gmail.com" },
      { maSV: "SV003", hoTen: "Lê Quốc Cường",   ngaySinh: "2002-11-03", lop: "KTPM1", diem: 5.0, email: "cuong@gmail.com" }
    ];
    luuLocalStorage();
  }
}

// ===== RENDER BẢNG =====
function renderBang() {
  var tbody = document.getElementById("bangSinhVien");
  var html = "";

  if (danhSach.length === 0) {
    html = '<tr><td colspan="7" style="text-align:center;color:#aaa;padding:20px">Chưa có sinh viên nào</td></tr>';
  } else {
    for (var i = 0; i < danhSach.length; i++) {
      var sv = danhSach[i];
      var ngay = sv.ngaySinh.split("-").reverse().join("/");
      html += "<tr>";
      html += "<td>" + sv.maSV + "</td>";
      html += "<td>" + sv.hoTen + "</td>";
      html += "<td>" + ngay + "</td>";
      html += "<td>" + sv.lop + "</td>";
      html += "<td>" + sv.diem.toFixed(1) + "</td>";
      html += "<td>" + (sv.email || "-") + "</td>";
      html += "<td>";
      html += '<button class="btnSua" onclick="moFormSua(' + i + ')">Sửa</button>';
      html += '<button class="btnXoa" onclick="xoaSinhVien(' + i + ')">Xóa</button>';
      html += "</td></tr>";
    }
  }

  tbody.innerHTML = html;
  capNhatThongKe();
}

// ===== THỐNG KÊ =====
function capNhatThongKe() {
  document.getElementById("tongSV").textContent = danhSach.length;

  if (danhSach.length === 0) {
    document.getElementById("diemTB").textContent = "0";
    return;
  }

  var tong = 0;
  for (var i = 0; i < danhSach.length; i++) {
    tong += danhSach[i].diem;
  }
  document.getElementById("diemTB").textContent = (tong / danhSach.length).toFixed(2);
}

// ===== FORM =====
function moFormThem() {
  dangSuaIndex = -1;
  document.getElementById("tieuDeForm").textContent = "Thêm sinh viên";
  document.getElementById("btnLuu").textContent = "Lưu";
  xoaForm();
  hienForm();
}

function moFormSua(index) {
  dangSuaIndex = index;
  var sv = danhSach[index];

  document.getElementById("tieuDeForm").textContent = "Sửa sinh viên";
  document.getElementById("btnLuu").textContent = "Cập nhật";

  document.getElementById("inputMaSV").value     = sv.maSV;
  document.getElementById("inputHoTen").value    = sv.hoTen;
  document.getElementById("inputNgaySinh").value = sv.ngaySinh;
  document.getElementById("inputLop").value      = sv.lop;
  document.getElementById("inputDiem").value     = sv.diem;
  document.getElementById("inputEmail").value    = sv.email;

  hienForm();
}

function hienForm() {
  document.getElementById("overlay").style.display   = "block";
  document.getElementById("popupForm").style.display = "block";
}

function dongForm() {
  document.getElementById("overlay").style.display   = "none";
  document.getElementById("popupForm").style.display = "none";
  xoaForm();
}

function xoaForm() {
  document.getElementById("inputMaSV").value     = "";
  document.getElementById("inputHoTen").value    = "";
  document.getElementById("inputNgaySinh").value = "";
  document.getElementById("inputLop").value      = "";
  document.getElementById("inputDiem").value     = "";
  document.getElementById("inputEmail").value    = "";
}

// ===== LƯU =====
function luuSinhVien() {
  var maSV     = document.getElementById("inputMaSV").value.trim();
  var hoTen    = document.getElementById("inputHoTen").value.trim();
  var ngaySinh = document.getElementById("inputNgaySinh").value;
  var lop      = document.getElementById("inputLop").value;
  var diem     = document.getElementById("inputDiem").value;
  var email    = document.getElementById("inputEmail").value.trim();

  if (!maSV || !hoTen || !ngaySinh || !lop || diem === "") {
    hienThongBao("Vui lòng điền đầy đủ các trường bắt buộc!", "error");
    return;
  }

  if (parseFloat(diem) < 0 || parseFloat(diem) > 10) {
    hienThongBao("Điểm phải từ 0 đến 10!", "error");
    return;
  }

  if (dangSuaIndex === -1) {
    for (var i = 0; i < danhSach.length; i++) {
      if (danhSach[i].maSV === maSV) {
        hienThongBao("Mã sinh viên đã tồn tại!", "error");
        return;
      }
    }
  }

  var sv = { maSV: maSV, hoTen: hoTen, ngaySinh: ngaySinh, lop: lop, diem: parseFloat(diem), email: email };

  if (dangSuaIndex === -1) {
    danhSach.push(sv);
    hienThongBao("Đã thêm sinh viên " + hoTen, "success");
  } else {
    danhSach[dangSuaIndex] = sv;
    hienThongBao("Đã cập nhật sinh viên " + hoTen, "success");
  }

  luuLocalStorage();
  renderBang();
  dongForm();
}

// ===== XÓA =====
function xoaSinhVien(index) {
  if (confirm('Xóa sinh viên "' + danhSach[index].hoTen + '"?')) {
    var ten = danhSach[index].hoTen;
    danhSach.splice(index, 1);
    luuLocalStorage();
    renderBang();
    hienThongBao("Đã xóa sinh viên " + ten, "success");
  }
}

// ===== THÔNG BÁO =====
function hienThongBao(msg, loai) {
  var el = document.getElementById("thongBao");
  el.textContent   = msg;
  el.className     = loai;
  el.style.display = "block";
  clearTimeout(timerThongBao);
  timerThongBao = setTimeout(function() {
    el.style.display = "none";
  }, 3000);
}

// ===== KHỞI ĐỘNG =====
docLocalStorage();
renderBang();