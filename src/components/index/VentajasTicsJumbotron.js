import Jumbotron from "@/src/components/Jumbotron";
import {contenido} from "@/src/components/posts/content/ventajas-tics";
import Link from "next/link";

export default function VentajasTicsJumbotron(){
    const {title, firstParagraph} = contenido;

    const VentajasTicsButton = (
        <p><Link className="btn btn-outline-secondary" href="/posts/ventajas-tics">Leer más</Link></p>
    )

    return (
        <Jumbotron title={title} content={firstParagraph} Button={VentajasTicsButton} />
    )
}