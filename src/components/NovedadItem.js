import "@/styles/globals.css";
import "@/styles/home.css";


export default async function NovedadItem(props) {

    const { title, subtitle, imagen, body } = props;


    return (
        <>
            <main className="holder">
                {/* <div >
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <img src={imagen} alt={title}></img>
                    <div className="novedad-body" dangerouslySetInnerHTML ={{ __html: body}}></div>
                </div> */}

<div className="card">
  <img src={imagen} className="card-img-top" alt={title}></img>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h3 className="card-title">{subtitle}</h3>
    {/* <p>{ibu}</p> */}
    <div className="card-text novedad-body" dangerouslySetInnerHTML ={{ __html: body}}></div>
    <a href="#" className="btn btn-primary novedad-body">Comprar</a>
  </div>
</div>
                <hr className="border border-primary border-3 opacity-75" />
                {/* <div>
                    <h3>TITULO 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero,
                        animi accusantium placeat fugiat nam qui explicabo molestiae dignissimos omnis itaque aliquid possimus adipisci,
                        ut similique quibusdam necessitatibus quasi reiciendis!
                    </p>
                </div> */}


            </main>
        </>
    )
};