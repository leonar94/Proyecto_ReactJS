import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    function agregar () {
        if (count<stock) {
            setCount(count + 1) 
        }
        
    }

    function quitar () {
        if (count>1) {
        setCount (count - 1)
        }
        
    }

    const agregarCarrito=()=>{
        onAdd(count)
    }

    return (
    
        <div>
        <button onClick={()=>setCount(quitar)}>-</button>
        <button onClick={()=>setCount(agregarCarrito)} variant="primary">Agregar al carrito</button>{' '}
        <button onClick={()=>setCount(agregar)}>+</button>
            <h1>{count}</h1>
        </div>
    )
}

export default ItemCount
