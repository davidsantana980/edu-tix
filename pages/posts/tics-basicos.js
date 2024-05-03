import Post from "../../src/components/Post";
import Link from "next/link";
import PostLayout from "@/src/components/layout";
import {contenido} from "@/src/components/posts/content/tics-basicos";
import Head from "next/head";

export default function TicsBasicos(){
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
