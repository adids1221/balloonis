import React, { Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Categories from "../components/Categories";
import BalooneRed from "../components/BalooneRed";
const HomeScreen = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <BalooneRed />
          </Col>
          <Col>
            <Row>
              <Col>
                <Categories />
                <Categories />
              </Col>
              <Col>
                <Categories />
                <Categories />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HomeScreen;
