import React from "react";
import name from "../../../img/footer-wave.png";
import styles from "./FooterWaveImage.module.css";

const FooterWaveImage = () => {
  return (
    <div className={styles.footerWaveSection}>
      <img className={styles.footerWave} src={name} alt="Footer Wave"></img>
    </div>
  );
};

export default FooterWaveImage;
