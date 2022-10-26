



// bai 1
document.getElementById("btn_1").onclick = function () {
    // Đầu vào dom tới 3 thẻ input dán value 3 biến cầm xử lí
    var num1_1 = document.getElementById("num1_1").value * 1;
    var num1_2 = document.getElementById("num1_2").value * 1;
    var num1_3 = document.getElementById("num1_3").value * 1;
    // xử lí 
    // tạo 3 biến nhận kết quả đã tính
    var ngayTruoc = "";
    var ngaySau = "";
    var ketQua1 = "";
    // xét theo 2 trường hợp nếu nhập sai và đúng, nếu nhập đúng thì tiếp tục chạy dùng ++,-- để làm
    if (0 >= num1_1 || num1_1 > 30 || 0 >= num1_2 || num1_2 > 12) {


        if (0 >= num1_1 || num1_1 > 30) {
            ketQua1 += "<h2>Ngày bị lỗi<h2>";
        }

        if (0 >= num1_2 || num1_2 > 12) {
            ketQua1 += "<h2>Tháng bị lỗi<h2>";
        }
    }
    else {

        ngayTruoc = + ++num1_1 + "," + num1_2 + "," + num1_3;
        ngaySau = + --num1_1 + "," + num1_2 + "," + num1_3;
        ketQua1 += "<h2>";
        ketQua1 += "Ngày trước: " + ngayTruoc;
        ketQua1 += "<br>"
        ketQua1 += "Ngày sau: " + ngaySau;
        ketQua1 += "</h2>";
    }
    //đâù ra dán biến ketQua1 rồi in ra màn hình
    document.getElementById("ketQua1").innerHTML = ketQua1;

};
// bai 2
document.getElementById("btn_2").onclick = function () {
    // đâù vào ngày và năm 
    var thang2 = document.getElementById("thang2").value * 1;
    var nam2 = document.getElementById("nam2").value * 1;
    // xử lí tạo ra 2 biến nhận kết quả xác định những tháng có mấy ngày và tháng 2 của năm nhuận
    // tạo biến ìf else xác định khi nhập sai 
    var soNgay = "";
    var ketQua2 = "";
    if (1 <= thang2 &&thang2<= 12) {
        switch (thang2) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                soNgay += 31 * 1;
                break;
            case 4:
                break
            case 2:
                if ((nam2 % 4 == 0 && nam2 % 100 != 0) || nam2 % 400 == 0) {
                    soNgay += 29 * 1;
                }
                else {
                    soNgay += 28 * 1;

                };
                break;
            case 6:
            case 9:
            case 11:
                soNgay += 30 * 1;
                break;
            // default:
            //     break;

        }
        ketQua2 = "<h2>Số ngày: " + soNgay + "</h2>";
    }

    else {
        ketQua2 = "<h2>Số tháng nhập không hợp lệ</h2>";

    }
    // đầu ra số ngày của tháng đã nhập và báo sai nếu gặp lỗi
    document.getElementById("ketQua2").innerHTML = ketQua2;
};
// bài 3 
document.getElementById("btn_3").onclick = function () {
    //đầu vào số có ba chữ số 
    var num3_1 = document.getElementById("num3_1").value * 1;
    //xử lí tạo 2 biến 1 biến dùng để nhận cách đọc 1 biến để in ra màn hình xác định công thức tinh chia số ra hàng trăm chục và đơn vị dùng hàm if else để xác định nhập số đúng hay sai
    //rồi dùng switch case cộng dồn cách đọc của số từ hàng trăm tới hàng đơn vị`
    var num3_HangTram = Math.floor(num3_1 / 100);
    var num3_HangChuc = Math.floor((num3_1 / 10) % 10);
    var num3_1_HangDV = num3_1 % 10;
    var ketQua3 = "";
    var dapSo3 = "";
    if (num3_1 < 100 || num3_1 > 999) {
        dapSo3 = "<h2>Bạn cần nhập số có 3 chữ số.</h2>";
    } else {
        switch (num3_HangTram) {
            case 1:
                ketQua3 += "Một trăm";
                break;
            case 2:
                ketQua3 += "Hai trăm";
                break;
            case 3:
                ketQua3 += "Ba trăm";
                break;
            case 4:
                ketQua3 += "Bốn trăm";
                break;
            case 5:
                ketQua3 += "Năm trăm";
                break;
            case 6:
                ketQua3 += "Sáu trăm";
                break;
            case 7:
                ketQua3 += "Bảy trăm";
                break;
            case 8:
                ketQua3 += "Tám trăm";
                break;
            case 9:
                ketQua3 += "Chín trăm";
                break;

            default:
                break;
        }
        if (num3_HangChuc == 0 && num3_1_HangDV == 0) {
            switch (num3_HangChuc) {
                case 0:
                    ketQua3 += "";
                    break;
                case 1:
                    ketQua3 += " mƯời";
                    break;
                case 2:
                    ketQua3 += " hai mươi";
                    break;
                case 3:
                    ketQua3 += " ba mươi";
                    break;
                case 4:
                    ketQua3 += " bốn mươi";
                    break;
                case 5:
                    ketQua3 += " năm mươi";
                    break;
                case 6:
                    ketQua3 += " sáu mươi";
                    break;
                case 7:
                    ketQua3 += " bảy mươi";
                    break;
                case 8:
                    ketQua3 += " tám mươi";
                    break;
                case 9:
                    ketQua3 += " chín mươi";
                    break;

                default:
                    break;
            }

        } else {
            switch (num3_HangChuc) {
                case 0:
                    ketQua3 += " lẻ";
                    break;
                case 1:
                    ketQua3 += " mƯời";
                    break;
                case 2:
                    ketQua3 += " hai mươi";
                    break;
                case 3:
                    ketQua3 += " ba mươi";
                    break;
                case 4:
                    ketQua3 += " bốn mươi";
                    break;
                case 5:
                    ketQua3 += " năm mươi";
                    break;
                case 6:
                    ketQua3 += " sáu mươi";
                    break;
                case 7:
                    ketQua3 += " bảy mươi";
                    break;
                case 8:
                    ketQua3 += " tám mươi";
                    break;
                case 9:
                    ketQua3 += " chín mươi";
                    break;

                default:
                    break;
            }

        }
        if (num3_HangChuc == 0 || num3_HangChuc == 1) {
            switch (num3_1_HangDV) {
                case 0:
                    ketQua3 += "";
                    break;
                case 1:
                    ketQua3 += " một";
                    break;
                case 2:
                    ketQua3 += " hai";
                    break;
                case 3:
                    ketQua3 += " ba";
                    break;
                case 4:
                    ketQua3 += " bốn";
                    break;
                case 5:
                    ketQua3 += " năm";
                    break;
                case 6:
                    ketQua3 += " sáu";
                    break;
                case 7:
                    ketQua3 += " bảy";
                    break;
                case 8:
                    ketQua3 += " tám";
                    break;
                case 9:
                    ketQua3 += " chín";
                    break;

                default:
                    break;
            }
        } else {
            switch (num3_1_HangDV) {
                case 0:
                    ketQua3 += "";
                    break;
                case 1:
                    ketQua3 += " mốt";
                    break;
                case 2:
                    ketQua3 += " hai";
                    break;
                case 3:
                    ketQua3 += " ba";
                    break;
                case 4:
                    ketQua3 += " bốn";
                    break;
                case 5:
                    ketQua3 += " năm";
                    break;
                case 6:
                    ketQua3 += " sáu";
                    break;
                case 7:
                    ketQua3 += " bảy";
                    break;
                case 8:
                    ketQua3 += " tám";
                    break;
                case 9:
                    ketQua3 += " chín";
                    break;

                default:
                    break;
            }


        }
        dapSo3 = "<h2>Số đọc là: " + ketQua3 + "</h2>";

    }
    //đầu ra in ra màn hình cách đọc hoặc lỗi bằng thẻ đã lưu kết quả ở trên
    document.getElementById("ketQua3").innerHTML = dapSo3;
};



function TinhkhoangCach(xA, yA, xB, yB) {
    var khoangCach = "";
    khoangCach = Math.sqrt((xB - xA) * (xB - xA) + (yB - yA) * (yB - yA));
    return khoangCach;
}
// bài 4
document.getElementById("btn_4").onclick = function () {
    //đầu vào tên 3 sinh viên và tọa độ x y nhà 3 sinh viên, toạ độ của trường
    // Trường đại học
    var toaDoX3_DH3 = document.getElementById("toaDoX3_DH3").value * 1;
    var toaDoY3_DH3 = document.getElementById("toaDoY3_DH3").value * 1;
    // sinh viên 1
    var ten3_SV1 = document.getElementById("ten3_SV1").value;
    var toaDoX3_SV1 = document.getElementById("toaDoX3_SV1").value * 1;
    var toaDoY3_SV1 = document.getElementById("toaDoY3_SV1").value * 1;
    // sinh viên 2
    var ten3_SV2 = document.getElementById("ten3_SV2").value;
    var toaDoX3_SV2 = document.getElementById("toaDoX3_SV2").value * 1;
    var toaDoY3_SV2 = document.getElementById("toaDoY3_SV2").value * 1;
    // sinh viên 3
    var ten3_SV3 = document.getElementById("ten3_SV3").value;
    var toaDoX3_SV3 = document.getElementById("toaDoX3_SV3").value * 1;
    var toaDoY3_SV3 = document.getElementById("toaDoY3_SV3").value * 1;
    // xử lí tạo 1 biến nhận kết quả , tạo 1 function để tính khoảng cách giữa trường và nhà của 3 sinh viên
    //lưu khoảng cách từ nhà 3 sinh viên tới trường bằng 3 biến 
    //tạo if else để xác đinh định nha ai xa nhất và 2 nhà 3 nhà xa nhất bằng nhau vẫn hiện
    var ketQua4 = "";

    var khoangCach_SV1 = TinhkhoangCach(toaDoX3_SV1, toaDoY3_SV1, toaDoX3_DH3, toaDoY3_DH3);
    var khoangCach_SV2 = TinhkhoangCach(toaDoX3_SV2, toaDoY3_SV2, toaDoX3_DH3, toaDoY3_DH3);
    var khoangCach_SV3 = TinhkhoangCach(toaDoX3_SV3, toaDoY3_SV3, toaDoX3_DH3, toaDoY3_DH3);

    if (khoangCach_SV1 >= khoangCach_SV2 && khoangCach_SV1 >= khoangCach_SV3) {
        ketQua4 += " " + ten3_SV1;
        if (khoangCach_SV1 === khoangCach_SV2) {
            ketQua4 += " " + ten3_SV2;
        }
        if (khoangCach_SV1 === khoangCach_SV3) {
            ketQua4 += " " + ten3_SV3;
        }
    }
    else if (khoangCach_SV1 >= khoangCach_SV2 && khoangCach_SV1 >= khoangCach_SV3) {
        ketQua4 += " " + ten3_SV1;
        if (khoangCach_SV1 === khoangCach_SV2) {
            ketQua4 += " " + ten3_SV2;
        }
        if (khoangCach_SV1 === khoangCach_SV3) {
            ketQua4 += " " + ten3_SV3;
        }
    }

    else if (khoangCach_SV2 >= khoangCach_SV1 && khoangCach_SV2 >= khoangCach_SV3) {
        ketQua4 += " " + ten3_SV2;
        if (khoangCach_SV2 === khoangCach_SV1) {
            ketQua4 += " " + ten3_SV1;
        }
        if (khoangCach_SV2 === khoangCach_SV3) {
            ketQua4 += " " + ten3_SV3;
        }
    }
    else if (khoangCach_SV3 >= khoangCach_SV1 && khoangCach_SV3 >= khoangCach_SV2) {
        ketQua4 += " " + ten3_SV2;
        if (khoangCach_SV3 === khoangCach_SV2) {
            ketQua4 += " " + ten3_SV1;
        }
        if (khoangCach_SV3 === khoangCach_SV1) {
            ketQua4 += " " + ten3_SV1;
        }
    }
    var dapSo_4 = "<h2>Sinh Viên nhà xa nhất: " + ketQua4 + "</h2>";
    // in ra màn hình kết quả đã lưu ở biến trên nhà ai xa nhất
    document.getElementById("ketQua4").innerHTML = dapSo_4;
};





