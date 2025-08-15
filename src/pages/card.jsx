import React from "react";
import defaultIMG from "./../assets/default-product-image.png";
import Delete from "./../components/deletebtn.jsx";
import "./card.css";
import { SquareArrowOutUpRight,CalendarClock,CalendarHeart } from "lucide-react";
const Card = ({
  title,
  image,
  link,
  price,
  priority,
  today,
  archiveDate,
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
        <p style={{textAlign:"center",fontSize:"25px", fontWeight:"600"}}>{title}</p>
        <h2>
          <a href={link} target="_blank" rel="noreferrer">
            <SquareArrowOutUpRight size={20}/>{link}
          </a>
        </h2>
        <div className="other">
          <p className="pricetag">Price: ₹{price}</p>
          <h2>Priority: {priority}</h2>
        </div>
        <div className="othe-dates">
          <div>
            {" "}
            <h2><CalendarClock size={20} color={"#8b5cf6"}/> {" "}Registered: </h2>
            <h2><CalendarHeart size={20} color={"#ec4899"}/> {" "}Expected: </h2>
          </div>
          <div className="sub-dates">
            <h2>{today} </h2>
            <h2>{archiveDate}</h2>
          </div>
        </div>

        <p>Description : {description}</p>
      </div>
    </div>
  );
};

export default Card;
