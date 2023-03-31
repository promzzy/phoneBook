import classes from "./Loader.module.css";

function Loader({ isLoading }) {
  return (
    <div
      className={`${classes.loaderRoot} ${
        isLoading ? classes.onLoading : undefined
      }`}
    />
  );
}

export default Loader;
