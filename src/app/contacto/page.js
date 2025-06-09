import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacto - BENMAN",
  description: "Sitio generado en Next.Js"
};

export default function Contacto() {
  return (
    <main class="holder contacto">
        <div>
            <h2>Contacto Rápido</h2>
            <ContactForm />
        </div>
        <div class="datos">
            <h2>Otras vias de comunicacion</h2>
            <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
            <ul>
                <li>Telefono: +54 9 11 9999-0000</li>
                <li>Email: info@benman.net</li>
                <li>Instagram: benman.ig</li>
                <li>Facebook: benman</li>
                <li>Twitter: benman.x</li>
            </ul>
        </div>


    </main>
  );
}
