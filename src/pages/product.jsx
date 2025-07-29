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

 const handleDelete = (index) => {
   if(confirm("Do you want to remove ?") == true)
   {
     const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
   }
  };

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
              archiveDate={archivedate}
              description={description}
              onDelete={() => handleDelete(i)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Product;
