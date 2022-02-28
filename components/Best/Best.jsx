import React from "react";
import BestIcon1 from "../../styles/img/4block/1.svg";
import BestIcon2 from "../../styles/img/4block/2.svg";
import BestIcon3 from "../../styles/img/4block/3.svg";
import BestIcon4 from "../../styles/img/4block/4.svg";
import styles from "../../styles/Best.module.css";

function Best() {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.title}>Лучшие предложения для Вас</div>
        <div className={styles.bests}>
          <div className={styles.card}>
            <BestIcon1 />
            <div>
              Получить презентацию <br />
              <span>для event агентства</span>
            </div>
          </div>
          <div className={styles.card}>
            <BestIcon2 />
            <div>
              Получить презентацию
              <br />
              <span>для корпорации</span>
            </div>
          </div>
          <div className={styles.card}>
            <BestIcon3 />
            <div>
              Получить презентацию <br />
              <span>для компании</span>
            </div>
          </div>
          <div className={styles.card}>
            <BestIcon4 />
            <div>
              Получить презентацию для <br />
              <span>гостиниц или ресторанов</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Best;
