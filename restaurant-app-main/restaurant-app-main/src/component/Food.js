import { useNavigate } from "react-router-dom"

export const Food = ({data, table}) => {
    const food = data.data()
    const navigate = useNavigate()

    return (
        <div className="food">
            {
                food?.path && 
                <div className="food-image">
                    <img className="menu-food" src={require(`../images/${food?.path}`)} />
                </div>
            }
            <p>{food.name}</p>
            {food.ingredients}
            <p><strong>Precio: </strong>{food.price}</p>
            <button onClick={() => table ? navigate(`/food/${table}/${data.id}`) : alert('Ingrese el número de sú mesa por favor!')}>Agregar</button>
        </div>
    )
}