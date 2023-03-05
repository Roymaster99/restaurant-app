import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LabelInput from "../component/LabelInput"
import { postData } from "../util/myAPIs"
import "react-datepicker/dist/react-datepicker.css";

const Booking = ({data}) => {
    const navigate = useNavigate()

    const [name, setName] = useState(data?.name)
    const [lastName, setLastName] = useState(data?.lastName)
    const [email, setEmail] = useState(data?.email)
    const [companion, setCompanion] = useState(data?.companion)
    const [phone, setPhone] = useState(data?.phone)
    const [bookingDate, setBookingDate] = useState(new Date())
    const [celebration, setCelebration] = useState(data ? data.celebration : '')

    const saveBooking = () => {
        let booking = {'name': name, 'lastName': lastName, 'email': email, 'companion': companion, 'phone': phone, 'celebration': celebration, 'date': JSON.stringify(bookingDate)}
        postData('booking', booking)
        navigate('/booking-order')
    }

    return (
        <section className="section-main">
            <article id="article-booking">
                <h1>Datos de reserva</h1>
                <div className="flex column" id="inputBooking">
                    <LabelInput labelText="Nombre" type="text" setter={setName}></LabelInput>
                    <LabelInput labelText="Apellido" type="text" setter={setLastName}></LabelInput>
                    <LabelInput labelText="E-mail" type="text" setter={setEmail}></LabelInput>
                    <LabelInput labelText="Acompañantes" type="text" setter={setCompanion}></LabelInput>
                    <LabelInput labelText="Télefono" type="text" setter={setPhone}></LabelInput>
                    <LabelInput labelText="Celebración" type="text" setter={setCelebration}></LabelInput>
                    <LabelInput labelText="Fecha y hora" type="datetime-local" setter={setBookingDate}></LabelInput>
                </div>
                <button onClick={saveBooking}>{data ? 'Actualizar reserva' : 'Reservar'}</button>
            </article>
        </section>
    )
}

export { Booking }