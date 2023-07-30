import { db } from '../../firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

const useUpdateDoc = (coleccion, id, objeto, refreshItems = null, setRefreshItems = null)=> {
    let refDoc = doc(db, coleccion, id );
    updateDoc(refDoc, objeto).then( res => {
        refreshItems && (
            Swal.fire({
                icon: 'success',
                title: 'Objeto actualizado exitosamente',
                background: '#7B2CBF',
                color: '#ffffff',
                confirmButtonColor: '#bdefa7',
            }).then (setRefreshItems(!refreshItems))
        );
    });
};

export default useUpdateDoc;