import React, { Fragment } from "react";
import Style from "./ErrorStyle";

const Error404 = () => {
    return (
        <Fragment>
            <div style={Style.ElementCenteredStyle}>
                <h1>Page Not Found</h1>
            </div>
        </Fragment>
    );
}
export default Error404;