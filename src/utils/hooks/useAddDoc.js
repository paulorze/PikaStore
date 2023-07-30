import { db } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const useAddDoc = (coleccion, objeto, navigate = false, vaciarCarrito = null)=> {
    let endpointCollection = collection (db, coleccion);
    
    addDoc(endpointCollection, objeto).then(res => {navigate ? Swal.fire({
        icon: 'success',
        title: 'Compra Realizada',
        text: `Ante cualquier duda o cambio, comunicate con nosotros usando como referencia tu código de compra: ${res.id}`,
        background: '#7B2CBF',
        color: '#ffffff',
        confirmButtonColor: '#bdefa7',
    }).then((result) => {if (result.isConfirmed || result.isDismissed){navigate('/'); vaciarCarrito()}})
    : Swal.fire({
        icon: 'success',
        title: 'Objeto agregado exitosamente',
        background: '#7B2CBF',
        color: '#ffffff',
        confirmButtonColor: '#bdefa7',
    })
}
);
};

export default useAddDoc;