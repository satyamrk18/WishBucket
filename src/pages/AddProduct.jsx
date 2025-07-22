import React from "react";
import Navbar from "./../components/navbar.jsx";
import "./AddProduct.css";
import defaultIMG from "./../assets/default-product-image.png"
import { useState, useEffect } from "react";
import { Archive } from "lucide-react";
const AddProduct = () => {
  const [today, setToday] = useState("");
  const [product, setProduct] = useState([]);
  const [error, seterror] = useState("");
  const [newproduct, setNewProduct] = useState({
    id: "",
    title: "",
    image: "",
    price: "",
    link: "",
    today: "",
    archivedate: "",
    priority: "",
    description: "",
  });
  useEffect(() => {
    const date = new Date();
    const formatedDate = date.toISOString().split("T")[0];
    setToday(formatedDate);
  }, []);
  useEffect(() => {
    //title character dependency
    if (newproduct.title.length > 25) {
      alert("Only 25 characters allowed in title");
      setNewProduct((prev) => ({
        ...prev,
        title: prev.title.slice(0, 25),
      }));
    }
  }, [newproduct.title]);

  return (
    <div>
      <Navbar />
      <div className="addproduct">
        <div className="sideform">
          <form>
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Product Name"
              name="product name"
              onChange={(e) => {
                setNewProduct({ ...newproduct, title: e.target.value });
              }}
            />
            <label>Product Image</label>
            <input
              type="text"
              placeholder="Enter product image address"
              name="product Link"
              onChange={(e) => {
                setNewProduct({ ...newproduct, link: e.target.value });
              }}
            />
            {/* more image feature remain */}
            <label>Product Link</label>
            <input
              type="text"
              placeholder="Product Link"
              name="product image url"
            />
            <label>Product Price ₹</label>
            <input
              type="number"
              placeholder="Product price"
              name="product price"
            />
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
            {/* image */}
            <div className="product-image">
              <img
                src={newproduct.link ||defaultIMG }
                alt="product"
              />
            </div>
            {/* title */}
            <div className="title">
              <h3>Title :</h3>
              <p>{newproduct.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
