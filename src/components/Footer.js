import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 border-top border-secondary">
      <div className="container">
        <div className="row">
          {/* Logo và mạng xã hội */}
          <div className="col-md-3 text-center text-md-start">
            <img src="/logo.png" alt="Book Store Logo" className="mb-2" width="80" />
            <h5 className="fw-bold">BOOK STORE</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>

          {/* Dịch vụ */}
          <div className="col-md-3">
            <h5 className="fw-bold">DỊCH VỤ</h5>
            <ul className="list-unstyled">
              <li>Điều khoản sử dụng</li>
              <li>Chính sách bảo mật thông tin cá nhân</li>
              <li>Chính sách bảo mật thanh toán</li>
              <li>Giới thiệu Book Store</li>
              <li>Hệ thống trung tâm - nhà sách</li>
            </ul>
          </div>

          {/* Hỗ trợ */}
          <div className="col-md-3">
            <h5 className="fw-bold">HỖ TRỢ</h5>
            <ul className="list-unstyled">
              <li>Chính sách đổi - trả - hoàn tiền</li>
              <li>Chính sách bảo hành - bồi hoàn</li>
              <li>Chính sách vận chuyển</li>
              <li>Chính sách khách sĩ</li>
            </ul>
          </div>

          {/* Tài khoản của tôi */}
          <div className="col-md-3">
            <h5 className="fw-bold">TÀI KHOẢN CỦA TÔI</h5>
            <ul className="list-unstyled">
              <li>Đăng nhập/Tạo mới tài khoản</li>
              <li>Thay đổi địa chỉ khách hàng</li>
              <li>Chi tiết tài khoản</li>
              <li>Lịch sử mua hàng</li>
            </ul>
          </div>
        </div>

        {/* Thanh toán */}
        <div className="text-center mt-4">
          <img src="/vnpay.png" alt="VNPay" className="mx-2" width="80" />
          <img src="/shopeepay.png" alt="Shopee Pay" className="mx-2" width="80" />
          <img src="/momo.png" alt="MoMo" className="mx-2" width="60" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
