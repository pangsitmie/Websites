import React, { useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import ".././modal.css";
import { tokens } from "../../../theme";

// {店面id、機台碼、NFCID、機台名稱、機台單次花費金額、備註}

const checkoutSchema = yup.object().shape({
    machineCode: yup.string().required("required"),
    uuid: yup.string().required("required"),
    reason: yup.string().required("required"),
    brandInfo_id: yup.string().required("required"),
    brandInfo_name: yup.string().required("required"),
    storeInfo_id: yup.string().required("required"),
    storeInfo_name: yup.string().required("required"),
    nfcid: yup.string().required("required"),
    qrcode: yup.string().required("required"),
    name: yup.string().required("required"),
    spending: yup.string().required("required"),
    remarks: yup.string().required("required"),
});


export default function MachineListModal({ props }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [modal, setModal] = useState(false);

    var btnTitle = "", confirmTitle = "", cancelTitle = "";

    const initialValues = {
        UUID: "",
        name: "",
        code: "",
        price: 0,
        payload: "",
        desc: "",
    };

    btnTitle = "修改";
    confirmTitle = "新增";
    cancelTitle = "取消";
    initialValues.UUID = props.uuid;
    initialValues.name = props.name;
    initialValues.code = props.code;
    initialValues.price = props.price;
    initialValues.payload = props.payload;
    initialValues.desc = props.description;


    const handleFormSubmit = (values) => {
        console.log("FORM SUBMIT");
        console.log(values);
    };

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <>
            {/* THE CONTENT OF THE BUTTON */}

            <Button onClick={toggleModal} className="btn-modal" sx={{ color: colors.primary[100], border: "1px solid #111", borderColor: colors.blueAccent[100] }}>{btnTitle}</Button>

            {/* CONTENT OF WHAT HAPPEN AFTER BUTTON CLICKED */}
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <Box m="20px">
                            {initialValues.username}
                            <Typography variant="h2" sx={{ mb: "30px", textAlign: "center", fontSize: "1.4rem", fontWeight: "600", color: "white" }}>
                                {btnTitle}
                            </Typography>

                            <Formik
                                onSubmit={handleFormSubmit}
                                initialValues={initialValues}
                                validationSchema={checkoutSchema}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleBlur,
                                    handleChange,
                                    handleSubmit,
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <Box color={"black"}>

                                            <TextField className="modal_input_textfield"
                                                fullWidth
                                                disabled={true}
                                                variant="filled"
                                                type="text"
                                                label="UUID"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.UUID}
                                                name="UUID"
                                                error={!!touched.UUID && !!errors.UUID}
                                                helperText={touched.UUID && errors.UUID}
                                                sx={{ margin: "0 1rem 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                                            />
                                            <TextField className="modal_input_textfield"
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="機台名稱"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.name}
                                                name="name"
                                                error={!!touched.name && !!errors.name}
                                                helperText={touched.name && errors.name}
                                                sx={{ margin: "0 0 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                                            />
                                            <TextField
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="機台號碼"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.code}
                                                name="code"
                                                error={!!touched.code && !!errors.code}
                                                helperText={touched.code && errors.code}
                                                sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                            />
                                            <TextField
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="Payload"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.payload}
                                                name="payload"
                                                error={!!touched.payload && !!errors.payload}
                                                helperText={touched.payload && errors.payload}
                                                sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                            />
                                            {/* SPENDING */}
                                            <TextField
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="機台單次花費金額"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.price}
                                                name="price"
                                                error={!!touched.price && !!errors.price}
                                                helperText={touched.price && errors.price}
                                                sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                            />
                                            <TextField
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="備註"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.desc}
                                                name="desc"
                                                error={!!touched.desc && !!errors.desc}
                                                helperText={touched.desc && errors.desc}
                                                sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                            />
                                        </Box>
                                        <Box display="flex" justifyContent="center" >

                                            <Button type="submit" color="success" variant="contained" sx={{ minWidth: "8rem", padding: ".55rem 1rem", margin: ".5rem .5rem 0 .5rem", borderRadius: "8px", background: colors.blueAccent[400] }}>
                                                <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                                                    {confirmTitle}
                                                </Typography>
                                            </Button>
                                        </Box>
                                    </form>
                                )}
                            </Formik>
                        </Box >
                    </div>
                </div>
            )
            }
        </>
    )
}
