import classes from "./Popup.module.css";

const Popup = ({
  ispopupOpen,
  popupChild,
  showPopup,
  onClose,
  childComponentStyles,
}) => {
  function closePopup() {
    showPopup({ open: false });
    onClose?.();
  }
  return (
    <div
      onClick={closePopup}
      className={`${classes.popupRoot} ${
        !ispopupOpen ? classes.popupOpen : undefined
      }`}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`${classes.childComponent} ${childComponentStyles}`}
      >
        {popupChild}
      </div>
    </div>
  );
};

export default Popup;
