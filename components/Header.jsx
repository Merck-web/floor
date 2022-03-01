import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import LogoMain from "../styles/img/Logo.svg";
import WhatsApp from "../styles/img/WhatsApp.svg";
import BurgerIcon from "../public/Burger.svg";
import Modal from "./Modal/Modal";
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
      <div className={styles.mail}>info@recens.ru </div>
      <div className={styles.whatsapp}>
        <WhatsApp />
        <div className={styles.number}> +7 977 993 0269</div>
      </div>
      <div className={styles.btn}>Обратный звонок</div>
      <button onClick={handleBurgerMenu} className={styles.btnBurger}>
        {burger ? <CloseIcon /> : <BurgerIcon />}
      </button>
      {burger && <Modal />}
    </nav>
  );
}

export default Header;
