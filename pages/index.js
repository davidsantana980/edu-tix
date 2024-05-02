import Link from "next/link";
import Carousel from "@/src/components/index/Carousel";
import Head from "next/head";

import TicsBasicos from "./posts/tics-basicos";
import TicsEducacion from "./posts/tics-educacion";
import VentajasTics from "@/pages/posts/ventajas-tics";

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
                    <li><Link href="#">GitHub</Link></li>
                    <li><Link href="#">Twitter</Link></li>
                    <li><Link href="#">Facebook</Link></li>
                </ol>
            </div>
        </div>
    );
}

function Hero(){
    const title = "Tecnologías de la Información y la Comunicación: "
    const lede = "Un mundo de posibilidades educativas a tu alcance."

    return (
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
                <h1 className="display-4 fst-italic">{title}</h1>
                <p className="lead my-3">{lede}</p>
                {/*<p className="lead mb-0"><Link href="#" className="text-white fw-bold">Continue reading...</Link></p>*/}
            </div>
        </div>
    )
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
              {/*<Hero/>*/}

              {/*<div className="row mb-2">*/}
              {/*    <div className="col-md-6">*/}
              {/*        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">*/}
              {/*            <div className="col p-4 d-flex flex-column position-static">*/}
              {/*                <strong className="d-inline-block mb-2 text-primary">World</strong>*/}
              {/*                <h3 className="mb-0">Featured post</h3>*/}
              {/*                <div className="mb-1 text-muted">Nov 12</div>*/}
              {/*                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>*/}
              {/*                <Link href="#" className="stretched-link">Continue reading</Link>*/}
              {/*            </div>*/}
              {/*            <div className="col-auto d-none d-lg-block">*/}
              {/*                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>*/}

              {/*            </div>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*    <div className="col-md-6">*/}
              {/*        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">*/}
              {/*            <div className="col p-4 d-flex flex-column position-static">*/}
              {/*                <strong className="d-inline-block mb-2 text-success">Design</strong>*/}
              {/*                <h3 className="mb-0">Post title</h3>*/}
              {/*                <div className="mb-1 text-muted">Nov 11</div>*/}
              {/*                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>*/}
              {/*                <Link href="#" className="stretched-link">Continue reading</Link>*/}
              {/*            </div>*/}
              {/*            <div className="col-auto d-none d-lg-block">*/}
              {/*                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>*/}

              {/*            </div>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}

              <div className="row g-5">
                  <div className="col-md-8">
                      <h3 className="pb-4 mb-4 fst-italic border-bottom">
                          {"Lo último"}
                      </h3>

                      <TicsBasicos />

                      <hr/>

                      <TicsEducacion />

                      <hr/>

                      <VentajasTics/>
                  </div>

                  <div className="col-md-4">
                      <Sidebar />
                  </div>
              </div>
          </main>
      </>
    );
}
