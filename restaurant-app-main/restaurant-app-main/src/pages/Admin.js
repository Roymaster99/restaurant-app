import { Link } from "react-router-dom"
import { LoadMenu } from "../util/LoadMenu"

export const Admin = () => {
    return (
        <section>
            <article id="article-admin">
                <h1>Administrar datos</h1>
                <Link to="/">Volver al inicio</Link>
                <LoadMenu />
            </article>
        </section>
    )
}