import React, { useState } from "react";
import img from "../assets/shop-hero-1.png";
import img2 from "../assets/shop-hero-3.png";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const bgImg = [img, img2];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImg = () => {
    const indx = currentIndex === 0 ? bgImg.length - 1 : currentIndex - 1;
    setCurrentIndex(indx);
  };

  const nextImg = () => {
    const indx = currentIndex === bgImg.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(indx);
  };

  return (
    <div className="max-w-[1920px] h-[791px] relative m-auto ">
      <div
        style={{ backgroundImage: `url(${bgImg[currentIndex]})` }}
        className="w-full h-full bg-cover duration-500"
      ></div>
      <div
        onClick={prevImg}
        className="text-white text-3xl absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 rounded-full cursor-pointer "
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div
        onClick={nextImg}
        className="text-white text-3xl absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 rounded-full cursor-pointer"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div className="flex gap-1 absolute top-[95%] left-[40%] translate-x-[50%] translate-y-[-95%] justify-center">
        {bgImg.map((i, index) => {
          return (
            <div
              key={index}
              className={
                currentIndex === index
                  ? "bg-white w-[62px] h-[10px]"
                  : "w-[62px] h-[10px] bg-white opacity-[50%]"
              }
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-6 text-white absolute top-[45%] left-[13%]">
        <h5 className="font-mont font-bold tracking-[0.2px]">SUMMER 2020</h5>
        <h1 className="font-mont font-bold text-6xl trackin">NEW COLLECTION</h1>
        <h4 className="font-mont font-normal text-xl w-[60%]">
          We know how large objects will act, but things on a small scale.
        </h4>
        <NavLink
          to="/"
          className="bg-headerShop text-center font-mont font-semibold w-[38%] py-3"
        >
          SHOP NOW
        </NavLink>
      </div>
    </div>
  );
}

export default Slider;
