import React from "react";
import styles from "../../styles/Carousel.module.css";

function Carousel() {
  const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
  
  return (
    <>
      <div className='slider'>
        <div className={styles.navigation}>
          <a className={styles.dots} href='#slide-1'></a>
          <a className={styles.dots} href='#slide-2'></a>
          <a className={styles.dots} href='#slide-3'></a>
          <a className={styles.dots} href='#slide-4'></a>
        </div>

        <div className='slides'>
          <div id='slide-1'>
            <img className={styles.img} src={images[0]} />
            <div className={styles.content}>
              <div className={styles.title}>RECENS</div>
              <div className={styles.description}>
                Авторская флористическая мастерская, оказывает полный комплекс
                услуг по обслуживанию компаний в Москве.
              </div>
              <button className={styles.btn}>Оставить заявку</button>
              <div className={styles.capture}>
                * Оставьте заявку сейчас и получите подарок !
              </div>
            </div>
          </div>
          <div id='slide-2'>
            <img className={styles.img} src={images[1]} />
            <div className={styles.content}>
              <div className={styles.title2}>Мы организуем</div>
              <div className={styles.description2}>
                Авторская флористическая мастерская, оказывает полный комплекс
                услуг по обслуживанию компаний в Москве.
              </div>
              <button className={styles.btn}>Получить презентацию</button>
            </div>
          </div>
          <div id='slide-3'>
            <img className={styles.img} src={images[2]} />
            <div className={styles.content}>
              <div className={styles.title2}>Мы разработаем</div>
              <div className={styles.description2}>
                индивидуальный стиль оформления для гостиниц, ресторанов,
                магазинов, входных зон, а также продумаем и реализуем декор
                кабинетов руководителей, персонала и переговорных комнат
              </div>
              <button className={styles.btn}>Получить презентацию</button>
            </div>
          </div>
          <div id='slide-4'>
            <img className={styles.img} src={images[3]} />
            <div className={styles.content}>
              <div className={styles.title2}>Мы поможем и сделаем</div>
              <div className={styles.description2}>
                декор для Ваших корпоративных активностей: презентации,
                выставки, мероприятия, дни рождения и другие различные праздники
              </div>
              <button className={styles.btn}>Получить презентацию</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
