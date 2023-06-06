import React from "react";
import { Col, Row, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../shared/svg/logo.svg";
import shoppingBasket from "../shared/svg/shoppingBasket.svg";
import shoppingBasketWithFlowers from "../shared/svg/shoppingBasketWithFlowers.svg";

const mapStateToProps = (state) => {
  return { basket: state.ReduxBasket };
};

const MyNavbar = ({ basket }) => {
  return (
    <Nav className="navbar">
      <Col xs={12} md={2}>
        <NavLink to="/home" aria-current="page">
          Home
        </NavLink>
      </Col>
    
      <Col xs={12} md={2}>
        <NavLink to="/shopping_basket" aria-current="page">
          <img
            src={basket.length > 0 ? shoppingBasketWithFlowers : shoppingBasket}
            title="Shopping Basket"
            alt="Shopping Basket"
            id="shopping-basket"
          />
          <p>{basket ? "" : JSON.stringify(basket.length)}</p>
        </NavLink>
      </Col>
    </Nav>
  );
};

function Header(props) {
  return (
    <React.Fragment>
      <Row>
        <Col xs={0} md={2}>
          <Link to="/home">
            <img src={logo} alt="Logo" className="logo-big d-none d-md-block" />
          </Link>
        </Col>
        <Col xs={12} md={10}>
          <h1 id="title">Online Nursery Managment</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={0} md={2} />
        <Col>
          <Row>
          </Row>
          <Row xs={8} md={10}>
            <MyNavbar basket={props.basket} />
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default connect(mapStateToProps)(Header);
