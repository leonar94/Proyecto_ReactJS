import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    function agregar () {
        if (count<stock) {
            setCount(count + 1) 
        }
        
    }

    function quitar () {
        if (count>0) {
        setCount (count - 1)
        }
        
    }


    const agregarCarrito=()=>{
        onAdd(count)
    }

    return (
    
        <div>
        <button onClick={quitar}>-</button>
        <button onClick={agregarCarrito} variant="primary" disabled={count===0}>Agregar al carrito</button>{' '}
        <button onClick={agregar}>+</button>
            <h1>{count}</h1>
        </div>
    )
}

export default ItemCount
