import React from "react";
import styles from "../styles/Footer.module.css";
import LogoMain from "../styles/img/Logo.svg";
import Instagram from "../styles/img/Instagram.svg";
import WhatsApp from "../styles/img/WhatsApp.svg";
import { format } from "date-fns";
import Link from "next/link";
import Script from "next/script";

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
        <a href='mailto:info@recens.flowers' className={styles.mail}>
          info@recens.flowers
        </a>
        <Link href='https://www.instagram.com/recens.flowers/'>
          <div className={styles.instagram}>
            <Instagram />
            <div className={styles.instText}>recens.flowers</div>
          </div>
        </Link>
        <div className={styles.whatsapp}>
          <WhatsApp />
          <a href='https://wa.me/79779930269' className={styles.number}>
            +7 977 993 0269
          </a>
        </div>
        <div className={styles.copyright}>
          © {format(new Date(), "yyyy")} RECENS. Все права защищены.
        </div>
      </footer>
      {/* eslint-disable-next-line @next/next/inline-script-id */}
      <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(a,m,o,c,r,m){a[m]={id:"139579",hash:"b35b823eceddfaa2b614e71a6f4332dfa0b841d639189ab23ef4cf145bf2760a",locale:"ru",inline:false,setMeta:function(p){this.params=(this.params||[]).concat([p])}};a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};var d=a.document,s=d.createElement('script');s.async=true;s.id=m+'_script';s.src='https://gso.amocrm.ru/js/button.js?1646225507';d.head&&d.head.appendChild(s)}(window,0,'amoSocialButton',0,0,'amo_social_button'));
        `,
          }}>
      </Script>
      {/* eslint-disable-next-line @next/next/inline-script-id */}
      <Script strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
              ym(87687598, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
        `,}}>
      </Script>
      <noscript><div><img src="https://mc.yandex.ru/watch/87687598" alt="" /></div></noscript>
    </div>
  );
}

export default Footer;
