import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import childrenBook from "../img/children-books.jpg";
import literatureBook from "../img/literature-books.jpg";
import languageBook from "../img/language-books.jpg";
import businessBook from "../img/business-books.jpg";

const categories = [
  { name: "Sách thiếu nhi", image: childrenBook },
  { name: "Sách văn học", image: literatureBook },
  { name: "Sách ngoại ngữ", image: languageBook },
  { name: "Sách kinh doanh", image: businessBook }
];


const Category = () => {
  return (
    <div className="container my-5 text-center">
      <h2 className="fw-bold mb-4">DANH MỤC SẢN PHẨM</h2>
      <div className="row justify-content-center">
        {categories.map((category, index) => (
          <div key={index} className="col-6 col-md-3 d-flex flex-column align-items-center">
            <img src={category.image} alt={category.name} className="img-fluid mb-2" style={{ maxWidth: "150px", height: "auto" }} />
            <p className="fw-bold">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
