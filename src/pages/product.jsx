import React from "react";
import Navbar from "./../components/navbar.jsx";
import { useEffect, useState } from "react";
const product = () => {

  const [products, setProducts] = useState([])
  useEffect(() => {
    const products =JSON.parse( localStorage.getItem("products"));
    setProducts(products)
  }, []);
  return (
    <div>
      <Navbar />
      <h1>Product page</h1>
     <div className="card">
     {
      products.map((allproduct)=>
      {
          const {title,image,link,price,priority,today,archivedate,description} = allproduct;
          return (
            <div>{title}</div>
          )
      })
     }
     </div>
    </div>
  );
};

export default product;
