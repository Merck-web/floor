import React from "react";
import Instagram from "../../styles/img/Instagram.svg";
import styles from "../../styles/Header.module.css";
import Link from "next/link";
import Bid from "../Modal/Bid";
import BidFloat from "../Modal/BidFloat";

function Modal() {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.btnModal}>
        <Bid>Оставить заявку</Bid>
        </div>
        <ul className={styles.list}>
          <li>
            <BidFloat>
              Презентация <br /> для event агентств
            </BidFloat>
          </li>
          <li>
            <BidFloat>
              Презентация <br /> для корпораций
            </BidFloat>
          </li>
          <li>
            <BidFloat>
              Презентация <br /> для компаний
            </BidFloat>
          </li>
          <li>
            <BidFloat>
              Презентация для <br /> гостиниц или ресторанов
            </BidFloat>
          </li>
        </ul>
        <a href='mailto:info@recens.flowers' className={styles.mailModal}>
          info@recens.flowers
        </a>
        <Link href='https://www.instagram.com/recens.flowers/'>
          <div className={styles.instagram}>
            <Instagram />
            <div className={styles.instText}>recens.flowers</div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Modal;
