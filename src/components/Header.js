import React from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border border-primary">
      <div className="container-fluid">
        {/* Left Side - Logo and Name */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/logo.png" alt="Bookstore Logo" width="50" height="50" className="d-inline-block align-top me-2" />
          <h1 className="h4 mb-0">BOOK STORE</h1>
        </a>
        
        {/* Center - Search Bar */}
        <form className="d-flex mx-auto">
          <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
          <button className="btn btn-outline-secondary" type="submit">
            <FaSearch />
          </button>
        </form>

        {/* Right Side - Icons */}
        <div className="d-flex align-items-center">
          <button className="btn btn-link d-flex align-items-center text-dark text-decoration-none me-3">
            <FaUser className="me-1" /> Đăng Nhập
          </button>
          <button className="btn btn-link d-flex align-items-center text-dark text-decoration-none">
            <FaShoppingCart className="me-1" /> Giỏ Hàng
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
