

const ItemDetail = ({producto}) => {

    return (
        <>
        <div key={producto.id} className='card w-25 mt.3'>
        <div className='card-header,'  >{producto.nombre}</div>
        <div className='card-body'>
                <img src={producto.foto} className='w-100'    alt ='foto'/>
            </div>        
            </div>
        </>
    )
}




export default ItemDetail