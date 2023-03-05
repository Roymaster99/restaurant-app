import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getData } from "../util/myAPIs"
import LabelInput from "../component/LabelInput"
import { fillMenu, loadCacheMenu } from "../util/LoadMenu"

const AddFood = () => {
    const [foods, setFoods] = useState([])
    const [quantity, setQuantity] = useState(1)
    const params = useParams()
    const { id, table } = params
    const navigate = useNavigate()

    loadCacheMenu(foods, setFoods)
    useEffect(() => {
        let cacheMenu = localStorage.getItem('cacheMenu')
        if(!cacheMenu) {
            process.env.REACT_APP_USE_DUMMY === 'false' ? setFoods(fillMenu()) : getData('food', setFoods)
        }
        getDefValue()
    }, [])

    const getDefValue = () => {
        let orderDetail = localStorage.getItem('orderDetail')
        orderDetail = orderDetail ? JSON.parse(orderDetail) : undefined
        if(orderDetail) {
            let orderItem = orderDetail.orderItems.find(item => item.id === id)
            if(orderItem) {
                setQuantity(orderItem.quantity)
            } 
        }
    }

    let food
    foods.forEach(e => {
        if(e.id === id) {
            food = e.data()
            return
        }
    })

    const addToCart = () => {
        let orderDetail = localStorage.getItem('orderDetail')
        orderDetail = orderDetail ? JSON.parse(orderDetail) : undefined
        
        let orderItem = {
            foodId: id,
            quantity: quantity
        }

        if(orderDetail) {
            let auxOrderItem = orderDetail.orderItems.find(item => item.foodId === id)
            if(auxOrderItem) {
                orderDetail.orderItems.splice(orderDetail.orderItems.indexOf(auxOrderItem), 1)
            }
            if(parseInt(quantity) > 0) {
                orderDetail.orderItems.push(orderItem)
            }
        } else {
            orderDetail = {
                table: parseInt(table),
                pendigToDeliver: true,
                orderItems: [
                    orderItem
                ]
            }
        }
        localStorage.setItem('orderDetail', JSON.stringify(orderDetail))
        navigate('/menu')
    }

    return (
        <section>
            <article id="article-add-food">
                <div className="add-food">
                    <p>Nombre: {food?.name}</p>
                    {food?.ingredients && <p>Ingredientes: {food?.ingredients}</p>}
                    <p>Precio ${food?.price}</p>
                </div>
                <div className="label-input-container">
                    <LabelInput labelText="Cantidad" defaultValue={quantity} type="text" setter={setQuantity} />
                </div>
                <button onClick={addToCart}>Agregar al carrito</button>
            </article>
        </section>
    )
}

export { AddFood }