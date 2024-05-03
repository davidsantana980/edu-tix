import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="navbar-light sticky-top bg-light d-flex flex-wrap justify-content-center py-3 border-bottom">
            <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <img className="bi me-2" height="55" src={"/logo.png"} style={{ marginLeft: '18px' }} />
            </Link>

            <ul className="nav" style={{ marginRight: '14px' }}>
                <li><Link href="/" className="text-black btn-light nav-link" aria-current="page"><strong>Home</strong></Link></li>
                <li><Link href="/posts/tics-basicos" className="text-black nav-link">Las TIC</Link></li>
                <li><Link href="/posts/tics-educacion" className="text-black nav-link">TIC y educación</Link></li>
                <li><Link href="/posts/ventajas-tics" className="text-black nav-link">Ventajas de las TIC</Link></li>
                <li><Link href="/about/sobre-nosotros" className="text-black nav-link">Sobre nosotros</Link></li>
            </ul>
        </nav>

    )
}