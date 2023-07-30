import { db } from '../../firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

const useUpdateDoc = (coleccion, id, objeto)=> {
    let refDoc = doc(db, coleccion, id );
    updateDoc(refDoc, objeto)
}

export default useUpdateDoc;