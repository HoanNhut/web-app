import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bannerImage from "../img/banner.jpg"; // Ensure this path is correct and the image exists

const Banner = () => {
  return (
    <div className="container my-4">
      <img src={bannerImage} alt="Valentine Banner" className="img-fluid w-100" />
    </div>
  );
};

export default Banner;
