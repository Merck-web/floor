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
  const [windowWidth, setwindowWidth] = useState(true);

  useEffect(() => {
    transitionNavBar();
    window.addEventListener("resize", transitionNavBar);
    return () => window.removeEventListener("resize", transitionNavBar);
  });

  const transitionNavBar = () => {
    if (window.screen.width < 400) {
      setwindowWidth(false);
    } else {
      setwindowWidth(true);
    }
  };

  const handleBurgerMenu = () => {
    setBurger(!burger);
    if (burger == true) {
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
      <a href='mailto:info@recens.flowers' className={styles.mail}>
        info@recens.flowers
      </a>
      <div className={styles.whatsapp}>
        <WhatsApp />
        <a href='https://wa.me/79779930269' className={styles.number}>
          +7 977 993 0269
        </a>
      </div>
      <Call />
      <button onClick={handleBurgerMenu} className={styles.btnBurger}>
        {burger ? <CloseIcon /> : <Burger />}
      </button>
      {burger && <Modal />}
    </nav>
  );
}

export default Header;
