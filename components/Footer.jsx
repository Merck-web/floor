import React from "react";
import styles from "../styles/Footer.module.css";
import LogoMain from "../styles/img/Logo.svg";
import Instagram from "../styles/img/Instagram.svg";
import WhatsApp from "../styles/img/WhatsApp.svg";

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <LogoMain />
        </div>
        <div className={styles.text}>
          Доставка цветов по Москве и Московской области
        </div>
        <div className={styles.mail}>info@recens.ru </div>
        <div className={styles.instagram}>
          <Instagram />
          <div className={styles.instText}>instalink</div>
        </div>
        <div className={styles.whatsapp}>
          <WhatsApp />
          <div className={styles.number}> +7 977 993 0269</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
