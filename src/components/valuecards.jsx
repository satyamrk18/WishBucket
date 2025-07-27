import { Radius } from "lucide-react";
import React from "react";

const valuecards = ({ title, value }) => {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    height: "auto",
    width: "350px",
    padding: "20px",
    border: "2px solid rgba(128, 128, 128, 0.272)",
    borderRadius:"10px",
    backgroundColor:"white"
  };
  return (
    <div style={style}>
      <h3>{title}</h3>
      <h1>{value}</h1>
    </div>
  );
};

export default valuecards;
