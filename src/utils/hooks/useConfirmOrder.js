import { db } from '../../firebaseConfig';
import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const useConfirmOrder = (objeto, setRefreshItems, refreshItems)=> {
    let orderHistoryCollection = collection (db, 'orderHistory');
    addDoc(orderHistoryCollection, objeto)
        .then(deleteDoc(doc(db, 'orders', objeto.id))
            .then(
                setRefreshItems(!refreshItems),
                Swal.fire({
                    icon: 'success',
                    title: 'Pedido enviado exitosamente',
                    background: '#7B2CBF',
                    color: '#ffffff',
                    confirmButtonColor: '#bdefa7',
                })
            ))
};

export default useConfirmOrder;