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
            <a>
              Презентация <br /> для event агентств
            </a>
          </li>
          <li>
            <a>
              Презентация <br /> для корпораций
            </a>
          </li>
          <li>
            <a>
              Презентация <br /> для компаний
            </a>
          </li>
          <li>
            <a>
              Презентация для <br /> гостиниц или ресторанов
            </a>
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
