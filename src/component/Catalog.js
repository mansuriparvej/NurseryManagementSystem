import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { CategoryCard } from "./Cards";

class Catalog extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row row-content" />

        <div className="container">
          <Row>
            <Col xs={1} />
            <Col>
              <hr />
              <Row>
                <Col sm={6} lg={3}>
                  <Link to="/flowers" className="no-underline">
                    <CategoryCard
                      name="Flowers"
                      image="https://www.edenbrothers.com/store/media/Seeds-Flowers/resized/SFFOR113-1_medium.jpg"
                    />
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-content" />
        </div>
      </React.Fragment>
    );
  }
}

export default Catalog;
