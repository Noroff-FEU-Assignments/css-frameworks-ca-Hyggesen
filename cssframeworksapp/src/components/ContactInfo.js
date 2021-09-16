import React from "react";

function TheContactInfo(props) {
  return (
    <div>
      <div>
        <img src={props.icon} />
        <div>{props.content}</div>
      </div>
    </div>
  );
}

export default TheContactInfo;
