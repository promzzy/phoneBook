import classes from "./Button.module.css";

const Button = ({ children, className, type = "button", onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${classes.button} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
