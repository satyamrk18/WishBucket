import React from "react";
import Navbar from "./../components/navbar.jsx";
import ValueCards from "./../components/valuecards.jsx";
import Product from "./product.jsx";
import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="valuecards-container">
        <ValueCards title="Total Items" value={10} />
        <ValueCards title="Total Price" value={10} />{" "}
        {/* price rendering remain */}
        <ValueCards title="Total Items" value={10} />
      </div>
      <div>
        <h1>Product Cards</h1>
        <Product />
      </div>
    </div>
  );
};
export default Home;
