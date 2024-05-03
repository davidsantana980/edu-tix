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
                    date="1/7/2024"
                    author="Carlos Andrade, Salvador Ochoa"
                    content={content}
                />
            </PostLayout>
        </>
    );
}