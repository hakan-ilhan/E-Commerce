import React from "react";
import { NavLink } from "react-router-dom";
import img from "../assets/unsplash.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function ProductDesc() {
  return (
    <div className="py-12">
      <div className="max-w-[1400px] px-3 flex flex-col gap-12  m-auto">
        <div className="flex gap-14 m-auto">
          <NavLink
            to="/"
            className="text-aTag font-sm font-semibold tracking-[0.2px]"
          >
            Description
          </NavLink>
          <NavLink
            to="/"
            className="text-aTag font-sm font-bold tracking-[0.2px]"
          >
            Additional Information
          </NavLink>
          <NavLink
            to="/"
            className="text-aTag font-sm font-semibold tracking-[0.2px]"
          >
            Reviews <span className="text-dolar">(0)</span>
          </NavLink>
        </div>
        <hr className="text-hr w-full" />
        <div className="flex gap-32  flex-wrap md:W-[350px] md:m-auto md:gap-12">
          <div className="border-r-8 border-b-8 rounded-md w-[325px] h-[382px] md:m-auto">
            <img
              className=" object-cover  border-border1 rounded-md w-full h-full"
              src={img}
              alt=""
            />
          </div>
          <div className="text-aTag font-sm tracking-[0.2px] leading-5 flex flex-col gap-8 max-w-[380px] md:m-auto">
            <h3 className="text-categoryColor text-3xl leading-8 font-bold">
              the quick fox jumps over{" "}
            </h3>
            <div className="flex flex-col gap-4">
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <p>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 text-aTag md:m-auto">
            <h3 className="text-categoryColor text-3xl leading-8 font-bold">
              the quick fox jumps over{" "}
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex  gap-6 items-center ">
                <FontAwesomeIcon className="" icon={faChevronRight} />
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px]">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex  gap-6 items-center ">
                <FontAwesomeIcon className="" icon={faChevronRight} />
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px]">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex  gap-6 items-center ">
                <FontAwesomeIcon className="" icon={faChevronRight} />
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px]">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex  gap-6 items-center ">
                <FontAwesomeIcon className="" icon={faChevronRight} />
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px]">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
            </div>
            <h3 className="text-categoryColor text-3xl leading-8 font-bold">
              the quick fox jumps over{" "}
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex  gap-6 items-center ">
                <FontAwesomeIcon className="" icon={faChevronRight} />
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px]">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex  gap-6 items-center ">
                <FontAwesomeIcon className="" icon={faChevronRight} />
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px]">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
              <div className="flex  gap-6 items-center ">
                <FontAwesomeIcon className="" icon={faChevronRight} />
                <h6 className="font-bold text-sm leading-6 tracking-[0.2px]">
                  the quick fox jumps over the lazy dog
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDesc;
