import 'bootstrap/dist/css/bootstrap.css';
import "@/styles/globals.css";
import "../styles/blog/blog.css";
import "../styles/blog/headers.css";

import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min");
  }, []);


  return <Component {...pageProps} />;
}
