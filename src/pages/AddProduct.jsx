import React, { use } from "react";
import { Link } from "react-router-dom";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";
import defaultIMG from "./../assets/default-product-image.png";
import { useState, useEffect } from "react";
import {
  CalendarHeart,
  CalendarSearch,
  House,
  PackageSearch,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
const AddProduct = () => {
  const navigate = useNavigate(); // navigator after successfully submission
  const [today, setToday] = useState("");
  const [product, setProduct] = useState([]);
  const [pathname, setPathname] = useState("/addproduct")
  const [newproduct, setNewProduct] = useState({
    title: "",
    link: "",
    image: "",
    price: "",
    today: "",
    archivedate: "",
    priority: "Medium",
    description: "",
  });
  useEffect(() => {
    //stores the product in prexisting array
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProduct(storedProducts);

    const date = new Date();
    const formatedDate = date.toISOString().split("T")[0];
    setToday(formatedDate);
  }, []);
  useEffect(() => {
    //title character dependency
    if (newproduct.title.length > 25) {
      toast.error(
        "Oops! Your title is a bit too long. Please limit it to 25 characters."
      );
      setNewProduct({ ...newproduct, title: "" });
      return;
    }

    if (newproduct.description.length > 100) {
      toast.error(
        "Oops! Your description is a bit too long. Please limit it to 100 characters."
      );
      setNewProduct({ ...newproduct, description: "" });
      return;
    }
  }, [newproduct.title, newproduct.description]);
  //save data
  const saveProduct = () => {
    if (!newproduct.title.trim()) {
      toast.error("opps! The title feild remain empty, please complete it .");
      return;
    }
    if (!newproduct.link.trim()) {
      toast.error("opps! The Product Link remain empty, please complete it .");
      return;
    }
    if (!newproduct.description.trim()) {
      toast.error(
        "opps! The description feild remain empty, please complete it ."
      );
      return;
    }

    // Add today's date to product
    const newProductEntry = { ...newproduct, today };

    // Add new product to current list
    const updatedProducts = [...product, newProductEntry];

    // Update state and localStorage
    setProduct(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    toast.success("Product saved successfully!");

    setNewProduct({
      ...newproduct,
      title: "",
      link: "",
      image: "",
      archivedate: "",
      priority: "Medium",
      price: "",
      description: "",
    });
   setPathname("/");
  };
  return (
    <div>
      <div className="addproduct">
        <div className="p-navbar">
          <Link to={"/"} className="item">
            <House />
          </Link>
        </div>
        <div className="sideform">
          <form>
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Product Name"
              value={newproduct.title}
              name="product name"
              onChange={(e) => {
                setNewProduct({ ...newproduct, title: e.target.value });
              }}
            />
            <label>Product Image</label>
            <input
              type="text"
              placeholder="Enter product image address"
              value={newproduct.image}
              name="product Link"
              onChange={(e) => {
                setNewProduct({ ...newproduct, image: e.target.value });
              }}
            />
            <label>Product Link</label>
            <input
              type="text"
              placeholder="Product Link"
              name="product image url"
              value={newproduct.link}
              onChange={(e) => {
                setNewProduct({ ...newproduct, link: e.target.value });
              }}
            />
            <div className="dates-container">
              <label>Date Of Manifestation</label>
              <input
                type="date"
                value={newproduct.today || today}
                name="Manifestation"
                onChange={(e) => {
                  setNewProduct({ ...newproduct, today: e.target.value });
                }}
              />
              <label>Expected Date To Achive</label>
              <input
                type="date"
                name="Expected Date Of achivement"
                onChange={(e) => {
                  setNewProduct({ ...newproduct, archivedate: e.target.value });
                }}
              />
            </div>
            <div className="price-priority-container">
              <div>
                <label>Priority</label>
                <select
                  value={newproduct.priority}
                  onChange={(e) =>
                    setNewProduct({ ...newproduct, priority: e.target.value })
                  }
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div>
                <label>Product Price ₹</label>
                <input
                  type="number"
                  placeholder="Product price"
                  value={newproduct.price}
                  name="product price"
                  onChange={(e) => {
                    setNewProduct({ ...newproduct, price: e.target.value });
                  }}
                />
              </div>
            </div>
            <label>Description</label>
            <textarea
              rows="3"
              value={newproduct.description}
              onChange={(e) => {
                setNewProduct({ ...newproduct, description: e.target.value });
              }}
            />
            <Link to={pathname}>
              <button type="button" onClick={saveProduct}>
                Submit
              </button>
            </Link>
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
                <p>₹ {newproduct.price == "" ? 0 : newproduct.price} /-</p>
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
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AddProduct;
