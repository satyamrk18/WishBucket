import React from "react";

const Heading = () => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-4xl font-bold whitespace-nowrap overflow-hidden w-fit inline-block animate-[typing_6s_steps(60,end)_forwards] animate-[blink_0.7s_step-end_infinite] sm:text-base md:text-2xl">
        Add Your <span className="text-[rgb(191,0,255)]">Favourite</span> Wishes To <span className="text-[rgb(191,0,255)]">WishBucket</span> !
      </h1>
    </div>
  );
};

export default Heading;
