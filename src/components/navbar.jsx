import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* ita all gos to the search bar as pages input */}
      <Link to="/">Home</Link>{" "}
      <Link to="/addproduct">Add Product</Link>
      <Link to="/product">Product</Link>
    </div>
  );
};

export default Navbar;
