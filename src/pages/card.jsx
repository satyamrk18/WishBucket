import React from "react";
import defaultIMG from "./../assets/default-product-image.png";
import Delete from "./../components/deletebtn.jsx";
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
    <div className="bg-gray-50 w-[400px] rounded-xl shadow-lg overflow-hidden transition-transform duration-200 border border-gray-300 relative m-5 hover:scale-105 hover:cursor-pointer hover:shadow-xl sm:w-[90%] sm:min-w-[90%] sm:text-xs sm:m-2.5">
      <div className="absolute right-1.25 top-1.25">
        <Delete onClick={onDelete} />
      </div>
      <div className="p-image">
        <img src={image || defaultIMG} alt="product" className="w-full h-50 object-cover border-b border-gray-300 sm:h-37.5" />
      </div>
      <div className="p-3.75 flex flex-col justify-evenly">
        <p className="text-center text-2xl font-semibold">{title}</p>
        <h2 className="text-base m-2 font-medium text-gray-800">
          <a href={link} target="_blank" rel="noreferrer" className="text-blue-500 no-underline break-all hover:underline flex items-center gap-2.5">
            <SquareArrowOutUpRight size={20}/>{link}
          </a>
        </h2>
        <div className="flex items-center justify-evenly">
          <p className="text-xl font-semibold text-green-600">Price: ₹{price}</p>
          <h2 className="border border-black p-1.25 rounded-lg text-base m-2 font-medium text-gray-800">Priority: {priority}</h2>
        </div>
        <div className="flex w-full justify-between items-center text-center">
          <div>
            <h2 className="text-base m-2 font-medium text-gray-800"><CalendarClock size={20} color={"#8b5cf6"}/> {" "}Registered: </h2>
            <h2 className="text-base m-2 font-medium text-gray-800"><CalendarHeart size={20} color={"#ec4899"}/> {" "}Expected: </h2>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-base m-2 font-medium text-gray-800">{today} </h2>
            <h2 className="text-base m-2 font-medium text-gray-800">{archiveDate}</h2>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed h-auto">Description : {description}</p>
      </div>
    </div>
  );
};

export default Card;
