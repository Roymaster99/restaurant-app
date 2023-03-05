import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header>
            <img id="nav-icon" className="icon" src={require('../images/logo.jpg')}/>
            <p id="title">Alpachino Noble</p>
            <nav>
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/booking'>Reservación</Link></li>
                    <li><Link to='/order'>Mi orden</Link></li>
                    <li><Link to='/menu'>Menú</Link></li>
                    <li><Link to='/admin'>Administración</Link></li>
                </ul>
            </nav>
        </header>
    )
}