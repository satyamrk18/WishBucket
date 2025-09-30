import React, { use } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import defaultIMG from "./../assets/default-product-image.png";
import { useState, useEffect } from "react";
import {
  CalendarHeart,
  CalendarSearch,
  House,
  ImageUp,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
const AddProduct = () => {
  const navigate = useNavigate(); // navigator after successfully submission
  const [today, setToday] = useState("");
  const [product, setProduct] = useState([]);
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
window.location.replace("/")
  };
  const handleUploadCapture = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    // Replace YOUR_API_KEY with your ImgBB API key
    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=014e366d2b738301b03bd2a946dc548f",
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();
    const imageURL = result.data.url;
    console.log("Image URL:", result.data.url); // Hosted URL
    setNewProduct({...newproduct, image:imageURL});
  };
  return (
    <div className="w-full h-screen m-0 flex flex-row relative">
      <div className="w-3/20 p-1.25 absolute right-2.5 top-8 flex items-center gap-6.25 sm:absolute sm:right-2.5 sm:top-0">
        <Link to={"/"} className="p-2.5 rounded border-none text-white bg-gradient-to-r from-purple-500 to-pink-500 no-underline sm:h-6 sm:w-fit sm:p-0.5">
          <House />
        </Link>
      </div>
      <div className="w-3/5 h-full flex items-center justify-center overflow-x-hidden sm:m-0 sm:w-4/5">
        <form className="w-100 m-auto flex flex-col gap-2.5">
          <label className="text-sm font-semibold m-3.75 0 1.25 text-gray-800">Product Name</label>
          <input
            type="text"
            placeholder="Product Name"
            value={newproduct.title}
            name="product name"
            onChange={(e) => {
              setNewProduct({ ...newproduct, title: e.target.value });
            }}
            className="w-full p-3 text-sm border border-gray-300 rounded-lg transition-colors duration-300 focus:border-blue-500 focus:outline-none focus:shadow"
          />
          <label className="text-sm font-semibold m-3.75 0 1.25 text-gray-800">Product Image</label>
          <div className="flex flex-col items-center cursor-pointer border border-gray-300 rounded">
            <input
              type="file"
              accept="image/*"
              className="cursor-pointer border-none"
              name="product Link"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    const base64 = reader.result;
                    // Save to state
                    setNewProduct({ ...newproduct, image: base64 });
                    // Save to localStorage
                    localStorage.setItem("productImage", base64);
                  };
                  reader.readAsDataURL(file); // Convert to base64
                }
              }}
            />
            <p>or click a picture</p>
            <input type="file" capture="camera" onChange={handleUploadCapture}/>
          </div>
          <label className="text-sm font-semibold m-3.75 0 1.25 text-gray-800">Product Link</label>
          <input
            type="text"
            placeholder="Product Link"
            name="product url"
            value={newproduct.link}
            onChange={(e) => {
              setNewProduct({ ...newproduct, link: e.target.value });
            }}
            className="w-full p-3 text-sm border border-gray-300 rounded-lg transition-colors duration-300 focus:border-blue-500 focus:outline-none focus:shadow"
          />
          <div className="w-full flex items-center justify-between gap-12.5 sm:block sm:m-2.5">
            <label className="text-sm font-semibold m-3.75 0 1.25 text-gray-800">Date Of Manifestation</label>
            <input
              type="date"
              value={newproduct.today || today}
              name="Manifestation"
              onChange={(e) => {
                setNewProduct({ ...newproduct, today: e.target.value });
              }}
              className="w-full p-3 text-sm border border-gray-300 rounded-lg transition-colors duration-300 focus:border-blue-500 focus:outline-none focus:shadow"
            />
            <label className="text-sm font-semibold m-3.75 0 1.25 text-gray-800">Expected Date To Achive</label>
            <input
              type="date"
              name="Expected Date Of achivement"
              onChange={(e) => {
                setNewProduct({ ...newproduct, archivedate: e.target.value });
              }}
              className="w-full p-3 text-sm border border-gray-300 rounded-lg transition-colors duration-300 focus:border-blue-500 focus:outline-none focus:shadow"
            />
          </div>
          <div className="w-full flex items-center justify-center gap-9.375">
            <div>
              <label className="text-sm font-semibold m-3.75 0 1.25 text-gray-800">Priority</label>
              <select
                value={newproduct.priority}
                onChange={(e) =>
                  setNewProduct({ ...newproduct, priority: e.target.value })
                }
                className="w-full p-3 text-sm border border-gray-300 rounded-lg transition-colors duration-300 focus:border-blue-500 focus:outline-none focus:shadow"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold m-3.75 0 1.25 text-gray-800">Product Price ₹</label>
              <input
                type="number"
                placeholder="Product price"
                value={newproduct.price}
                name="product price"
                onChange={(e) => {
                  setNewProduct({ ...newproduct, price: e.target.value });
                }}
                className="w-4/5 p-3 text-sm border border-gray-300 rounded-lg transition-colors duration-300 focus:border-blue-500 focus:outline-none focus:shadow"
              />
            </div>
          </div>
          <label className="text-sm font-semibold m-3.75 0 1.25 text-gray-800">Description</label>
          <textarea
            rows="3"
            value={newproduct.description}
            onChange={(e) => {
              setNewProduct({ ...newproduct, description: e.target.value });
            }}
            className="p-3 text-sm border border-gray-300 rounded-lg transition-colors duration-300 focus:border-blue-500 focus:outline-none focus:shadow w-full sm:m-0 sm:w-9/10"
          />
          <Link>
            <button type="button" onClick={saveProduct} className="mt-6.25 p-3.5 text-base font-semibold bg-blue-500 text-white border-none rounded-xl cursor-pointer transition-colors duration-300 hover:bg-blue-700">
              Submit
            </button>
          </Link>
        </form>
      </div>
      <div className="w-2/5 h-full flex items-center justify-center sm:hidden">
        {/* main card */}
        <div className="min-h-19/20 h-4/5 w-9/10 border-2 border-black m-25 rounded-xl flex items-center flex-col">
          {/* image */}
          <div className="h-2/5 w-full rounded-xl border border-gray-400 overflow-x-hidden">
            <img src={newproduct.image || defaultIMG} alt="product" className="h-auto w-full rounded object-cover" />
          </div>
          <div className="h-3/5 w-full overflow-x-hidden">
            {/* title */}
            <div className="w-full flex items-center justify-between">
              <h3>Title :</h3>
              <p className="h-6 rounded border border-black w-1/2 overflow-x-hidden min-w-1/2 bg-gray-100 text-center flex items-center flex-nowrap p-0.5">{newproduct.title}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <h3>Link :</h3>
              <p className="h-6 rounded border border-black w-1/2 overflow-x-hidden min-w-1/2 bg-gray-100 text-center flex items-center flex-nowrap p-0.5">{newproduct.link}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <h3>Price :</h3>
              <p className="h-2.5 w-1/4 border border-black bg-gray-100 rounded flex items-center p-2.5 overflow-x-hidden">₹ {newproduct.price == "" ? 0 : newproduct.price} /-</p>
            </div>
            <div className="h-25 w-fit flex flex-row justify-around">
              <div className="flex flex-col items-center justify-center text-center border border-black bg-gray-100 rounded p-1.25">
                <h3>Date Of Manifestation</h3>
                <p>
                  {" "}
                  <CalendarHeart /> {today}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center text-center border border-black bg-gray-100 rounded p-1.25">
                <h3>Expected Date To Achive </h3>
                <p>
                  <CalendarSearch /> {newproduct.archivedate}
                </p>
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <h3>Priority :</h3>
              <p className="h-6 rounded border border-black w-1/2 overflow-x-hidden min-w-1/2 bg-gray-100 text-center flex items-center flex-nowrap p-0.5">{newproduct.priority || "Medium"}</p>
            </div>
            <div className="flex flex-col items-center">
              <h3>Description :</h3>
              <p className="h-fit min-h-37.5 w-4/5 border border-black bg-gray-100 rounded overflow-y-hidden">{newproduct.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
