import { Radius } from "lucide-react";
import React from "react";
import "./valuecards.css";
const valuecards = ({ title, value }) => {
  return (
    <div className="valuecard">
      <h3>{title}</h3>
      <h1 className="value">{value}</h1>
    </div>
  );
};

export default valuecards;
