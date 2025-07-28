// Product.jsx
import React, { useEffect, useState } from "react";
import "./product.css";
import Card from "./card.jsx";
const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  //priority grouping

  return (
    <div className="products">
      {products.map((product, i) => {
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
          <div key={i}>
            <Card
              title={title}
              image={image}
              link={link}
              price={price}
              priority={priority}
              today={today}
              archivedate={archivedate}
              description={description}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Product;
