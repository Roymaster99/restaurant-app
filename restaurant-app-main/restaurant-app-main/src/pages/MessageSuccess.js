import { Link } from "react-router-dom"

export const MessageSuccess = () => {
    return (
        <section>
            <article>
                <h1>Su pedido se envió exitosamente</h1>
                <Link to="/">Volver al inicio</Link>
            </article>
        </section>
    )
}