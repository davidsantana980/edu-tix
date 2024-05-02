import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <Navbar/>
            <link href="https://fonts.googleapis.com/css?family=Playfair&#43;Display:700,900&amp;display=swap" rel="stylesheet"/>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
        <Footer/>
    </Html>
  );
}
