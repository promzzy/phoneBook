import classes from "./InputField.module.css";

const InputField = ({
  className,
  onChange,
  value,
  placeholder,
  endIcon,
  type,
  password,
  name,
  required,
  ...props
}) => {
  return (
    <div className={classes.inputWrapper}>
      <input
        type={type}
        className={`${classes.inputField} ${className}`}
        value={value}
        name={name}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default InputField;
