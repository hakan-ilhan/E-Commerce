import {
  faCartShopping,
  faChevronLeft,
  faChevronRight,
  faEye,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../assets/armchair.jfif";
import img1 from "../assets/chair.jfif";

const images = [img, img1];

function Product() {
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
    <div className="max-w-full bg-lightGrey py-10">
      <div className="max-w-[1400px] flex flex-col gap-5 m-auto px-3 md:gap-12">
        <div className="flex gap-3 md:m-auto">
          <NavLink to="/" className="text-sm font-bold tracking-[0.2px]">
            Home
          </NavLink>
          <p className="text-mutedCcolor">
            <FontAwesomeIcon icon={faChevronRight} />
          </p>
          <p className="text-mutedCcolor text-sm font-bold tracking-[0.2px]">
            Shop
          </p>
        </div>
        <div className="flex gap-12 md:flex-wrap">
          <div className="flex flex-col gap-4 md:m-auto">
            <div
              className="w-[550px] h-[450px] bg-cover flex items-center justify-between duration-200 md:w-[350px]"
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
            >
              <FontAwesomeIcon
                className="text-4xl text-white ml-5"
                icon={faChevronLeft}
                onClick={prev}
              />
              <FontAwesomeIcon
                className="text-4xl text-white mr-5"
                icon={faChevronRight}
                onClick={next}
              />
            </div>
            <div className="flex gap-5">
              {images.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{ backgroundImage: `url(${item})` }}
                    className={
                      index === currentIndex
                        ? "w-[100px] h-[75px] bg-cover opacity-[50%]"
                        : "w-[100px] h-[75px] bg-cover"
                    }
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-8 max-w-[420px] md:m-auto md:w-[300px]">
            <h4 className="text-categoryColor text-xl tracking-[0.2px]">
              Floating Phone
            </h4>
            <div className="flex gap-4 items-center">
              <div className="flex gap-2">
                <FontAwesomeIcon className="text-yellow" icon={faStar} />
                <FontAwesomeIcon className="text-yellow" icon={faStar} />
                <FontAwesomeIcon className="text-yellow" icon={faStar} />
                <FontAwesomeIcon className="text-yellow" icon={faStar} />
                <FontAwesomeIcon className="bg-white" icon={faStar} />
              </div>
              <p className="text-aTag font-bold text-sm">10 Reviews</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold tracking-[0.2px] text-categoryColor">
                $1,139.33
              </h3>
              <div className="flex gap-2">
                <p className="text-sm text-aTag tracking-[0.2px] font-bold">
                  Availability :
                </p>
                <p className="text-sm text-primaryColor tracking-[0.2px] font-bold leading-6">
                  {" "}
                  In Stock
                </p>
              </div>
            </div>
            <p className="text-sm text-p tracking-[0.2px] mt-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <hr className="text-mutedCcolor border-[1px]" />
            <div className="flex gap-2">
              <div className="rounded-full w-[30px] h-[30px] bg-primaryColor"></div>
              <div className="rounded-full w-[30px] h-[30px] bg-dolar"></div>
              <div className="rounded-full w-[30px] h-[30px] bg-alertColor"></div>
              <div className="rounded-full w-[30px] h-[30px] bg-categoryColor"></div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-sm text-white tracking-[0.2px] font-bold bg-primaryColor py-4 px-8 rounded">
                Select Options
              </button>
              <div className="rounded-full border-border border-[1px] flex items-center justify-center w-[40px] h-[40px]">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="rounded-full border-border border-[1px] flex items-center justify-center w-[40px] h-[40px]">
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
              <div className="rounded-full border-border border-[1px] flex items-center justify-center w-[40px] h-[40px]">
                <FontAwesomeIcon icon={faEye} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
