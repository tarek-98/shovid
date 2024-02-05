import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faInbox,
  faUser,
  faCartShopping,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { getAllCarts } from "../store/cartSlice";

function Footer() {
  const carts = useSelector(getAllCarts);
  return (
    <Navbar expand="lg" className="col-lg-4 nav-buttom" fixed="bottom">
      <Container>
        <div className="nav-item">
          <Link to="/" className="nav-item">
            <FontAwesomeIcon icon={faHouse} className="icon active" />
            <span className="item-name active">الرئيسية</span>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/" className="nav-item">
            <FontAwesomeIcon icon={faMessage} className="icon active" />
            <span className="item-name active">الرسائل</span>
          </Link>
        </div>
        <div className="nav-item pop">
          <Link to="/cart" className="nav-item">
            <FontAwesomeIcon icon={faCartShopping} className="icon active" />
            <span className="cart-num text-dark">{carts.length}</span>
            <span className="item-name">العربة</span>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/categories" className="nav-item">
            <FontAwesomeIcon icon={faInbox} className="icon active" />
            <span className="item-name">الاقسام</span>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/profile" className="nav-item">
            <FontAwesomeIcon icon={faUser} className="icon active" />
            <span className="item-name">حسابي</span>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default Footer;
