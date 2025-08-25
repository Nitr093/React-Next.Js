import NovedadItem from "@/components/NovedadItem";


export const metadata = {
  title: "Transporte BENMAN",
  description: "Sitio generado en Next.Js"
};

export default async function Novedades() {
  
  const data = await fetch(`${process.env.NEXT_APP_API_URL}/api/novedades`);
  // const data = await fetch('http://localhost:3000/api/novedades');
  const novedades = await data.json();
  
  return (
    <section className='holder'>
      <h1 className='user-select-none'>NOVEDADES DE BENMAN TRANSPORTES</h1>

            {
              novedades.map(item =>  <NovedadItem key={item.id}
                title={item.titulo} subtitle={item.subtitulo}
                imagen={item.imagen} body={item.cuerpo} />)
            }


            {/* <NovedadItem />   */}
    </section>
  );
}
