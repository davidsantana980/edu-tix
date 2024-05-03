import Post from "../../src/components/Post";
import Link from "next/link";
import PostLayout from "@/src/components/layout";
import {contenido} from "@/src/components/posts/content/tics-basicos";
import Head from "next/head";

export default function TicsBasicos(){
    const {title, firstParagraph, postContent} = contenido;

    const content = (
        <div>
            <figure className="figure w-50 float-end">
                <iframe className="img-fluid" width="600"  src="https://www.youtube.com/embed/_zmiz7ztrRQ" title="Qué son las TIC" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <figcaption className="figure-caption text-center">Un video introductorio hecho por la <strong>Fundación Mapfre</strong>.</figcaption>
            </figure>
            <p>{firstParagraph}</p>
            {postContent}
        </div>
    );

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Lo que necesitas saber de las TIC</title>
            </Head>
            <PostLayout>
                <Post
                    title={title}
                    date="1/5/2024"
                    author="Carlos Andrade"
                    content={content}
                />
            </PostLayout>
        </>
    );
}
