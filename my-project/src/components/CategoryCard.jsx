import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Card1 from "../assets/Card1.jfif";
import Card2 from "../assets/Card2.jfif";
import Card3 from "../assets/Card3.jfif";
import Card4 from "../assets/Card4.jfif";

function CategoryCard() {
  return (
    <div className="relative flex max-w-[1920px] m-auto  justify-center py-24 bg-lightGrey">
      <div className="flex flex-col gap-10 w-[75%] pb-12">
        <div className="w-[50%] flex flex-col gap-3 m-auto sm:w-full">
          <h3 className="font-mont font-bold tracking-[0.2px] text-categoryColor text-2xl text-center">
            EDITOR’S PICK
          </h3>
          <p className="font-mont font-normal text-xl tracking-[0.2px] text-aTag text-center">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div className="flex gap-7 m-auto flex-wrap ">
          <div
            className="max-w-[500px] h-[500px] bg-no-repeat bg-cover cursor-pointer m-auto sm:w-[323px] sm:m-auto"
            style={{ backgroundImage: `url(${Card1})` }}
          >
            <NavLink to="/" className="inline-block w-[500px] h-[500px] ">
              <div className=" bg-white w-[170px] text-center py-3 px-16 font-mont font-bold tracking-[0.1px] text-categoryColor flex  ml-4 mt-[85%] ">
                MEN
              </div>
            </NavLink>
          </div>
          <div
            className="sm:m-auto w-[240px] h-[500px] bg-no-repeat bg-cover cursor-pointer sm:w-[323px]"
            style={{ backgroundImage: `url(${Card2})` }}
          >
            <NavLink to="/" className="inline-block w-[240px] h-[500px] ">
              <div className="bg-white w-[170px] text-center py-3 px-16 font-mont font-bold tracking-[0.1px] text-categoryColor flex  ml-4 mt-[415px] justify-center">
                WOMAN
              </div>
            </NavLink>
          </div>

          <div className="flex flex-col gap-3 sm:m-auto">
            <div
              className="w-[240px] h-[242px] bg-no-repeat bg-cover cursor-pointer m-auto sm:w-[323px]"
              style={{ backgroundImage: `url(${Card3})` }}
            >
              <NavLink to="/" className="inline-block w-[240px] h-[242px]  ">
                <div className="bg-white w-[170px]  py-3 px-6 font-mont font-bold tracking-[0.1px] text-categoryColor flex  ml-4 mt-[70%] text-center sm:px-3 sm:w-[125px] sm:mt-[75%]">
                  ACCESSORIES
                </div>
              </NavLink>
            </div>
            <div
              className="w-[240px] h-[242px] bg-no-repeat bg-cover cursor-pointer m-auto sm:w-[323px]"
              style={{ backgroundImage: `url(${Card4})` }}
            >
              <NavLink to="/" className="inline-blockw-[240px] h-[242px] ">
                <div className="bg-white w-[120px]  py-3 px-6 font-mont font-bold tracking-[0.1px] text-categoryColor flex  ml-4 mt-[70%]  justify-center sm:mt-[60%]">
                  <p>KIDS</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
