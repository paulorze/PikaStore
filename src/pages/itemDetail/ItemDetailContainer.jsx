import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from '../../context/CartContext';
import { ThemeContext } from "../../context/ThemeContext";
import useCantidadProducto from "../../utils/hooks/useCantidad";
import { db } from '../../firebaseConfig';
import { collection, getDoc, doc } from 'firebase/firestore';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const {id} = useParams();
  const {theme} = useContext(ThemeContext)
  const {carritoAgregar} = useContext(CartContext);
  const {cantidadProducto, cantidadAgregar, cantidadRestar} = useCantidadProducto(id)
  const [product, setProduct] = useState({});

  useEffect(()=> {
    let productsCollection = collection(db, 'products');
    let productoDB = doc(productsCollection, id);
    getDoc(productoDB).then( res => setProduct({...res.data(), id: res.id}))
  }, [id])

  return (
      <ItemDetail
        theme={theme}
        product={product}
        cantidadProducto={cantidadProducto}
        cantidadAgregar={cantidadAgregar}
        cantidadRestar={cantidadRestar}
        carritoAgregar={carritoAgregar}
      />
  )
}

export default ItemDetailContainer