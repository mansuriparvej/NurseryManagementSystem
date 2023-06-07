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
      <Card.Header style={{ backgroundColor: "#34495e", textAlign: "center" }}>
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
      <Card.Header style={{ backgroundColor: "#34495e", textAlign: "center" }}>
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
        style={{ backgroundColor: "#bbe5f9", textAlign: "center" }}
        className="card-header"
      >
        <Row>
          <Col xs={8}>
            <strong>{name}</strong>
          </Col>
          <Col>
            <Button
              className="right btn-secondary"
              onClick={() => handleSelectedItem(index)}
            >
              <span className="add-to-cart">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/></svg>
              </span>
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
          <span className="prize">
            <strong>${price}</strong>
          </span>
          </Col>
        </Row>
        <Card.Text>
          <span className="botanical">Category: {index}</span>
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
