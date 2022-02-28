import React from "react";
import styles from "../styles/Header.module.css";
import LogoMain from "../styles/img/Logo.svg";
import WhatsApp from "../styles/img/WhatsApp.svg";

function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        <LogoMain />
      </div>
      <div className={styles.text}>
        Доставка цветов по Москве и Московской области
      </div>
      <div className={styles.mail}>info@recens.ru </div>
      <div className={styles.whatsapp}>
        <WhatsApp />
        <div className={styles.number}> +7 977 993 0269</div>
      </div>
      <div className={styles.btn}>Обратный звонок</div>
    </nav>
  );
}

export default Header;

