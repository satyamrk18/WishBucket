import React from "react";
import Navbar from "./../components/navbar.jsx";
import "./AddProduct.css";
import defaultIMG from "./../assets/default-product-image.png";
import { useState, useEffect } from "react";
import { CalendarHeart, CalendarSearch } from "lucide-react";
const AddProduct = () => {
  const [today, setToday] = useState("");
  const [product, setProduct] = useState([]);
  const [error, seterror] = useState("");
  const [newproduct, setNewProduct] = useState({
    id: "",
    title: "",
    link: "",
    image: "",
    price: "",
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
      <div className="addproduct">
        {/* <div className="navbar">
          <Navbar />
        </div> */}
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
                setNewProduct({ ...newproduct, image: e.target.value });
              }}
            />
            {/* more image feature remain */}
            <label>Product Link</label>
            <input
              type="text"
              placeholder="Product Link"
              name="product image url"
              onChange={(e) => {
                setNewProduct({ ...newproduct, link: e.target.value });
              }}
            />
            <label>Product Price ₹</label>
            <input
              type="number"
              placeholder="Product price"
              name="product price"
              onChange={(e) => {
                setNewProduct({ ...newproduct, price: e.target.value });
              }}
            />
            <label>Date Of Manifestation</label>
            <input type="date" defaultValue={today} name="Manifestation" />
            <label>Expected Date To Achive</label>
            <input
              type="date"
              name="Expected Date Of achivement"
              onChange={(e) => {
                setNewProduct({ ...newproduct, archivedate: e.target.value });
              }}
            />
            <label>Priority</label>
            <select
              defaultValue="Medium"
              onChange={(e) =>
                setNewProduct({ ...newproduct, priority: e.target.value })
              }
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <label>Description</label>
            <textarea
              rows="5"
              onChange={(e) => {
                setNewProduct({ ...newproduct, description: e.target.value });
              }}
            />
            <button>Submit</button>
          </form>
        </div>
        <div className="cardview">
          {/* main card */}
          <div className="card">
            {/* image */}
            <div className="product-image">
              <img src={newproduct.image || defaultIMG} alt="product" />
            </div>
            <div className="information">
              {/* title */}
              <div className="title">
                <h3>Title :</h3>
                <p>{newproduct.title}</p>
              </div>
              <div className="title">
                <h3>Link :</h3>
                <p>{newproduct.link}</p>
              </div>
              <div className="price">
                <h3>Price :</h3>
                <p>₹ {newproduct.price}</p>
              </div>
              <div className="dates">
                <div className="dt">
                  <h3>Date Of Manifestation</h3>
                  <p>
                    {" "}
                    <CalendarHeart /> {today}
                  </p>
                </div>
                <div className="dt">
                  <h3>Expected Date To Achive </h3>
                  <p>
                    <CalendarSearch /> {newproduct.archivedate}
                  </p>
                </div>
              </div>
              <div className="title">
                <h3>Priority :</h3>
                <p>{newproduct.priority || "Medium"}</p>
              </div>
              <div className="description">
                <h3>Description :</h3>
                <p>{newproduct.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
