import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import useQuery from "./useQuery";
import { useState } from "react";
import { useEffect } from "react";
import { fetchCategories } from "../store/actions/globalAction";
import {
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const ShopDropDown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const dispatch = useDispatch();
  const categoryData = useSelector((store) => store.globalReducer.categories);
  console.log("HAMZOŞ:", categoryData);

  const renderDropdownItems = (gender) => {
    return categoryData
      .filter((category) => category.code.startsWith(`${gender}:`))
      .map((category, index) => (
        <DropdownItem
          key={index}
          tag={NavLink}
          onClick={() => filterCategory(category.id, category.gender)}
          /*  href={`/shopping/${
            gender === "k" ? "women" : "men"
          }/${category.title.toLowerCase()}`} */
          className="font-mont text-second-text-color"
        >
          {category.title}
        </DropdownItem>
      ));
  };
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
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="mx-auto flex  items-center justify-center ">
      <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
        <DropdownToggle
          className="font-mont text-3xl md:text-sm font-normal md:font-bold text-second-text-color"
          caret
          onClick={toggleDropdown}
        >
          Shop
        </DropdownToggle>
        <DropdownMenu>
          <div className="flex">
            <div>
              <DropdownItem
                className="font-mont font-bold text-lg text-primary-color"
                tag={NavLink}
                href="/shopping"
              >
                All Products
              </DropdownItem>
            </div>
            <div className="flex flex-col">
              <DropdownItem
                className="font-mont font-bold text-lg text-primary-color"
                header
              >
                KadÄ±n
              </DropdownItem>
              {renderDropdownItems("k")}
            </div>
            <div className="flex flex-col">
              <DropdownItem
                className="font-mont font-bold text-lg text-primary-color"
                header
              >
                Erkek
              </DropdownItem>
              {renderDropdownItems("e")}
            </div>
          </div>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
