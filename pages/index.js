import Link from "next/link";
import Carousel from "@/src/components/index/Carousel";
import Head from "next/head";

import TicsBasicosJumbotron from "@/src/components/index/TicsBasicosJumbotron";
import TicsEducacionJumbotron from "@/src/components/index/TicsEducacionJumbotron";
import VentajasTicsJumbotron from "@/src/components/index/VentajasTicsJumbotron";

function Sidebar() {
    return (
        <div className="position-sticky" style={{top: "5rem"}}>
            <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">¡Bienvenido/a!</h4>
                <p className="mb-0">
                    En este espacio, exploraremos cómo las TIC están transformando la forma en que enseñamos y aprendemos.
                    Acompáñanos mientras exploramos las últimas tendencias, mejores prácticas y casos de estudio inspiradores que demuestran el impacto positivo de la tecnología en el proceso educativo. ¡Prepárate para descubrir cómo las TIC están abriendo nuevas puertas hacia un aprendizaje más accesible, personalizado e innovador!
                </p>
            </div>

            <div className="p-4">
                <h4 className="fst-italic">Contacto</h4>
                <ol className="list-unstyled">
                    <li>GitHub: <Link href={"https://github.com/davidsantana980"}>davidsantana980</Link>, <Link href={"https://github.com/Kaldumento"}>Kaldumento</Link></li>
                    <li>E-mail: <Link href={"mailto:salvador8a980@gmail.com"}>salvador8a980@gmail.com</Link>, <Link href={"mailto:8ant@gmail.com"}>8ant@gmail.com</Link></li>
                </ol>
            </div>
        </div>
    );
}

export default function Home() {
    return (
      <>
          <Head>
              <meta charSet="utf-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <title>Edu-tix, las TIC y la educación</title>
         </Head>

          <Carousel/>

          <main className="container">
              <div id={"contenido"} className="row g-5">
                  <div className="col-md-8">
                      <h3 className="pb-4 mb-4 fst-italic border-bottom">
                          {"Lo último"}
                      </h3>

                      <TicsBasicosJumbotron />

                      <hr/>

                      <TicsEducacionJumbotron />

                      <hr/>

                      <VentajasTicsJumbotron/>
                  </div>

                  <div className="col-md-4">
                      <Sidebar />
                  </div>
              </div>
          </main>
      </>
    );
}
