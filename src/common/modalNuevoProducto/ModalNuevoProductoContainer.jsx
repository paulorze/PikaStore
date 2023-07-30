import { useFormik } from 'formik';
import * as Yup from "yup";
import useAddDoc from '../../utils/hooks/useAddDoc';
import useUpdateDoc from '../../utils/hooks/useUpdateDoc';
import ModalNuevoProducto from './ModalNuevoProducto';

const ModalNuevoProductoContainer = ({theme, smDisplay, mdDisplay, openModal, setOpenModal, refreshItems, setRefreshItems, filterParams, product = '' }) => {
    const {handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            title: product ? product.title : '',
            category: product ? product.category : '',
            tags: product ? product.tags.toString() : '',
            price: product ? product.price : '',
            stock: product ? product.stock : '',
            description: product ? product.description : '',
            img: product ? product.img : ''
        },
        onSubmit: (data, {resetForm}) => {
            let item = {...data, tags: data.tags.split(",")}
            if (product) {
                useUpdateDoc('products',product.id,item, refreshItems, setRefreshItems)
                resetForm()
            } else {
                useAddDoc({coleccion : 'products', objeto : item, refreshItems : refreshItems, setRefreshItems:setRefreshItems});
                resetForm()
            };
            setOpenModal(false);
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Este campo es obligatorio").min(5,"Su nombre debe contener al menos 5 caracteres").max(20, "Su nombre no puede contener mas de 20 caracteres"),
            category: Yup.string().required("Este campo es obligatorio"),
            tags: Yup.string().required("Este campo es obligatorio"),
            price: Yup.number().required("Este campo es obligatorio").typeError('El precio debe ser un número'),
            stock: Yup.number().required("Este campo es obligatorio").typeError('El stock debe ser un número'),
            description: Yup.string().required("Este campo es obligatorio"),
            img: Yup.string().required("Este campo es obligatorio"),
        }),
        validateOnChange: false,
        validateOnMount: product
    })
    return (
        <ModalNuevoProducto
            theme = {theme}
            smDisplay = {smDisplay}
            mdDisplay = {mdDisplay}
            openModal = {openModal}
            setOpenModal = {setOpenModal}
            filterParams = {filterParams}
            product = {product}
            handleSubmit = {handleSubmit}
            handleChange = {handleChange}
            errors = {errors}
        />
    )
}

export default ModalNuevoProductoContainer