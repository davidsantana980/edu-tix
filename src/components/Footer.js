import Link from "next/link";

export default function Footer(){
    return (
        <footer className="blog-footer">
            <p>
                Hecho por Salvador Ochoa y Carlos Andrade, 2024
            </p>

            <p>
                <Link href="#">Volver arriba</Link>
            </p>
        </footer>
    )
}