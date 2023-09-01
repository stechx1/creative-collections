import React, { Fragment } from "react";
import Style from "./ErrorStyle";
import Navbar from "../../modules/home/navbarNew";

const Error500 = () => {
  return (
    <Fragment>
      <Navbar />
      <div style={Style.ElementCenteredStyle}>
        <h1>Server Not Responding.... Try Again</h1>
      </div>
    </Fragment>
  );
};
export default Error500;
