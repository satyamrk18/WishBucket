import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Plus, Heart } from "lucide-react";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="heart">
          <Heart />
        </div>
        <div className="logo-text">
          <h1>WishBucket</h1>
          <p>Your personal wishlist manager</p>
        </div>
      </div>

      {/* ita all gos to the search bar as pages input */}
      <div className="btn">
        <Link to="/addproduct" className="nav-item">
          <Plus />
          Add Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
