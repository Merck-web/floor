import React from "react";
import Instagram from "../../styles/img/Instagram.svg";
import styles from "../../styles/Header.module.css";
import Link from "next/link";
import Script from "next/script";
function Call() {
  return (
      <>
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <Script
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
        !function(a,m,o,c,r,m){a[o + c] = a[o + c] || {
          setMeta: function (p) {
            this.params = (this.params || []).concat([p])
          }
        },a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"906022",hash:"6ca2a840719a84958d6968d92a9174a1",locale:"ru"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");
        `,
              }}>
          </Script>
          <Script id="amoforms_script_906022" async="async" charSet="utf-8"
                  src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1646211625"></Script>
        </div>
      </>
  );
}

export default Call;
