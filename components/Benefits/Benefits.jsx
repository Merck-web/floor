import React from "react";
import BenefitsIcons1 from "../../styles/img/3 block/1.svg";
import BenefitsIcons2 from "../../styles/img/3 block/2.svg";
import BenefitsIcons3 from "../../styles/img/3 block/3.svg";
import BenefitsIcons4 from "../../styles/img/3 block/4.svg";
import BenefitsIcons5 from "../../styles/img/3 block/5.svg";
import BenefitsIcons6 from "../../styles/img/3 block/6.svg";
import BenefitsIcons7 from "../../styles/img/3 block/7.svg";
import styles from "../../styles/Benefits.module.css";

function Benefits() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Комплексная флористика для компаний</div>
      <div className={styles.row1}>
        <div className={styles.card}>
          <BenefitsIcons5 />
          <div className={styles.text}>
            Крупнейший ассортиментов цветов в Москве и Московской области
          </div>
        </div>
        <div className={styles.card}>
          <BenefitsIcons4 />
          <div className={styles.text}>
            Индивидуальный подход каждому клиенту
          </div>
        </div>
        <div className={styles.card}>
          <BenefitsIcons7 />
          <div className={styles.text}>
            Стилизация под ваш корпоративный стиль или мероприятие
          </div>
        </div>
        <div className={styles.card}>
          <BenefitsIcons6 />
          <div className={styles.text}>
            Гарантированные подарки и скидки новым и постоянным клиентам
          </div>
        </div>
      </div>
      <div className={styles.row2}>
        <div className={styles.card}>
          <BenefitsIcons1 />
          <div className={styles.text}>Отсрочка платежа</div>
        </div>
        <div className={styles.card}>
          <BenefitsIcons3 />
          <div className={styles.text}>Всегда свежие цветы</div>
        </div>
        <div className={styles.card}>
          <BenefitsIcons2 />
          <div className={styles.text}>Гибкая системы оплаты</div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
