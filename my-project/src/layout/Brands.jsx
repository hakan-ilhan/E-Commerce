import React from "react";
import img from "../assets/Vector-5.svg";
import img1 from "../assets/Vector.svg";
import img2 from "../assets/Vector-1.svg";
import img3 from "../assets/Vector-2.svg";
import img4 from "../assets/Vector-3.svg";
import img5 from "../assets/Vector-4.svg";

const images = [img, img1, img2, img3, img4, img5];

function Brands() {
  return (
    <div className="w-full bg-lightGrey py-24 flex-wrap">
      <div className="max-w-[1400px] flex gap-20 m-auto items-center justify-center flex-wrap md:flex-col ">
        {images.map((item, index) => {
          return <img key={index} src={item} alt="" className="" />;
        })}
      </div>
    </div>
  );
}

export default Brands;
