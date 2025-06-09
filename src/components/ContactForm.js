
const ContactForm = (props) => {
    return (
        <>
            <form action="" method="" class="formulario">
                <p>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="" />
                </p>
                <p>
                    <label htmlFor="telefono">Telefono</label>
                    <input type="number" name="" />
                </p>
                <p>
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea name="" placeholder="Aqui escriba su mensaje"></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar" class="boton-enviar" />
                </p>
            </form>
        </>
    )
}



export default ContactForm;