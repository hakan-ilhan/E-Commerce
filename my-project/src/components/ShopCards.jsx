import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import img from "../assets/card-item.png";
import img1 from "../assets/card-item-1.png";
import img2 from "../assets/card-item-2.png";
import img3 from "../assets/card-item-3.png";
import img4 from "../assets/card-item-4.png";

function ShopCards() {
  const data = [img, img1, img2, img3, img4];
  return (
    <div className=" bg-lightGrey">
      <div className="flex flex-col items-center justify-center max-w-[1920px] m-auto">
        <div className="flex justify-between w-[1080px] h-[92px] items-center md:w-full md:flex-col md:h-full md:py-12 md:gap-8">
          <h3 className="text-categoryColor text-2xl tracking-[0.1px] font-bold">
            Shop
          </h3>
          <div className="flex gap-3 items-center">
            <NavLink
              className="text-categoryColor font-bold text-sm tracking-[0.2px]"
              to="/"
            >
              Home
            </NavLink>
            <FontAwesomeIcon
              className="text-mutedCcolor"
              icon={faChevronRight}
            />
            <h6 className="text-sm text-mutedCcolor tracking-[0.2px]">Shop</h6>
          </div>
        </div>
        <div className="max-w-[1088px] flex gap-4 flex-wrap ">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                style={{ backgroundImage: `url(${item})` }}
                className="bg-cover w-[204px] h-[223px] m-auto md:w-[330px]"
              >
                <NavLink
                  to="/product"
                  className="w-[204px] h-[223px] inline-block"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShopCards;
