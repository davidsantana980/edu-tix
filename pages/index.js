import Link from "next/link";
import {Container} from "react-bootstrap";
import Head from "next/head";
import Navbar from "@/src/components/Navbar";
import TicsBasicos from "./posts/tics-basicos";
import TicsEducacion from "./posts/tics-educacion";
import VentajasTics from "@/pages/posts/ventajas-tics";

export default function Home() {
    const Header = () => {
        return (
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <Link className="link-secondary" href="#">Subscribe</Link>
                    </div>
                    <div className="col-4 text-center">
                        <Link className="blog-header-logo text-dark" href="#">Large</Link>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <Link className="link-secondary" href="#" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
                        </Link>
                        <Link className="btn btn-sm btn-outline-secondary" href="#">Sign up</Link>
                    </div>
                </div>
            </header>
        )
    }

    const Hero = () => {
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

    return (
      <>
          <Head>
              <meta charSet="utf-8"/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <meta name="description" content=""/>
              <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors"/>
              <meta name="generator" content="Hugo 0.84.0"/>
              <title>Blog Template · Bootstrap v5.0</title>

              <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/blog/"/>

                          {/*<style>*/}
                          {/*    .bd-placeholder-img {*/}
                          {/*        font-size: 1.125rem;*/}
                          {/*        textAnchor: middle;*/}
                          {/*        -webkit-user-select: none;*/}
                          {/*        -moz-user-select: none;*/}
                          {/*        user-select: none;*/}
                          {/*    }*/}

                          {/*    @media (min-width: 768px) {*/}
                          {/*        .bd-placeholder-img-lg {*/}
                          {/*            font-size: 3.5rem;*/}
                          {/*        }*/}
                          {/*    }*/}
                          {/*</style>*/}
              </Head>

          <div className="container">
              <Header/>
              <Navbar/>
          </div>

          <main className="container">
              <Hero/>
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
                      <div className="position-sticky" style={{top: "2rem"}}>
                          <div className="p-4 mb-3 bg-light rounded">
                              <h4 className="fst-italic">About</h4>
                              <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
                          </div>

                          <div className="p-4">
                              <h4 className="fst-italic">Archives</h4>
                              <ol className="list-unstyled mb-0">
                                  <li><Link href="#">March 2021</Link></li>
                                  <li><Link href="#">February 2021</Link></li>
                                  <li><Link href="#">January 2021</Link></li>
                                  <li><Link href="#">December 2020</Link></li>
                                  <li><Link href="#">November 2020</Link></li>
                                  <li><Link href="#">October 2020</Link></li>
                                  <li><Link href="#">September 2020</Link></li>
                                  <li><Link href="#">August 2020</Link></li>
                                  <li><Link href="#">July 2020</Link></li>
                                  <li><Link href="#">June 2020</Link></li>
                                  <li><Link href="#">May 2020</Link></li>
                                  <li><Link href="#">April 2020</Link></li>
                              </ol>
                          </div>

                          <div className="p-4">
                              <h4 className="fst-italic">Elsewhere</h4>
                              <ol className="list-unstyled">
                                  <li><Link href="#">GitHub</Link></li>
                                  <li><Link href="#">Twitter</Link></li>
                                  <li><Link href="#">Facebook</Link></li>
                              </ol>
                          </div>
                      </div>
                  </div>
              </div>
          </main>

          <footer className="blog-footer">
              <p>Blog template built for <Link href="https://getbootstrap.com/">Bootstrap</Link> by <Link href="https://twitter.com/mdo">@mdo</Link>.</p>

              <p>
                  <Link href="#">Back to top</Link>
              </p>
          </footer>
      </>
    );
}
