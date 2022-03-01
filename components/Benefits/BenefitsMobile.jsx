import React from "react";
import styles from "../../styles/Benefits.module.css";
import BenefitsIcons1 from "../../styles/img/3 block/1.svg";
import BenefitsIcons2 from "../../styles/img/3 block/2.svg";
import BenefitsIcons3 from "../../styles/img/3 block/3.svg";
import BenefitsIcons4 from "../../styles/img/3 block/4.svg";
import BenefitsIcons5 from "../../styles/img/3 block/5.svg";
import BenefitsIcons6 from "../../styles/img/3 block/6.svg";
import BenefitsIcons7 from "../../styles/img/3 block/7.svg";

function Carousel() {
  return (
    <>
      <div className='slider'>
        <div className={styles.navigation}>
          <a className={styles.dots} href='#slide-10'></a>
          <a className={styles.dots} href='#slide-20'></a>
          <a className={styles.dots} href='#slide-30'></a>
          <a className={styles.dots} href='#slide-40'></a>
          <a className={styles.dots} href='#slide-50'></a>
          <a className={styles.dots} href='#slide-60'></a>
          <a className={styles.dots} href='#slide-70'></a>
        </div>

        <div className='mobile-slides'>
          <div id='slide-10'>
            <div className={styles.content}>
              <div className={styles.card}>
                <BenefitsIcons5 />
                <div className={styles.text}>
                  Крупнейший <br /> ассортиментов цветов в <br /> Москве и
                  Московской области
                </div>
              </div>
            </div>
          </div>
          <div id='slide-20'>
            <div className={styles.content}>
              <div className={styles.card}>
                <BenefitsIcons4 />
                <div className={styles.text}>
                  Индивидуальный <br /> подход каждому <br /> клиенту
                </div>
              </div>
            </div>
          </div>
          <div id='slide-30'>
            <div className={styles.content}>
              <div className={styles.card}>
                <BenefitsIcons7 />
                <div className={styles.text}>
                  Стилизация под ваш корпоративный стиль или мероприятие
                </div>
              </div>
            </div>
          </div>
          <div id='slide-40'>
            <div className={styles.content}>
              <div className={styles.card}>
                <BenefitsIcons6 />
                <div className={styles.text}>
                  Гарантированные подарки и <br /> скидки новым и постоянным
                  клиентам
                </div>
              </div>
            </div>
          </div>
          <div id='slide-50'>
            <div className={styles.content}>
              <div className={styles.card}>
                <BenefitsIcons1 />
                <div className={styles.text}>
                  Отсрочка <br /> платежа
                </div>
              </div>
            </div>
          </div>
          <div id='slide-60'>
            <div className={styles.content}>
              <div className={styles.card}>
                <BenefitsIcons3 />
                <div className={styles.text}>
                  Всегда свежие <br /> цветы
                </div>
              </div>
            </div>
          </div>
          <div id='slide-70'>
            <div className={styles.content}>
              <div className={styles.card}>
                <BenefitsIcons2 />
                <div className={styles.text}>
                  Гибкая системы <br /> оплаты
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
