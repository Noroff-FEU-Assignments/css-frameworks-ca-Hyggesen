import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function TheCard(props) {
  return (
    <div>
      <Card style={{ width: "14rem" }}>
        <Card.Img variant="top" src={props.img} className="thecard" />
        <Card.Body>
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
          <Button variant="primary" className="card-button">
            More
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TheCard;
