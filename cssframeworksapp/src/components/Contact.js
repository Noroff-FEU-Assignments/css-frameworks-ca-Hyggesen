import React from "react";
import TheForm from "./Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TheContactInfo from "./ContactInfo";

const ContactContent = () => {
  return (
    <div>
      <h1>Submit your details</h1>
      <Container>
        <Row>
          <Col>
            <TheForm />
          </Col>
          <Col>
            <TheContactInfo content="hello@yay.com" />
            <TheContactInfo content="123 456 7890" />
            <TheContactInfo
              content="123 Some Street
                        Somewhere
                        Some City
                        10000m"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactContent;
