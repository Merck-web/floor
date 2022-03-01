import React from "react";
import Instagram from "../../styles/img/Instagram.svg";
import styles from "../../styles/Header.module.css";
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
        <div className={styles.mailModal}>info@recens.ru </div>
        <div className={styles.instagram}>
          <Instagram />
          <div className={styles.instText}>instalink</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
