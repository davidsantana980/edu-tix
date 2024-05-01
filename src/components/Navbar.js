import Link from "next/link";

export default function Navbar(){
    return (
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
                <Link className="p-2 link-secondary" href="#">World</Link>
                <Link className="p-2 link-secondary" href="#">U.S.</Link>
                <Link className="p-2 link-secondary" href="#">Technology</Link>
                <Link className="p-2 link-secondary" href="#">Design</Link>
                <Link className="p-2 link-secondary" href="#">Culture</Link>
                <Link className="p-2 link-secondary" href="#">Business</Link>
                <Link className="p-2 link-secondary" href="#">Politics</Link>
                <Link className="p-2 link-secondary" href="#">Opinion</Link>
                <Link className="p-2 link-secondary" href="#">Science</Link>
                <Link className="p-2 link-secondary" href="#">Health</Link>
                <Link className="p-2 link-secondary" href="#">Style</Link>
                <Link className="p-2 link-secondary" href="#">Travel</Link>
            </nav>
        </div>
    )
}