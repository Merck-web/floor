import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import {NextScript} from "next/document";
import Script from "next/script"
import {absoluteSize} from "tailwindcss/lib/util/dataTypes";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Header />
      <div className="absolute bottom-0 right-0">
        <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
        !function(a,m,o,c,r,m){a[o + c] = a[o + c] || {
        setMeta: function (p) {
          this.params = (this.params || []).concat([p])
        }
        },a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"899389",hash:"83a82e9f9d3c37b7266c37f7a58d20df",locale:"ru"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");
        `,
            }}>

        </Script>
        <Script id="amoforms_script_899389" async="async" charSet="utf-8" src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1646155940"></Script>
      </div>
      <div>{children}</div>
      <Footer />


    </div>
  );
}

Layout.defaultProps = {
  title: "RECENS",
  description:
    "Авторская флористическая мастерская, оказывает полный комплекс услуг по обслуживанию компаний в Москве",
  keywords: "цветы, флористика",
};
