import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchProducts } from "../store/actions/productAction";
const useQuery = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [category, setCategory] = useState();
  // const [gender, setGender] = useState();
  const [filterText, setFilterText] = useState();
  const [filterSort, setFilterSort] = useState();

  const getQueryDatawithCategory = (category, gender) => {
    getQueryData(category, gender);
  };

  const getQueryFromUrl = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const categoryParam = urlSearchParams.get("category");
    const filterTextParam = urlSearchParams.get("filter");
    const filterSortParam = urlSearchParams.get("sort");
    const myObject = {
      category: categoryParam || null,
      filter: filterTextParam || null,
      sort: filterSortParam || null,
    };
    dispatch(fetchProducts(myObject)).then(() => {
      setLoading(false);
    });
  };

  const getQueryData = (category, gender) => {
    const myObject = {
      category: category || null,
      filter: filterText || null,
      sort: filterSort || null,
    };
    setLoading(true);

    dispatch(fetchProducts(myObject)).then(() => {
      setLoading(false);
    });
    const queryParams = new URLSearchParams();
    console.log("SearchParams:", queryParams);
    if (filterText) queryParams.append("filter", filterText);
    if (filterSort) queryParams.append("sort", filterSort);
    if (category) queryParams.append("category", category);
    const queryString = queryParams.toString();
    const fullUrl =
      queryString &&
      `/shopping${
        gender && gender === "k" ? "/women" : "/men"
      }/products?${queryString}`;
    if (fullUrl) {
      history.push(fullUrl);
    }
    console.log("SearchParamsFullUrl:", fullUrl);
  };

  return {
    data,
    loading,
    error,
    getQueryData,
    setFilterText,
    setFilterSort,
    getQueryDatawithCategory,
    getQueryFromUrl,
  };
};

export default useQuery;