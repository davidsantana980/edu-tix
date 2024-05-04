import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-md navbar-light sticky-top bg-light d-flex flex-wrap justify-content-center py-3 border-bottom">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img className="bi me-2" height="55" src={"/logo.png"} style={{ marginLeft: '18px' }} />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="border-bottom  collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav" style={{ marginRight: '14px' }}>
                        <li className="nav-item"><Link href="/" className="text-black btn-light nav-link" aria-current="page"><strong>Home</strong></Link></li>
                        <li className="nav-item"><Link href="/posts/tics-basicos" className="text-black nav-link">Las TIC</Link></li>
                        <li className="nav-item"><Link href="/posts/tics-educacion" className="text-black nav-link">TIC y educación</Link></li>
                        <li className="nav-item"><Link href="/posts/ventajas-tics" className="text-black nav-link">Ventajas de las TIC</Link></li>
                        <li className="nav-item"><Link href="/about/sobre-nosotros" className="text-black nav-link">Sobre nosotros</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}