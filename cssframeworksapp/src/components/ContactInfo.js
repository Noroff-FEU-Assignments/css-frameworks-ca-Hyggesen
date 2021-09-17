import React from "react";

function TheContactInfo(props) {
  return (
    <div class="info-wrapper">
      <div className="d-flex m-4 icon-wrapper">
        <img className="contact-icons" src={props.icon} />
        <div>{props.content}</div>
      </div>
    </div>
  );
}

export default TheContactInfo;
