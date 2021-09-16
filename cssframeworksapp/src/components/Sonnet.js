import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TheSonnet(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={4}>
            <img src={props.image} />
          </Col>
          <Col>
            <p>{props.content}</p>
            <Container>
              <Col>
                <p>SHARE</p>
              </Col>
              <Col>
                <img src={props.icon} />
              </Col>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TheSonnet;
