import { db } from '../../firebaseConfig';
import { doc, deleteDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const useDeleteDoc = (coleccion, item, setRefreshItems, refreshItems)=> {
    Swal.fire({
        title: `Eliminar ${item.title}`,
        text: `¿Realmente desea eliminar ${item.title}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Si, ¡eliminar!',
        cancelButtonText: 'Cancelar',
        background: '#7B2CBF',
        color: '#ffffff'
    }).then((result) => {
        if (result.isConfirmed) {
            deleteDoc(doc(db, coleccion, item.id ))
            Swal.fire({
                title: 'Objeto eliminado',
                text: 'El objeto ha sido eliminado correctamente.',
                icon: 'success',
                background: '#7B2CBF',
                color: '#ffffff',
                confirmButtonColor: '#bdefa7',
            }).then(setRefreshItems(!refreshItems));
        }
    })
};

export default useDeleteDoc;