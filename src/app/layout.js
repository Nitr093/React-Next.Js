
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
      <head>
            <title>BENMAN Transporte</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous"></link>
          </head>
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
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js" integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q" crossorigin="anonymous"></script>
          </body>
        </html>
        );
}
