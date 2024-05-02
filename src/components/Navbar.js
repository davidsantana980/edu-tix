import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="navbar-light sticky-top bg-light d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
            </Link>

            <ul className="text-black nav nav-pills">
                <li><a href="#" className="text-black dark nav-link" aria-current="page"><strong>Home</strong></a></li>
                <li ><a href="#" className="text-black nav-link">Las TIC</a></li>
                <li ><a href="#" className="text-black nav-link">TIC y educación</a></li>
                <li ><a href="#" className="text-black nav-link">Ventajas de las TIC</a></li>
                <li ><a href="#" className="text-black nav-link">Sobre nosotros</a></li>
            </ul>
        </nav>
    )
}