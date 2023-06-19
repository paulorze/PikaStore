const ItemList = ({greeting, theme}) => {
    return (
        <div>
            <h1 style={{padding: '1rem', backgroundColor: theme.palette.background.default, color: theme.palette.fuenteSecondary.main, fontSize: '3rem'}}>{greeting} a Pika, donde podras conseguir toda nuestra gran variedad de productos con disenos propios en estilo anime/manga.</h1>
        </div>
    )
}

export default ItemList