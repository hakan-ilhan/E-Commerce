import React from "react";
import img from "../../public/images/product-cover-5.png";
import img1 from "../assets/product-cover-5-1.png";
import img2 from "../assets/product-cover-5-2.png";
import img3 from "../assets/product-cover-5-3.png";
import img4 from "../assets/product-cover-5-4.png";
import img5 from "../assets/product-cover-5-5.png";
import img6 from "../assets/product-cover-5-6.png";
import img7 from "../assets/product-cover-5-7.png";

const hehe = "../../public/images/product-cover-5.png";

const data = [
  {
    images: hehe,
    h5: "Graphic Design",
    a: "English Department",
    price: "$16.48",
    price1: "$6.48",
    colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
  },
  {
    images: img1,
    h5: "Graphic Design",
    a: "English Department",
    price: "$16.48",
    price1: "$6.48",
    colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
  },
  {
    images: img2,
    h5: "Graphic Design",
    a: "English Department",
    price: "$16.48",
    price1: "$6.48",
    colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
  },
  {
    images: img3,
    h5: "Graphic Design",
    a: "English Department",
    price: "$16.48",
    price1: "$6.48",
    colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
  },
  {
    images: img4,
    h5: "Graphic Design",
    a: "English Department",
    price: "$16.48",
    price1: "$6.48",
    colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
  },
  {
    images: img5,
    h5: "Graphic Design",
    a: "English Department",
    price: "$16.48",
    price1: "$6.48",
    colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
  },
  {
    images: img6,
    h5: "Graphic Design",
    a: "English Department",
    price: "$16.48",
    price1: "$6.48",
    colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
  },
  {
    images: img7,
    h5: "Graphic Design",
    a: "English Department",
    price: "$16.48",
    price1: "$6.48",
    colors: ["bg-primaryColor", "bg-dolar", "bg-alertColor", "bg-navBar"],
  },
];

function ProductList() {
  return (
    <div className="">
      <div className="flex gap-5 flex-wrap ">
        {data.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-3 text-center justify-center"
            >
              <img src={data.images} alt="" />
              <h5 className="font-mont font-bold tracking-[0.1px]">
                {data.h5}
              </h5>
              <a
                href=""
                className="text-aTag font-mont font-bold tracking-[0.2px]"
              >
                {data.a}
              </a>
              <div className="flex gap-2 m-auto">
                <h5 className="text-mutedCcolor font-mont font-bold tracking-[0.1px]">
                  {data.price}
                </h5>
                <h5 className="font-mont font-bold tracking-[0.1px] text-dolar">
                  {data.price1}
                </h5>
              </div>
              <div className="flex gap-2 w-[82px] h-[16px] m-auto">
                <div className="w-[16px] h-[16px] rounded-full bg-primaryColor"></div>
                <div className="w-[16px] h-[16px] rounded-full bg-dolar"></div>
                <div className="w-[16px] h-[16px] rounded-full bg-alertColor"></div>
                <div className="w-[16px] h-[16px] rounded-full bg-navBar"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
