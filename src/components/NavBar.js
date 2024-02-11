import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../store/productSlice";
import { FaSearch } from "react-icons/fa";
import "../components/navbar.css";

function NavBar() {
  const products = useSelector(getAllProducts);
  const [search, setSearch] = useState("");
  const [searchMenu, setSearchMenu] = useState(false);
  const [searchInput, setSearchInput] = useState(false);

  useEffect(() => {
    if (searchInput) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <Navbar expand="lg" className="col-lg-4 nav-content p-1" fixed="top">
      <Container className="nav-container">
        <Navbar.Brand href="#" className="text-white">
          Sh.V
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            onChange={(e) => {
              setSearch(e.target.value);
              setSearchMenu(true);
            }}
            type="search"
            placeholder="Search"
            className={searchInput ? "form-input-active" : "form-input"}
            aria-label="Search"
            style={{ textTransform: "lowercase" }}
          />
          <FaSearch
            className="nav-icon"
            onClick={() => setSearchInput((searchInput) => !searchInput)}
          />
        </Form>
        {search.toLowerCase() && (
          <div className={searchMenu ? "search-menu" : "hide-searchMenu"}>
            {products
              .filter((product) => {
                return search.toLowerCase() === ""
                  ? ""
                  : product.title.toLowerCase().includes(search);
              })
              .map((product, index) => (
                <div key={index} className="link">
                  <Link
                    to={`/product/${product.id}`}
                    className="text-decoration-none mb-2"
                    onClick={() => {
                      setSearch("");
                      setSearchMenu(false);
                    }}
                  >
                    {product.title}
                  </Link>
                </div>
              ))}
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default NavBar;
