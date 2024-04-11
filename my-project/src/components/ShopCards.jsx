import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
/* import { filteredProducts } from "../store/actions/productAction"; */
import useQuery from "../layout/useQuery";

function ShopCards() {
  const {
    data,
    loading,
    error,
    getQueryData,
    setFilterText,
    setFilterSort,
    getQueryDatawithCategory,
  } = useQuery();
  const filterCategory = (id, gender) => {
    getQueryDatawithCategory(id, gender);
  };
  const categories = useSelector((store) => store.globalReducer.categories);
  const sortedData = categories.sort((a, b) => b.rating - a.rating);
  console.log("hebehfe:", sortedData);
  const firstFiveItems = sortedData.slice(0, 5);
  console.log("firstFive:", firstFiveItems);
  const dispatch = useDispatch();
  /* const clickHandler = (id) => {
    dispatch(filteredProducts(id));
  }; */
  return (
    <div className=" bg-lightGrey">
      <div className="flex flex-col items-center justify-center max-w-[1920px] m-auto">
        <div className="flex justify-between px-4 w-[1400px] h-[92px] items-center md:w-full md:flex-col md:h-full md:py-12 md:gap-8">
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
        <div className="max-w-full flex gap-20 flex-wrap pb-24">
          {firstFiveItems.map((item, index) => {
            return (
              <div
                onClick={() => filterCategory(item.id, item.gender)}
                key={index}
                style={{ backgroundImage: `url(${item.img})` }}
                className="bg-cover  h-[223px] m-auto md:w-[330px]"
              >
                {item.id}
                <NavLink
                  to={`/shop/${item.gender}/${item.title}`}
                  className="w-[204px] h-[223px] inline-block"
                />

                <p className="text-center text-categoryColor">
                  Rating : {item.rating}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShopCards;
