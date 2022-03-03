import React from "react";
import styles from "../../styles/Carousel.module.css";
import Bid from "../Modal/Bid";
import Slider from "react-slick";

export default function Carousel() {
  const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <div className={styles.carousel}>
      <Slider {...settings}>
        <div className={styles.item}>
          <img className={styles.img} src={images[0]} />
          <div className={styles.content}>
            <p className={styles.title}>Мы</p>
            <div className={styles.description}>
              Авторская флористическая мастерская RECENS, оказываем полный
              комплекс услуг по обслуживанию компаний в Москве.
            </div>
            <Bid>Оставить заявку</Bid>
            <div className={styles.capture}>
              * Оставьте заявку сейчас и получите подарок !
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img className={styles.img} src={images[1]} />
          <div className={styles.content}>
            <div className={styles.title2}>Мы организуем</div>
            <div className={styles.description2}>
              Авторская флористическая мастерская, оказывает полный комплекс
              услуг по обслуживанию компаний в Москве.
            </div>
            <Bid>Получить презентацию</Bid>
          </div>
        </div>
        <div className={styles.item}>
          <img className={styles.img} src={images[2]} />
          <div className={styles.content}>
            <div className={styles.title2}>Мы разработаем</div>
            <div className={styles.description2}>
              индивидуальный стиль оформления для гостиниц, ресторанов,
              магазинов, входных зон, а также продумаем и реализуем декор
              кабинетов руководителей, персонала и переговорных комнат
            </div>
            <Bid>Получить презентацию</Bid>
          </div>
        </div>
        <div className={styles.item}>
          <img className={styles.img} src={images[3]} />
          <div className={styles.content}>
            <div className={styles.title2}>Мы поможем и сделаем</div>
            <div className={styles.description2}>
              декор для Ваших корпоративных активностей: презентации, выставки,
              мероприятия, дни рождения и другие различные праздники
            </div>
            <Bid>Получить презентацию</Bid>
          </div>
        </div>
      </Slider>
    </div>
  );
}
