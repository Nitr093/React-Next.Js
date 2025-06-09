import "./page.module.css";
import "@/styles/globals.css";
import "@/styles/home.css";

export default function Home() {
    return (
        <div>
            <main className="holder">
                <div>
                    <img src="IMG/camion.jpg" width="100%" alt="camion main" />
                </div>
                <div className="columnas">
                    <section className="bienvenidos">
                        <h2>Bienvenidos</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Numquam consequatur ipsum incidunt ut rem officiis cupiditate reprehenderit,
                            aliquam vero architecto earum sed veritatis alias quasi!
                            Nisi sapiente accusantium vitae sit?</p>
                    </section>
                    <section class="testimonios">
                        <h2>Testimonios</h2>
                        <div class="testimonio">
                            <span class="cita">Excelente servicio.</span>
                            <span class="autor">Gruas Paolini</span>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
