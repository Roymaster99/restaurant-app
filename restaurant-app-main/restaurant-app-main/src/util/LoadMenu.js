import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { deleteData, getData, getDataWithOutSetter, postData } from "./myAPIs"

const starters = [
    {
        type: 'starters',
        name: 'Enchiladas',
        path: 'enchiladas.jpeg',
        price: 90,
    },
    {
        type: 'starters',
        name: 'Molletes',
        path: 'molletes.jpeg',
        price: 70,
    },
    {
        type: 'starters',
        name: 'Croque Sandwich',
        path: 'croque-sandwich.jpeg',
        price: 70,
    },
    {
        type: 'starters',
        name: 'Molletes con chilaquiles',
        path: 'molleteschilaquiles.png',
        price: 90,
    },
    {
        type: 'starters',
        name: 'Enmoladas',
        path: 'enmoladas.jpeg',
        price: 80,
    },
    {
        type: 'starters',
        name: 'Sincronizadas',
        path: 'sincronizadas.jpeg',
        price: 60,
    },
    {
        type: 'starters',
        name: 'Omelete',
        path: 'omelete.jpeg',
        price: 55,
    }
]

const drinks = [
    {
        type: 'drinks',
        name: 'Jugo de mora',
        path: 'jugo-mora.jpeg',
        price: 30,
    },
    {
        type: 'drinks',
        name: 'Jugo de naranja',
        path: 'jugo-naranja.jpeg',
        price: 25,
    },
    {
        type: 'drinks',
        name: 'Jugo de fresa',
        path: 'jugo-fresa.jpeg',
        price: 25,
    },
    {
        type: 'drinks',
        name: 'Coca-Cola 600ml',
        price: 25,
    },
    {
        type: 'drinks',
        name: 'Sprite 600ml',
        price: 25,
    }
]

const loadCacheMenu = (foods, setFoods) => {
    let cacheMenu = localStorage.getItem('cacheMenu')
    let result 
    if(!cacheMenu && foods?.length > 0) {
        result = foods.map(food => {
            return new InfoMenu(food.id, food.data())
        })
        localStorage.setItem('cacheMenu', JSON.stringify(result))
    } else if(cacheMenu) {
        result = JSON.parse(cacheMenu).map(food => {
            return new InfoMenu(food._id, food._info)
        })
    }
    if(cacheMenu && foods.length == 0) {
        setFoods(result)
    }
}

const allFood = starters.concat(drinks)

const fillMenu = function() {
    let index = 1
    let menuFood = allFood.map(food => {
        return new InfoMenu(`${index++}`, food)
    })
    return menuFood;
}

export class InfoMenu {
    constructor(id, info) {
        this._id = id
        this._info = info
    }

    get id() {
        return this._id
    }

    get info() {
        return this._info
    }
}

InfoMenu.prototype.data = function() {
    return this._info
}

const LoadMenu = () => {
    const [foods, setFoods] = useState()
    const navigate = useNavigate()

    const loadMenu = async () => {
        await getData('food', setFoods)
        foods.forEach(food => {
            console.log(food.id)
        })

        starters.forEach(food => {
            postData('food', food)
        })
        drinks.forEach(drink => {
            postData('food', drink)
        })
        alert('Los datos fueron cargados exitosamente.')
    }

    const deleteMenu = async () => {
        await getData('food', setFoods)
        foods.forEach(food => {
            console.log(food.id)
            deleteData('food', food.id)
        })
        alert('Los datos fueron eliminados exitosamente.')
    }
    
    return (
        <div>
            <button onClick={loadMenu}>Cargar datos de incio a Firebase</button>
            <button onClick={deleteMenu}>Eliminar datos del menú incial</button>
            <button onClick={() => navigate('/admin-bookings')}>Ver Reservaciones</button>
            <button onClick={() => navigate('/admin-orders')}>Ver ordenes</button>
        </div>
    ) 
}

export { fillMenu, loadCacheMenu, LoadMenu }