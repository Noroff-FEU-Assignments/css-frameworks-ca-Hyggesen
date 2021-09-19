import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TheSonnet(props) {
  return (
    <div>
      <div className="d-flex">
        <div className="d-flex">
          <div className="d-flex tabs-content flex-md-row">
            <img src={props.image} className="tab-image" />

            <div className="d-flex tab-right">
              <p>{props.content}</p>

              <div className="tabs-social">
                <p className="share-txt mst">SHARE</p>
                <img className="mst" src={props.icon1} />
                <img src={props.icon2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheSonnet;
