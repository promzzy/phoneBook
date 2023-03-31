import { connect } from "react-redux";
import { showPopup } from "../../redux/feature/popupSlice";
import Popup from "./Popup";

const mapState = ({ popup }) => ({
  ispopupOpen: popup.open,
  popupChild: popup.popupChild,
  onClose: popup.onClose,
});

const mapDispatch = (dispatch) => ({
  showPopup: (data) => dispatch(showPopup(data)),
});

export default connect(mapState, mapDispatch)(Popup);
