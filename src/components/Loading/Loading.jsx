import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <>
      <div className={styles.loadContainer}>
        <div className={styles.ldsGrid}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className={styles.loadingText}>Loading...</p>
      </div>
    </>
  );
};

export default Loading;
