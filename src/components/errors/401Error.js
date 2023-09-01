import React, { Fragment } from "react";
import Style from "./ErrorStyle";
import Navbar from "../../modules/home/navbarNew";

const Error401 = () => {
  return (
    <Fragment>
      <Navbar bg={"#00C2CB"} />
      <div style={Style.ElementCenteredStyle}>
        <h1>You are not authorized to access this Page</h1>
      </div>
    </Fragment>
  );
};
export default Error401;
