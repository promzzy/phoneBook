import { connect } from "react-redux";
import Loader from "./Loader";

const mapStateToProps = ({ app }) => ({
  isLoading: app.isLoading,
});

export default connect(mapStateToProps)(Loader);
