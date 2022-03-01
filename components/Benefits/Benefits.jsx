import React from "react";

import styles from "../../styles/Benefits.module.css";
import BenefitsDesck from "./BenefitsDesck";
import BenefitsMobile from "./BenefitsMobile";

function Benefits() {
  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <BenefitsDesck />
      </div>
      <div className={styles.mobile}>
        <BenefitsMobile />
      </div>
    </div>
  );
}

export default Benefits;
