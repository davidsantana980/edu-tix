import PostLayout from "@/src/components/layout";
import Post from "@/src/components/Post";
import Head from "next/head";
import Link from "next/link";

export default function SobreNosotros(){
    const postContent = (

        <>
            <h2>¿Quiénes somos?</h2>
            <p>
                Somos un grupo de profesionales entusiastas y apasionados por el vasto mundo del desarrollo web y la programación en general.
                Nos impulsa una profunda convicción de que el futuro de la humanidad está intrínsecamente ligado a los avances tecnológicos.
                Creemos que la tecnología tiene el poder de transformar el mundo, y estamos aquí para ser parte de ese cambio. Nos sentimos orgullosos de contribuir al desarrollo de un futuro más próspero, equitativo y sostenible para todos.
            </p>

            <hr/>

            <h2>Contacto</h2>
            <p>
                A Carlos puedes contactarlo en Instagram como <Link href={"https://www.instagram.com/carlo.andradei/"}>@carlo.andradei</Link>, seguirlo en GitHub como <Link href={"https://github.com/Kaldumento"}>Kaldumento</Link> o mandarle un correo a <Link href={"mailto:8ant@gmail.com"}>8ant@gmail.com</Link>
            </p>
            <p>
                A Salvador puedes contactarlo por su correo, <Link href={"mailto:salvador8a980@gmail.com"}>salvador8a980@gmail.com</Link> o seguirlo en GitHub como <Link href={"https://github.com/davidsantana980"}>davidsantana980</Link>
            </p>
        </>
    )

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>El equipo</title>
            </Head>
            <PostLayout>
                <Post
                    title="Sobre nosotros"
                    date="2/5/2024"
                    author="Carlos Andrade, Salvador Ochoa"
                    content={postContent}
                />
            </PostLayout>
        </>
    )
}