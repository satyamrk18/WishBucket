import React from "react";
import Navbar from "./../components/navbar.jsx";
import ValueCards from "./../components/valuecards.jsx";
import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="valuecards-contianer">
        <ValueCards title="Total Items" value={10} />
        <ValueCards title="Total Price" value={10} />{" "}
        {/* price rendering remain */}
        <ValueCards title="Total Items" value={10} />
      </div>
    </div>
  );
};

export default Home;
