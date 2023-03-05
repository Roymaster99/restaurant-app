import { useEffect, useState } from "react"
import { Food } from "../component/Food"
import LabelInput from "../component/LabelInput"
import { useNavigate } from "react-router-dom"
import { fillMenu, InfoMenu, loadCacheMenu } from "../util/LoadMenu"
import { getData } from "../util/myAPIs"

const Menu = () => {
    const [foods, setFoods] = useState([])
    const [table, setTable] = useState()
    const navigate = useNavigate()

    loadCacheMenu(foods, setFoods)

    useEffect(() => {
        let cacheMenu = localStorage.getItem('cacheMenu')
        if(!cacheMenu) {
            process.env.REACT_APP_USE_DUMMY === 'false' ? setFoods(fillMenu()) : getData('food', setFoods)
        }
        getTable()
    }, [])

    useEffect(() => {
        if(table) {
            localStorage.setItem('table', table)
        }
    }, [table])

    const getTable = () => {
        let auxTable = localStorage.getItem('table')
        setTable(auxTable ? auxTable : undefined)
    }

    return (
        <section>
            <article id="article-menu">
                <h1>Seleccione su platillo.</h1>
                <div className="label-input-container">
                    <LabelInput labelText="Número de mesa" setter={setTable} type="text" defaultValue={table}/>
                    <button onClick={() => navigate('/order')}>Verificar pedido</button>
                </div>
                <div id="menu-container">
                    {
                        foods.length && foods?.map((food, index) => {
                            return <Food data={food} table={table} key={index}></Food>
                        })
                    }
                </div>
            </article>
        </section>
    )
}

export { Menu }