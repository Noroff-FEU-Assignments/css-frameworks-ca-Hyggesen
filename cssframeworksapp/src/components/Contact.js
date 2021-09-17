import React from "react";
import * as ReactDOM from "react-dom";
import TheForm from "./Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TheContactInfo from "./ContactInfo";
import letter from "../assets/icons/envelope.png";
import phone from "../assets/icons/phone.png";
import map from "../assets/icons/map-marker-alt.png";

const ContactContent = () => {
  return (
    <Container>
      <h1 className="h1-style">Submit your details</h1>
      <Container>
        <Row>
          <Col>
            <TheForm />
          </Col>
          <Col>
            <TheContactInfo content="hello@yay.com" icon={letter} />
            <TheContactInfo content="123 456 7890" icon={phone} />
            <TheContactInfo
              content="123 Some Street
Somewhere
Some City
10000"
              icon={map}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactContent;
