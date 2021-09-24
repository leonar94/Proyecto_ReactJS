import ItemCount from "../ItemCount"
import { useState } from "react"



const ItemDetail = ({producto}) => {
    const [cantidadSelec, setCantidadSelec] = useState(0)

    const onAdd = (cant) => {
        console.log(cant)
        setCantidadSelec (cant)
      }

    return (
        <>
        <div key={producto.id} className='card w-25 mt.3'>
        <div className='card-header,'  >{producto.nombre}</div>
        <div className='card-body'>
                <img src={producto.foto} className='w-100'    alt ='foto'/>
            </div>        
            </div>
            <ItemCount stock={7} initial={1} onAdd={onAdd} />
        </>
    )
}




export default ItemDetail