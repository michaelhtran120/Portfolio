import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <>
      <div class={styles.loadContainer}>
        <div class={styles.ldsGrid}>
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
