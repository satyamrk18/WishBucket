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
              placeholder="Enter product image address"
              name="product image url"
            />
            {/* more image feature remain */}
            <label>Product Price ₹</label>
            <input
              type="number"
              placeholder="Product price"
              name="product price"
            />
            <label>Product Link</label>
            <input type="text" placeholder="Product Link" name="product Link" />
            <label>Date Of Manifestation</label>
            <input type="date" defaultValue={today} name="Manifestation" />
            <label>Expected Date To Achive</label>
            <input type="date" name="Expected Date Of achivement" />
            <label>Priority</label>
            <select defaultValue="Medium">
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <label>Description</label>
              <textarea rows="5" />
            <button>Submit</button>
          </form>
        </div>
        <div className="cardview">
          {/* main card */}
          <div className="card">
            <div className="product-image">
              <img
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRqVzAutpwFoSuUFv1vIyP-ggD2AsQtI5_hDkDiCzC1SUvi9icNxapIckvvbPS0V2x0Uq96wJBnNY4ps16r5IPd7MIO1yOwcaycP77NyaXY"
                alt="product"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
