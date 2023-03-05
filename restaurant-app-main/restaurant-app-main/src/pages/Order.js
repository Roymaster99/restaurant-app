import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { fillMenu, loadCacheMenu } from "../util/LoadMenu"
import { getData, postData } from "../util/myAPIs"

const Order = () => {
    const [foods, setFoods] = useState([])
    const [orderDetail, setOrderDetail] = useState()
    const navigate = useNavigate()

    loadCacheMenu(foods, setFoods)
    useEffect(() => {
        let cacheMenu = localStorage.getItem('cacheMenu')
        if(!cacheMenu) {
            process.env.REACT_APP_USE_DUMMY === 'false' ? setFoods(fillMenu()) : getData('food', setFoods)
        }
        let auxOrderDetail = localStorage.getItem('orderDetail')
        if(auxOrderDetail) {
            setOrderDetail(JSON.parse(auxOrderDetail))
        }
    }, [])

    const saveOrder = () => {
        postData('order', orderDetail)
        localStorage.removeItem('orderDetail')
        navigate('/success-order')
    }
    let totalPayment = 0

    return (
        <section>
            <article id="article-order">
                <h1>Detalle de la orden</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio U</th>
                            <th>Precio x cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        foods && orderDetail?.orderItems.map((item, index) => {
                            let food
                            foods.forEach(foodItem => {
                                if(foodItem.id === item.foodId) {
                                    food = foodItem.data()
                                    totalPayment += parseFloat(food?.price) * item?.quantity
                                    return
                                }
                            })
                            return (
                                <tr key={index}>
                                    <td>{food?.name}</td>
                                    <td>{item?.quantity}</td>
                                    <td>{food?.price}</td>
                                    <td>{parseFloat(food?.price) * item?.quantity}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td>{totalPayment}</td>
                        </tr>
                    </tfoot>
                </table>
                <button onClick={saveOrder}>Confirmar pedido</button>
            </article>
        </section>
    )
}

export { Order }