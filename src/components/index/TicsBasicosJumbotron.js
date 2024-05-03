import Jumbotron from "@/src/components/Jumbotron";
import {contenido} from "@/src/components/posts/content/tics-basicos";
import Link from "next/link";

export default function TicsBasicosJumbotron(){
    const {title, firstParagraph} = contenido;

    const TicsBasicosButton = (
        <p><Link className="btn btn-outline-secondary" href="/posts/tics-basicos">Leer más</Link></p>
    )

    return (
        <Jumbotron title={title} content={firstParagraph} Button={TicsBasicosButton} />
    )
}