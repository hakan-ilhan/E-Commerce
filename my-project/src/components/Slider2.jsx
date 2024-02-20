import React, { useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import img from "../assets/shop-hero-2-png-picture-1.png";
import img1 from "../assets/technology-1.png";

const images = [img, img1];
const colors = ["bg-dolar", "bg-[#96E9FB]"];

function Slider2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    const indx = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(indx);
  };

  const prev = () => {
    const indx = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(indx);
  };

  return (
    <div className={`${colors[currentIndex]}   max-w-screen `}>
      <div className="m-auto max-w-[1920px]  flex justify-between items-center text-white">
        <div>
          <FontAwesomeIcon
            className="text-3xl text-white ml-5 cursor-pointer"
            icon={faChevronLeft}
            onClick={prev}
          />
        </div>
        <div className="w-[70%] h-full flex items-end relative">
          <div className="flex items-center  justify-between flex-wrap">
            <div className="flex flex-col gap-6 w-[44%]">
              <h5 className="font-mont font-bold tracking-[0.2px]">
                SUMMER 2020
              </h5>
              <h1 className="font-mont font-bold text-6xl trackin leading-[80px]">
                Vita Classic Product
              </h1>
              <h4 className="font-mont font-normal text-xl w-[78%]">
                We know how large objects will act, We know how are objects will
                act, We know
              </h4>
              <div className="flex items-center gap-4">
                <h3 className="text-2xl font-bold font-mont tracking-[0.1px]">
                  $16.48
                </h3>
                <NavLink
                  to="/"
                  className="bg-headerShop text-center font-mont font-semibold px-16 py-4 rounded-md"
                >
                  ADD TO CART
                </NavLink>
              </div>
            </div>
            <div className="flex gap-1 mt-[45%]">
              {images.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={
                      currentIndex === index
                        ? "bg-white w-[62px] h-[10px] "
                        : "w-[62px] h-[10px] bg-white opacity-[50%] "
                    }
                  />
                );
              })}
            </div>
            <img
              className="object-cover h-[685px] max-w-[500px] mt-4 duration-1000"
              src={images[currentIndex]}
              alt=""
            />
          </div>
        </div>
        <div>
          <FontAwesomeIcon
            className="text-3xl text-white mr-5 cursor-pointer"
            icon={faChevronRight}
            onClick={next}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider2;
