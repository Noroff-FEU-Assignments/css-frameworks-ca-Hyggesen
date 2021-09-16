import React from "react";

const Header = (props) => {
  const HeaderStyles = {
    color: props.color,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    padding: props.padding,
  };

  return <h1 style={HeaderStyles}>{props.content}</h1>;
};

export default Header;
