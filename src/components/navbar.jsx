import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* ita all gos to the search bar as pages input */}
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/addproduct" className="nav-item">Add Product</Link>
      <Link to="/product" className="nav-item">Product</Link>
    </div>
  );
};

export default Navbar;
