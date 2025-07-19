import React from "react";
import "./navbar.css";
import { Link,useLocation } from "react-router-dom";
import {House, BaggageClaim,PackageSearch } from "lucide-react"
const Navbar = () => {
  return (
    <div className="navbar">
      {/* ita all gos to the search bar as pages input */}
      <Link to="/" className={`nav-item ${location.pathname === "/"? "active" : ""}` }><House />Home</Link>


      <Link to="/addproduct" className={`nav-item ${location.pathname === "/addproduct"? "active" : ""}` }><BaggageClaim />Add Product</Link>


      <Link to="/product" className={`nav-item ${location.pathname === "/product" ? "active" : ""}`}><PackageSearch />Product</Link>
    </div>
  );
};

export default Navbar;
