import React from "react";
import { connect } from "react-redux";
import { putInBasket } from "../redux/ActionCreators";
import {
  Row,
  Col,
  Button,
} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import shoppingBasket from "../shared/svg/shoppingBasketWhite.svg";

export const CategoryCard = ({ name, image, text }) => {
  return (
    <Card className="card">
      <Card.Header style={{ backgroundColor: "#c3a0e5", textAlign: "center" }}>
        <strong>{name}</strong>
      </Card.Header>
      <Card.Body>
        <Card.Img src={image} width="3em" />
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export const BasketCard = ({ name, image, text }) => {
  return (
    <Card xs={6} sm={4} className="card card-in-basket">
      <Card.Header style={{ backgroundColor: "#c3a0e5", textAlign: "center" }}>
        <strong>{name}</strong>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Card.Img src={image} alt={name} width="3em" />
          </Col>
          <Col className="center">{text}</Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const mapDispatchToProps = {
  putInBasket: (item_index) => putInBasket(item_index),
};

const CatalogCard_original = (props) => {
  const { index, name, image, text, price } = props;

  const handleSelectedItem = (SelectedIndex) => {
    props.putInBasket(SelectedIndex);
  };

  return (
    <Card sm={2} md={4} className="card">
      <Card.Header
        style={{ backgroundColor: "#c3a0e5", textAlign: "center" }}
        className="card-header"
      >
        <Row>
          <Col xs={8}>
            <strong>{name}</strong>
          </Col>
          <Col>
            <Button
              className="right btn-primary"
              onClick={() => handleSelectedItem(index)}
            >
              <span className="no-underline" style={{ fontSize: "0.1em" }}>
                ➜
              </span>
              <img
                src={shoppingBasket}
                title="Shopping Basket"
                alt="Shopping Basket"
                width="15"
              />
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Card.Img src={image} className="shopping" />
          </Col>
          <Col>
            <strong>${price}</strong>
          </Col>
        </Row>
        <Card.Text>
          <em className="botanical">{text}</em>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// To export the named component while being connected to Redux Store
export const CatalogCard = connect(
  null,
  mapDispatchToProps
)(CatalogCard_original);
