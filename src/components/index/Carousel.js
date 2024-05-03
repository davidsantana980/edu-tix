import Link from "next/link";
import Image from "next/image";

export default function Carousel(){
    return (
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/corporate_art.jpeg" alt="First slide"/>

                    <div className="container">
                        <div className="carousel-caption text-start">
                            <h1>Tecnologías de la Información y la Comunicación:</h1>
                            <p>Un mundo de posibilidades educativas a tu alcance.</p>

                            <p><Link className="btn text-decoration-none text-light btn-lg" style={{backgroundColor : "transparent" }} href="#contenido">Lee lo último</Link></p>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="/aula_escolar.jpeg" alt="Second slide"/>

                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Fundamentos de las TIC</h1>
                            <p>¿Qué son? ¿Para qué sirven?</p>
                            <p><Link className="btn text-decoration-none text-light btn-lg" style={{backgroundColor : "transparent" }} href="/posts/tics-basicos">Lee el post</Link></p>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="/aula_escolar_2.png" alt="Second slide"/>

                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Las TIC en la educación</h1>
                            <p>Descubre cómo las TIC están cambiando la educación en la actualidad.</p>
                            <p><Link className="btn text-decoration-none text-light btn-lg" style={{backgroundColor : "transparent" }} href="/posts/tics-educacion">Lee el post</Link></p>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="/img4.jpg" alt="Second slide"/>

                    <div className="container">
                        <div className="carousel-caption text-end">
                            <h1>Ventajas de las TIC</h1>
                            <p>¿Ya las conoces?</p>
                            <p><Link className="btn text-decoration-none text-light btn-lg" style={{backgroundColor : "transparent" }} href="/posts/ventajas-tics">Lee el post</Link></p>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}