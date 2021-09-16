import React from "react";

function TheSonnet(props) {
  return (
    <div>
      <div>
        <img src={props.image} />
      </div>
      <div>
        <p>{props.content}</p>
        <div>
          <p>SHARE</p>
          <img src={props.icon} />
        </div>
      </div>
    </div>
  );
}

export default TheSonnet;
