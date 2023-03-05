import { Link } from "react-router-dom"

export const BookingSuccess = () => {
    return (
        <section>
            <article>
                <h1>Su reservación se realizó exitosamente</h1>
                <Link to="/">Volver al inicio</Link>
            </article>
        </section>
    )
}