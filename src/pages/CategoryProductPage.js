import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllProductsByCategory,
  fetchAsyncProductsOfCategory,
} from "../store/categorySlice";
import Product from "../components/Product";

const CategoryProductPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const categoryProducts = useSelector(getAllProductsByCategory);

  useEffect(() => {
    dispatch(fetchAsyncProductsOfCategory(category));
  }, [dispatch, category]);

  return (
    <div className="home">
      <div className="cat-products py-5 bg-whitesmoke">
        <div className="container">
          <div className="cat-products-content">
            {categoryProducts.map((product) => {
              return <Product product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductPage;
