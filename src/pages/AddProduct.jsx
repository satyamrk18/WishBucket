import React from "react";
import Navbar from "./../components/navbar.jsx";
import "./AddProduct.css";
import { useState, useEffect } from "react";
const AddProduct = () => {
  const [today, setToday] = useState("");
  useEffect(() => {
    const date = new Date();
    const formatedDate = date.toISOString().split("T")[0];
    setToday(formatedDate);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="addproduct">
        <div className="sideform">
          <form>
            <label>Product Name</label>
            <input type="text" placeholder="Product Name" name="product name" />
            <label>Product Image</label>
            <input
              type="text"
              placeholder="inter product image URL"
              name="product image url"
            />
            {/* more image feature remain */}
            <label>Product Price ₹</label>
            <input
              type="number"
              placeholder="Product price"
              name="product price"
            />
            <lable>Product Link</lable>
            <input type="text" placeholder="Product Link" name="product Link" />
            <label>Date Of Manifestation</label>
            <input type="date" defaultValue={today} name="Manifestation"/>
            <label>Expected Date To Achive</label>
            <input type="date" name="Expected Date Of achivement" />

            <button>Submit</button>
          </form>
        </div>
        <div className="cardview">
          {/* main card */}
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
