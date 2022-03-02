import React from "react";
import Instagram from "../../styles/img/Instagram.svg";
import styles from "../../styles/Header.module.css";
import Link from "next/link";
function Modal() {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.btnModal}>Оставить заявку</div>
        <ul className={styles.list}>
          <li>
            <button className={styles.btnInModal}>
              Презентация <br /> для event агентств
            </button>
          </li>
          <li>
            <button className={styles.btnInModal}>
              Презентация <br /> для корпораций
            </button>
          </li>
          <li>
            <button className={styles.btnInModal}>
              Презентация <br /> для компаний
            </button>
          </li>
          <li>
            <button className={styles.btnInModal}>
              Презентация для <br /> гостиниц или ресторанов
            </button>
          </li>
        </ul>
        <a href='mailto:info@recens.ru' className={styles.mailModal}>
          info@recens.ru
        </a>
        <Link href='https://www.instagram.com/'>
          <div className={styles.instagram}>
            <Instagram />
            <div className={styles.instText}>instalink</div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Modal;
