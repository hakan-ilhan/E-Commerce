import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setFetchState } from "../store/actions/productAction";
import useQuery from "./useQuery";
import {
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";

function ProductList({ data, total }) {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 25;
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const {
    loading,
    error,
    getQueryData,
    setFilterText,
    setFilterSort,
    getQueryFromUrl,
    getQueryOffset,
  } = useQuery();
  const handlePageClick = ({ nextSelectedPage }) => {
    setCurrentPage(nextSelectedPage);
    const offset = nextSelectedPage * itemsPerPage;
    getQueryOffset(25, offset);
  };
  const filterProduct = () => {
    getQueryData();
  };
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFilterText(e.target.value);
    console.log("inputText:", e.target.value);
  };
  const fetchState = useSelector((store) => store.productReducer.fetchState);
  useEffect(() => {
    if (fetchState == "NOT_FETCHED") {
      dispatch(fetchProducts());
      getQueryFromUrl();
    }
  }, []);
  const allProducts = useSelector((store) => store.productReducer.productList);
  const urlSearchParams = new URLSearchParams(window.location.search);
  const paginationOffSetParam = urlSearchParams.get("offset");
  console.log("Check : ", paginationOffSetParam);

  return (
    <div className="max-w-[1300px]  m-auto py-12">
      <div className="max-w-[95%] flex justify-between pb-12 items-center">
        <p>Showing all {total} result</p>
        <div className="flex">
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle
              className="font-mont text-xl md:text-sm font-normal md:font-bold text-black"
              caret
            >
              Sort
            </DropdownToggle>
            <DropdownMenu className="font-mont">
              <DropdownItem onClick={() => setFilterSort("price:asc")}>
                Price:Asc
              </DropdownItem>
              <DropdownItem onClick={() => setFilterSort("price:desc")}>
                Price:Desc
              </DropdownItem>
              <DropdownItem onClick={() => setFilterSort("rating:asc")}>
                Rating:Asc
              </DropdownItem>
              <DropdownItem onClick={() => setFilterSort("rating:desc")}>
                Rating:Desc
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div>
          <Input onChange={handleChange}></Input>
        </div>
        <button
          onClick={filterProduct}
          className="bg-primary-bg font-mont font-bold w-32 h-9  rounded-md"
        >
          Filter
        </button>
      </div>
      {fetchState != "FETCHED" ? (
        <div className="flex" role="status">
          <svg
            aria-hidden="true"
            className="w-32 h-32 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : (
        <div className="flex gap-8 flex-wrap gap-y-20 ">
          {data.map((data, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-3 text-center justify-center m-auto max-w-[240px] h-[550px]"
              >
                <img
                  src={data.images[0].url}
                  alt=""
                  className="w-[239px]  object-contain"
                  onClick={() => history.push(`/products/${data.id}`)}
                />
                <h5 className="font-mont font-bold tracking-[0.1px]">
                  {data.name}
                </h5>
                <a
                  href=""
                  className="text-aTag text-xs leading-5 px-1 py-1 font-mont font-bold tracking-[0.2px] text-center"
                >
                  {data.description}
                </a>
                <div className="flex gap-2 m-auto">
                  <h5 className="text-mutedCcolor font-mont font-bold tracking-[0.1px]">
                    {data.price}$
                  </h5>
                  <h5 className="font-mont font-bold tracking-[0.1px] text-dolar">
                    {Math.ceil(data.price * 0.8)}$
                  </h5>
                </div>
                <div className="flex gap-2  m-auto">
                  <div className="w-[16px] h-[16px] rounded-full bg-primaryColor"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-dolar"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-alertColor"></div>
                  <div className="w-[16px] h-[16px] rounded-full bg-navBar"></div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="custom-container font-mont font-semibold flex justify-center">
        <ReactPaginate
          className=""
          nextLabel=">>"
          onClick={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          initialPage={paginationOffSetParam / 25}
          pageCount={allProducts.total / 25}
          previousLabel="<<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default ProductList;
