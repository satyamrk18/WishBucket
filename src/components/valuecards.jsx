import { Radius } from "lucide-react";
import React from "react";
const ValueCards = ({ title, value,color}) => {
  return (
    <div className="flex flex-col justify-start h-auto w-[350px] p-5 border-2 border-gray-400/27 rounded-xl bg-white sm:p-0 sm:m-1.5 sm:h-24 sm:text-sm" style={{color:`${color}`}}>
      <h3 className="text-black sm:text-center">{title}</h3>
      <h1 className="sm:text-xl">{value}</h1>
    </div>
  );
};

export default ValueCards;
