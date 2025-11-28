import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  // Build query for products
  const subCatFilter = subCats
    .map((item) => `&[filters][sub_categories][id][$eq]=${item}`)
    .join("");

  const sortQuery = sort ? `&sort=price:${sort}` : "";

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCatFilter}&[filters][price][$lte]=${maxPrice}${sortQuery}`
  );

  return (
    <div className="list">
      {loading
        ? "Loading..."
        : error
        ? "Failed to load products"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
