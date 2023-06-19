import './ItemFilter.css';

const ItemFilter = () => {
    return (
        <div className='filtrar'>
            <p className='filtrar__texto'>
                Filtrar productos:
            </p>
            <ul className='filtrar__opciones'>
                <li onClick={()=> {console.log('Filtraste productos de categoria indumentaria.')}}>Indumentaria</li>
                <li onClick={()=> {console.log('Filtraste productos de categoria stickers .')}}>Stickers</li>
                <li onClick={()=> {console.log('Filtraste productos de categoria accesorios.')}}>Accesorios</li>
            </ul>
        </div>
    )
}

export default ItemFilter