import Link from "next/link"
import "@/styles/globals.css";

const Nav = (props) => {
    return (
        <>
        <nav>
            <ol>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/nosotros">Nosotros</Link></li>
                    <li><Link href="/servicios">Servicios</Link></li>
                    <li><Link href="/galeria">Galeria</Link></li>
                    <li><Link href="/novedades">Novedades</Link></li>
                    <li><Link href="/contacto">Contacto</Link></li>
                </ul>
            </ol>
            </nav>
        </>
    )
}



export default Nav;