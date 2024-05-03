import Jumbotron from "@/src/components/Jumbotron";
import {contenido} from "@/src/components/posts/content/tics-eduacion";
import Link from "next/link";

export default function TicsEducacionJumbotron(){
    const {title, firstParagraph} = contenido;

    const TicsEducacionButton = (
        <p><Link className="btn btn-outline-secondary" href="/posts/tics-educacion">Leer más</Link></p>
    )

    return (
        <Jumbotron title={title} content={firstParagraph} Button={TicsEducacionButton} />
    )
}