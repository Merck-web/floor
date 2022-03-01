import React from "react";
import styles from "../styles/Footer.module.css";
import LogoMain from "../styles/img/Logo.svg";
import Instagram from "../styles/img/Instagram.svg";
import WhatsApp from "../styles/img/WhatsApp.svg";
import { format } from "date-fns";
import Link from "next/link";

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
        <a href='mailto:info@recens.ru' className={styles.mail}>
          info@recens.ru
        </a>
        <Link href='https://www.instagram.com/'>
          <div className={styles.instagram}>
            <Instagram />
            <div className={styles.instText}>instalink</div>
          </div>
        </Link>
        <div className={styles.whatsapp}>
          <WhatsApp />
          <a href='tel:+79779930269' className={styles.number}>
            +7 977 993 0269
          </a>
        </div>
        <div className={styles.copyright}>
          © {format(new Date(), "yyyy")} RECENS. Все права защищены.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
