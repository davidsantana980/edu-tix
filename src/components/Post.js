import Link from "next/link";

export default function Post({title, date, author, content}){
    return (
        <article className="blog-post">
            <h2 className="blog-post-title">{title}</h2>
            <p className="blog-post-meta">{date} por {author}</p>

            {content}
        </article>
    )
}