import { Radius } from "lucide-react";
import React from "react";
import "./valuecards.css";
const valuecards = ({ title, value,color}) => {
  return (
    <div className="valuecard" style={{color:`${color}`}}>
      <h3 className="valuetitle">{title}</h3>
      <h1 className="value">{value}</h1>
    </div>
  );
};

export default valuecards;
