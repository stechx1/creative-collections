import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import { COLORS } from "../../config/colors";

const MyLoader = (props) => {
    return (
        <div style={LoaderStyle}>
            < Loader
                type="ThreeDots"
                color={COLORS.BLUE}
                height={100}
                width={50}
            />
            <p style={{ marginTop: "-20px" }}>
                {/* {props.message} */}
            </p>
        </div>
    );
}
const LoaderStyle = {
    margin: "0",
    marginTop: "120px",
    position: "absolute",
    top: "50%",
    left: "50%",
    height: "100%",
    minHeight: "100%",
    textAlign: "center",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    fontSize: "20px",
    fontWeight: "bolder",
}
export default MyLoader;