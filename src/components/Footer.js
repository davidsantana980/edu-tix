import Link from "next/link";

export default function Footer(){
    return (
        <footer className="blog-footer">
            <p>
                Por Salvador Ochoa, Carlos Andrade.
                UPTLL Juana Ramírez.
                Tutora: Ing. Clara Martínez.
                2024.
            </p>

            <p>
                <Link href="#">Volver arriba</Link>
            </p>
        </footer>
    )
}