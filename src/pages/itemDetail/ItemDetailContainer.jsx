import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import { useEffect, useState } from "react";
import { Button, Paper, useTheme } from "@mui/material";
import './ItemDetail.css';

const ItemDetailContainer = () => {
  const theme = useTheme();

  const {id} = useParams();

  const [product, setProduct] = useState({});

  useEffect(()=> {
    let promesa = new Promise ((res)=>{
      let selectedProduct = products.find((product)=> product.id === +id)
      res(selectedProduct)
    })

    promesa.then((res)=>setProduct(res)).catch((e)=>console.log(e))
  }, [id])

  // ACA HAY POSIBILIDAD DE REUTILIZAR EL CODIGO (VER COMO)
  const [cantidadProducto, setCantidadProducto] = useState(1);
    const cantidadAgregar = ()=> {
        setCantidadProducto(cantidadProducto + 1)
    };
    const cantidadRestar = ()=>{
        setCantidadProducto(cantidadProducto - 1)
    };

  return (
    <>
      <section
        className="productDetail"
        style={{
          backgroundColor : theme.palette.background.default
        }}
      >
        <Paper
          className="productDetail__description"
        >
          <img 
            src={product.img} 
            alt={product.title} 
          />
          <h1>
            {product.title}
          </h1>
          <p>
            {product.category}
          </p>
          <p>
            {product.description}
          </p>
        </Paper>
        <Paper
          className="productDetail__quantity"
        >
          <h2>
            ${product.price}
          </h2>
          <h3>
            Stock disponible: {product.stock}
          </h3>
          <div className="card__bottom__cantidadProducto">
            <Button
                variant='contained'
                color='secondary'
                onClick={()=>{cantidadRestar()}}
                disabled = {cantidadProducto <= 1} 
            >
                -
            </Button>
            <h3>
                {cantidadProducto}
            </h3>
            <Button
                variant='contained'
                color='secondary'
                onClick={()=>{cantidadAgregar()}}
                disabled = {cantidadProducto >= product['stock']} 
            >
                +
            </Button>
          </div>
        </Paper>
      </section>
    </>
  )
}

export default ItemDetailContainer