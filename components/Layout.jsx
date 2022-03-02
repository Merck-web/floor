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
