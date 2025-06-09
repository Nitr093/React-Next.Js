import Novedad from "@/components/NovedadItem";

export const metadata = {
  title: "Transporte BENMAN",
  description: "Sitio generado en Next.Js"
};

export default function Novedades() {
  return (
    <div>
            <h2>Novedades</h2>
            <Novedad />  
    </div>
  );
}
