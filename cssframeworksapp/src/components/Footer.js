import React from "react";
import vimeo from "../assets/icons/vimeo-v.png";
import youtube from "../assets/icons/youtube.png";
import Container from "react-bootstrap/esm/Container";

function TheFooter(props) {
  return (
    <div className="footer">
      <Container className="footer--content flex-column flex-md-row">
        <div className="footer--item">
          <img src={vimeo} />
          <img src={youtube} />
        </div>
        <div className="footer--item">
          <p>hello@yay.com</p>
        </div>
        <div className="footer--item">Copyright 2020</div>
      </Container>
    </div>
  );
}

export default TheFooter;
