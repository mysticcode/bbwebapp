import React from "react";
import spinnerImage from "../img/spinner.gif";
const Spinner = () => {
  return (
    <img
      src={spinnerImage}
      style={{
        width: "200px",
        margin: "auto",
        display: "block",
        alt: "loading",
      }}
    ></img>
  );
};

export default Spinner;
