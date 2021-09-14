import Button from 'react-bootstrap/Button'


const Item = ({producto}) => {
    return (
        <div key={producto.id} className='card w-25 mt.3'>
        <div className='card-header' >{producto.nombre}</div>
        <div className='card-body'>
                <img src={producto.foto} className='w-75'   alt ='foto'/>
            </div>
            <div className='card-footer'>
                <Button variant="outline-secondary">{producto.precio}</Button>{' '}
            </div>
            </div>

            
    )
}

export default Item