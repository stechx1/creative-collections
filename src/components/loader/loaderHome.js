import { ThreeDots } from "react-loader-spinner";

import { Colors } from "../../config/Colors";

const LoaderHome = (props) => {
  return (
    <div style={LoaderStyle}>
      <ThreeDots color={Colors.main} height={100} width={50} />
      <p style={{ marginTop: "-20px" }}>{/* {props.message} */}</p>
    </div>
  );
};
const LoaderStyle = {
  margin: "0",
  //   marginTop: "120px",
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "100vh",
  minHeight: "100%",
  textAlign: "center",
  marginRight: "-50%",
  //   transform: "translate(-50%, -50%)",
  fontSize: "20px",
  fontWeight: "bolder",
};
export default LoaderHome;
