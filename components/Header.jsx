import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import LogoMain from "../styles/img/Logo.svg";
import WhatsApp from "../styles/img/WhatsApp.svg";
import Burger from "./BtnMobile/BtnMobile"
import Modal from "./Modal/Modal";
import Call from "./Modal/Call";
import CloseIcon from "../public/close-burger.svg";
import MobileLogo from "../public/logoMobile.svg";

function Header() {
  const [burger, setBurger] = useState(false);
  const [windowWidth, setwindowWidth] = useState(false);

  useEffect(() => {
    window.addEventListener("on", transitionNavBar);
    return () => window.removeEventListener("on", transitionNavBar);
  });

  const transitionNavBar = () => {
    if (window.screen.width < 400) {
      setwindowWidth(true);
    } else {
      setwindowWidth(false);
    }
  };

  const handleBurgerMenu = () => {
    setBurger(!burger);
    if (!burger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  return (
    <nav className={styles.header}>
      <div className={styles.logo}>
        {windowWidth ? <LogoMain /> : <MobileLogo />}
      </div>
      <div className={styles.text}>
        Доставка цветов по Москве и Московской области
      </div>
      <a href='mailto:info@recens.ru' className={styles.mail}>
        info@recens.ru
      </a>
      <div className={styles.whatsapp}>
        <WhatsApp />
        <a href='tel:+79779930269' className={styles.number}>
          +7 977 993 0269
        </a>
      </div>
      <button className={styles.btn}>Обратный звонок</button>
      <Call />
      <button onClick={handleBurgerMenu} className={styles.btnBurger}>
        {burger ? <CloseIcon /> : <Burger />}
      </button>
      {burger && <Modal />}
    </nav>
  );
}

export default Header;
