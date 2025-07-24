import React, { useEffect, useState } from "react";
import Navbar from "./../components/navbar.jsx";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Product page</h1>
      <div className="card">
        {products.length > 0 ? (
          products.map((allproduct, index) => {
            const {
              title,
              image,
              link,
              price,
              priority,
              today,
              archivedate,
              description,
            } = allproduct;

            return (
              <div className="product-card" key={index}>
                <div className="p-image">
                  <img src={image} alt="product" />
                </div>
                <div className="other-info">
                  <h2>Title: {title}</h2>
                  <h2>
                    URL: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                  </h2>
                  <div className="other">
                    <h2>Price: ₹{price}</h2>
                    <h2>Priority: {priority}</h2>
                  </div>
                  <div className="other">
                    <h2>Register Date: {today}</h2>
                    <h2>Expected Date: {archivedate}</h2>
                  </div>
                  <div className="description"><h2>Description : {description}</h2></div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No product found</p>
        )}
      </div>
    </div>
  );
};

export default Product;
