import { useFormik } from 'formik';
import * as Yup from "yup";
import useAddDoc from '../../utils/hooks/useAddDoc';
import useUpdateDoc from '../../utils/hooks/useUpdateDoc';
import ModalNuevoDiseno from './ModalNuevoDiseno';

const ModalNuevoDisenoContainer = ({theme, smDisplay, mdDisplay, openModal, setOpenModal, refreshItems, setRefreshItems, filterParams, design = ''}) => {
    const {handleSubmit, handleChange, errors} = useFormik({
        initialValues: {
            title: design ? design.title : '',
            category: design ? design.category : '',
            tags: design ? design.tags.toString() : '',
            img: design ? design.img : ''
        },
        onSubmit: (data) => {
            let item = {...data, tags: data.tags.split(",")}
            if (design) {
                useUpdateDoc('designs',design.id,item)
            } else {
                useAddDoc('designs', item);
            }
            setRefreshItems(!refreshItems);
            setOpenModal(false);
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Este campo es obligatorio").min(5,"Su nombre debe contener al menos 5 caracteres").max(20, "Su nombre no puede contener mas de 20 caracteres"),
            category: Yup.string().required("Este campo es obligatorio"),
            tags: Yup.string().required("Este campo es obligatorio"),
            img: Yup.string().required("Este campo es obligatorio"),
        }),
        validateOnChange: false,
        validateOnMount: design
    })
    return (
        <ModalNuevoDiseno
            theme = {theme}
            smDisplay = {smDisplay}
            mdDisplay = {mdDisplay}
            openModal = {openModal}
            setOpenModal = {setOpenModal}
            filterParams = {filterParams}
            design = {design}
            handleSubmit = {handleSubmit}
            handleChange = {handleChange}
            errors = {errors}
        />
    )
};

export default ModalNuevoDisenoContainer