import { Link } from "react-router-dom"

const AboutUs = () => {
    return (
        <>
            <section id="jumbotron">
                <article className="article-about">
                    <div className="jumbotron-header">
                        <div className="mesa-elegante shadow"></div>
                        <h1 id="page-name">Alpachino Noble</h1>
                        <p id="impact-message">"La mejor comida con sabor casero."</p>
                    </div>
                    <div className="jumbo-impact">
                        <div className="jumbo-item margin-item">
                            <p><strong>Encuentranos en:</strong> Del. Coyoacán Eje 3 #100</p>
                            <p><strong>Nuestros teléfonos:</strong> <strong>55 ********</strong></p>
                        </div>
                        <div className="jumbo-item">
                            <h2>Nuestros servicios</h2>
                            <p>El verdadero sabor de una cocina mexicana.</p>
                            <br />
                            <p>Ve nuestros platillos <Link to="/menu">menú</Link></p>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export { AboutUs }