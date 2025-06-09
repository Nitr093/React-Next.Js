
// import "./globals.css";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import "@/styles/home.css";


export const metadata = {
  title: "Transporte BENMAN",
  description: "Sitio generado en Next.Js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="cabesal">
        <div>
          <img src="/IMG/BENMAN_LOGO_PRUEBA.jpg" width="100" alt="BENMAN LOGISTICA" />
          <h1>BENMAN LOGISTICA</h1>
        </div>
        </header>
        <Nav />
        {children}
        
        <footer>
          <p>Diseñado por Agustin Milani - &copy;2025</p>
        </footer>
      </body>
    </html>
  );
}
