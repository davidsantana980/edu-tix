import Post from "@/src/components/Post";
import Link from "next/link";
import PostLayout from "@/src/components/layout";
import {contenido} from "@/src/components/posts/content/ventajas-tics";
import Head from "next/head";

export default function VentajasTics() {
    const {title, firstParagraph, postContent} = contenido;

    const content = (
        <div>
            <p>{firstParagraph}</p>
            <figure className="figure w-50 float-end m-3">
                <img src={"/ticsedu.webp"} className="figure-img img-fluid rounded img-thumbnail" alt="Las TIC promueven la inclusión." />
                <figcaption className="figure-caption text-center">Las TIC tienen el potencial de promover la inclusión.</figcaption>
            </figure>
            {postContent}
        </div>
    );

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Las muchas ventajas de las TIC</title>
            </Head>
            <PostLayout>
                <Post
                    title={title}
                    date="1/5/2024"
                    author="Carlos Andrade, Salvador Ochoa"
                    content={content}
                />
            </PostLayout>
        </>
    );
}