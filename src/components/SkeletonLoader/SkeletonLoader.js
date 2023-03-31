import React from "react";
import classes from "./skeletonLoader.module.css";

export default function SkeletonLoader({ className, style }) {
  return (
    <div className={`${classes.loaderContainner} ${className}`} style={style}>
      <div className={classes.animator} />
    </div>
  );
}
