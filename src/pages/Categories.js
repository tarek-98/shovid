import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncCategories, getAllCategories } from "../store/categorySlice";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import "../components/categories.css";

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);

  const [toggleState, setToggleState] = useState(
    categories.map((cat) => {
      return cat;
    })
  );

  return (
    <div className="home">
      <div className="sidebar-cnt pb-5">
        <ul className="cat-list">
          {categories.map((category, idx) => {
            return (
              <Fragment>
                <li key={idx}>
                  <Link
                    onClick={() => setToggleState(category)}
                    className="cat-list-link text-capitalize"
                  >
                    {category.replace("-", " ")}
                  </Link>
                </li>
                <div
                  className={toggleState === category ? "active" : "dropdown-1"}
                >
                  {categories.map((category, idx) => {
                    return (
                      <Fragment>
                        <Link to={`${category}`}>
                          <MdKeyboardDoubleArrowRight className="me-2" />
                          {category}
                        </Link>
                      </Fragment>
                    );
                  })}
                </div>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Categories;
