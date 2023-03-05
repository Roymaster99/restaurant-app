import { useEffect, useState } from "react"
import { fillBookings } from "../util/DummyBookings"
import { getData } from "../util/myAPIs"

const AdminBookings = () => {
    const [bookings, setBookings] = useState([])
    useEffect(() => {   
        process.env.REACT_APP_USE_DUMMY == 'false' ?  setBookings(getData('booking', setBookings)) : setBookings(fillBookings())
    }, [])

    return (
        <section>
            <article id="article-order" className="article-about">
                <h1>Reservaciones</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Acompañantes</th>
                            <th>E-mail</th>
                            <th>Télefono</th>
                            <th>Celebración</th>
                            <th>Fecha y hora</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    bookings?.length > 0 && bookings.map(booking => {
                        const data = booking.data()
                        return (
                            <tr key={booking.id}>
                                <td>{data.name} {data.lastName}</td>
                                <td>{data.companion}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>{data.celebration}</td>
                                <td>{data.bookingDate}</td>
                            </tr>
                        )
                    })
                    }
                    </tbody>
                </table>
            </article>
        </section>

    )
}

export { AdminBookings }