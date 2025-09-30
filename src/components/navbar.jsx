import React from "react";
import { Link } from "react-router-dom";
import { Plus, Heart } from "lucide-react";
const Navbar = () => {
  return (
    <div className="flex items-center p-2.5 justify-evenly w-full top-0 fixed h-12 bg-white/42 border-b-2 border-gray-400/27 z-10">
      <div className="flex flex-row items-center justify-center gap-1.5">
        <div className="p-1.5 flex items-center rounded-md text-white bg-gradient-to-r from-purple-500 to-pink-500">
          <Heart />
        </div>
        <div className="flex flex-col">
          <h1 className="m-0 text-xl font-bold">WishBucket</h1>
          <p className="m-0 text-sm text-gray-500">Your personal wishlist manager</p>
        </div>
      </div>

      {/* ita all gos to the search bar as pages input */}
      <div>
        <Link to="/addproduct" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2.5 px-5 border-none rounded-lg font-normal cursor-pointer transition-colors duration-300 flex items-center no-underline gap-1.5 hover:from-purple-600 hover:to-pink-600">
          <Plus />
          Add Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
