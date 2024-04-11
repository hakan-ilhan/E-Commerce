import React, { useEffect } from "react";
import img from "../assets/product.png";
import img1 from "../assets/product1.png";
import img2 from "../assets/product2.png";
import img3 from "../assets/product3.png";
import img4 from "../assets/product4.png";
import img5 from "../assets/product5.png";
import img6 from "../assets/product6.png";
import img7 from "../assets/product7.png";
import ProductList from "../layout/ProductList";
import Brands from "../layout/Brands";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/productAction";

const data = [
  {
    images: img,

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
function Best() {
  const disptach = useDispatch();
  useEffect(() => {
    disptach(fetchProducts());
  }, []);
  const productData = useSelector((store) => store.productReducer.productList);
  return (
    <div className="bg-lightGrey">
      <div className="max-w-[1400px] m-auto flex flex-col gap-8">
        <h3 className="font-bold text-3xl text-categoryColor leading-8 tracking-[0.1px] m-auto">
          BESTSELLER PRODUCTS
        </h3>
        <hr className="text-hr" />
        <div className="max-w-[1300px] m-auto">
          <ProductList data={productData.products} />
        </div>
        <Brands />
      </div>
    </div>
  );
}

export default Best;
