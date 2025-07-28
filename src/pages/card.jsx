import React from "react";
import defaultIMG from "./../assets/default-product-image.png";
import Delete from "./../components/deletebtn.jsx"
import "./card.css";

const Card = ({
  title,
  image,
  link,
  price,
  priority,
  today,
  archivedate,
  description,
  onDelete,
}) => {
  return (
    <div className="product-card">
    <div className="delete">
 <Delete onClick={onDelete} />
    </div>
      <div className="p-image">
        <img src={image || defaultIMG} alt="product" />
      </div>
      <div className="other-info">
        <h2>Title: {title}</h2>
        <h2>
          Link:{" "}
          <a href={link} target="_blank" rel="noreferrer">
            {link}
          </a>
        </h2>
        <div className="other">
          <h2>Price: ₹{price}</h2>
          <h2>Priority: {priority}</h2>
        </div>
        <div className="other">
          <h2>Registered: {today}</h2>
          <h2>Expected: {archivedate}</h2>
        </div>
        <p>Description : {description}</p>
      </div>
    </div>
  );
};

export default Card;
