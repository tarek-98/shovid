import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../store/productSlice";

function NavBar() {
  const products = useSelector(getAllProducts);
  const [search, setSearch] = useState("");
  const [searchMenu, setSearchMenu] = useState(false);

  return (
    <Navbar expand="lg" className="bg-body-tertiary col-lg-4" sticky="bottom">
      <Container>
        <Navbar.Brand href="#">Gomla Wbas</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              onChange={(e) => {
                setSearch(e.target.value);
                setSearchMenu(true);
              }}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ textTransform: "lowercase" }}
            />
            <Button variant="outline-success">بحث</Button>
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
                    >
                      {product.title}
                    </Link>
                  </div>
                ))}
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
