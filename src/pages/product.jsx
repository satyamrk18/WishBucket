// Product.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import defaultIMG from "./../assets/default-product-image.png";
import "./Product.css"; // styling file for product display
import { House, PackagePlus } from "lucide-react";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div className="product-page">
      <div className="p-navbar">
        <Link to="/" className="item"><House /></Link>
        <Link to="/addproduct" className="item"><PackagePlus /></Link>
      </div>
      <h1>Product Page</h1>
      <div className="cards">
        {products.length > 0 ? (
          products.map((product, index) => {
            const {
              title,
              image,
              link,
              price,
              priority,
              today,
              archivedate,
              description,
            } = product;

            return (
              <div className="product-card" key={index}>
                <div className="p-image">
                  <img src={image || defaultIMG} alt="product" />
                </div>
                <div className="other-info">
                  <h2>Title: {title}</h2>
                  <h2>
                    Link: <a href={link} target="_blank" rel="noreferrer">{link}</a>
                  </h2>
                  <div className="other">
                    <h2>Price: ₹{price}</h2>
                    <h2>Priority: {priority}</h2>
                  </div>
                  <div className="other">
                    <h2>Registered: {today}</h2>
                    <h2>Expected: {archivedate}</h2>
                  </div>
                  <div className="description">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Product;
