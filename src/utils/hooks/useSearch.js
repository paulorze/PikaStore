import { db } from '../../firebaseConfig';
import { collection, getDocs, query, where, and } from 'firebase/firestore';

const useSearch = (searchParams, tabla, setter)=> {
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    let productsCollection = collection(db, tabla);
    let consulta;

    if (!search && !category) {
        consulta = productsCollection;
    } else if (search && !category) {
        consulta = query(productsCollection, where('tags','array-contains',search))
    } else if (!search && category) {
        consulta = query(productsCollection, where ('category', '==', category))
    } else {
        consulta = query(productsCollection, and(where ('category', '==', category), where('tags','array-contains',search)))
    };

    getDocs(consulta).then(res => {
        let productsArray = res.docs.map(product => {
            return {...product.data(), id: product.id}
        });
        setter(productsArray)
    });
}

export default useSearch;

//Como usar los searchParams
    // //Creamos las constantes que corresponden a los parametros de busqueda y de categorias
    // const search = searchParams.get('search');  //devuelve null si no se paso esta query
    // const category = searchParams.get('category');
    // //Si existe la query search, filtramos los productos por lo que se busco
    // let filteredProducts;
    // search && (filteredProducts = products.filter(product => product.title.includes(search) || product.tags.includes(search)));
    // //Si existe la query category, filtramos los productos que cumplan con el requisito
    // filteredProducts
    //     ? (category && (filteredProducts = filteredProducts.filter(product => product.category === category)))
    //     : (category && (filteredProducts = products.filter(product => product.category === category)))
    // const fetchItems = new Promise((res)=> {
    //     res(filteredProducts ? filteredProducts : products)
    // });