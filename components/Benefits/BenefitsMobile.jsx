import React from "react";
import styles from "../../styles/Benefits.module.css";
import BenefitsIcons1 from "../../styles/img/3 block/1.svg";
import BenefitsIcons2 from "../../styles/img/3 block/2.svg";
import BenefitsIcons3 from "../../styles/img/3 block/3.svg";
import BenefitsIcons4 from "../../styles/img/3 block/4.svg";
import BenefitsIcons5 from "../../styles/img/3 block/5.svg";
import BenefitsIcons6 from "../../styles/img/3 block/6.svg";
import BenefitsIcons7 from "../../styles/img/3 block/7.svg";
import Slider from "react-slick";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="benefits">
      <div className={styles.carousel}>
        <div className={styles.title}>Комплексная флористика для компаний</div>
        <Slider {...settings}>
          <div className={styles.item}>
            <div className={styles.content}>
              <div className={styles.card}>
                <div className={styles.icon}><BenefitsIcons5 /></div>
                <div className={styles.text}>
                  Крупнейший <br /> ассортиментов цветов в <br /> Москве и
                  Московской области
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              <div className={styles.card}>
                <div className={styles.icon}><BenefitsIcons4 /></div>
                <div className={styles.text}>
                  Индивидуальный <br /> подход каждому <br /> клиенту
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              <div className={styles.card}>
                <div className={styles.icon}><BenefitsIcons7 /></div>
                <div className={styles.text}>
                  Стилизация под ваш корпоративный стиль или мероприятие
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              <div className={styles.card}>
                <div className={styles.icon}><BenefitsIcons6 /></div>
                <div className={styles.text}>
                  Гарантированные подарки и <br /> скидки новым и постоянным
                  клиентам
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              <div className={styles.card}>
                <div className={styles.icon}><BenefitsIcons1 /></div>
                <div className={styles.text}>
                  Отсрочка <br /> платежа
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              <div className={styles.card}>
                <div className={styles.icon}><BenefitsIcons3 /></div>
                <div className={styles.text}>
                  Всегда свежие <br /> цветы
                </div>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}>
              <div className={styles.card}>
                <div className={styles.icon}><BenefitsIcons2 /></div>
                <div className={styles.text}>
                  Гибкая системы <br /> оплаты
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
