import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import ".././modal.css";
import { tokens } from "../../../theme";
import { format } from 'date-fns';
import { useMutation } from "@apollo/client";
import { SendVerificationCode } from "../../../graphQL/Mutations";

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    status: yup.string().required("required"),
    reason: yup.string().required("required"),
    name: yup.string().required("required"),
    intro: yup.string().required("required").nullable(),
    brand_id: yup.string().required("required"),
    brand_name: yup.string().required("required"),
    location_address: yup.string().required("required"),
    location_description: yup.string().required("required").nullable(),
    principal_name: yup.string().required("required"),
    principal_lineUrl: yup.string().required("required"),
    principal_email: yup.string().required("required").nullable(),
});


export default function CreateStoreModal() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [modal, setModal] = useState(false);

    var btnTitle = "新增店面", confirmTitle = "新增", cancelTitle = "取消";


    const initialValues = {
        id: 0,
        status: "",
        reason: "None",
        brand_id: "",
        brand_name: "",
        name: "",
        intro: "",
        cover: "https://img.icons8.com/fluency/48/null/test-account.png",
        location_address: "",
        location_description: "",
        principal_name: "",
        principal_lineUrl: "",
        principal_email: "",
    };


    const handleFormSubmit = (values) => {
        //FIXME: CALL GQL API TO UPDATE THE DATA
        console.log("FORM SUBMIT");
        console.log(values);
        // SendCode({ variables: { phone: { number: "0974148571", country: "tw" }, type: "signup" } });
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
                                            <Box display="flex" justifyContent="center" alignItems="center" mt={"2rem"}>
                                                <img
                                                    alt="profile-user"
                                                    width="100px"
                                                    height="100px"
                                                    src={initialValues.cover}
                                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                                />
                                            </Box>
                                            <Box textAlign="center" display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                                <Typography variant="h5" color={colors.greenAccent[500]} sx={{ margin: ".25rem .5rem" }}>
                                                    UID: {initialValues.id}
                                                </Typography>
                                                <Typography variant="h5" color={colors.greenAccent[500]} sx={{ margin: ".25rem .5rem" }}>
                                                    |
                                                </Typography>
                                                <Typography variant="h5" color={colors.greenAccent[500]} sx={{ margin: ".25rem 0.5" }}>
                                                    {initialValues.status}
                                                </Typography>
                                            </Box>

                                            <TextField className="modal_input_textfield"
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="暱稱"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.name}
                                                name="name"
                                                error={!!touched.name && !!errors.name}
                                                helperText={touched.name && errors.name}
                                                sx={{ margin: "0 1rem 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                                            />
                                            <TextField className="modal_input_textfield"
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="Intro"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.intro}
                                                name="intro"
                                                error={!!touched.intro && !!errors.intro}
                                                helperText={touched.intro && errors.intro}
                                                sx={{ margin: "0 1rem 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                                            />
                                            <Box display={"flex"}>
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="品牌id"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.brand_id}
                                                    name="brand_id"
                                                    error={!!touched.brand_id && !!errors.brand_id}
                                                    helperText={touched.brand_id && errors.brand_id}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="品牌名稱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.brand_name}
                                                    name="brand_name"
                                                    error={!!touched.brand_name && !!errors.brand_name}
                                                    helperText={touched.brand_name && errors.brand_name}
                                                    sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                            </Box>

                                            {/* STORE ADDRESS */}
                                            <Box display={"flex"}>
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="店面縣市"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.location_address}
                                                    name="location_address"
                                                    error={!!touched.location_address && !!errors.location_address}
                                                    helperText={touched.location_address && errors.location_address}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="店面鄉鎮"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.location_description}
                                                    name="location_description"
                                                    error={!!touched.location_description && !!errors.location_description}
                                                    helperText={touched.location_description && errors.location_description}
                                                    sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                            </Box>

                                            <Box display={"flex"}>
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="負責人名稱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.principal_name}
                                                    name="principal_name"
                                                    error={!!touched.principal_name && !!errors.principal_name}
                                                    helperText={touched.principal_name && errors.principal_name}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="負責人line"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.principal_lineUrl}
                                                    name="principal_lineUrl"
                                                    error={!!touched.principal_lineUrl && !!errors.principal_lineUrl}
                                                    helperText={touched.principal_lineUrl && errors.principal_lineUrl}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="負責人信箱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.principal_email}
                                                    name="principal_email"
                                                    error={!!touched.principal_email && !!errors.principal_email}
                                                    helperText={touched.principal_email && errors.principal_email}
                                                    sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                            </Box>
                                            <TextField
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="封鎖原因"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.reason}
                                                name="reason"
                                                error={!!touched.reason && !!errors.reason}
                                                helperText={touched.reason && errors.reason}
                                                sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                            />
                                        </Box>
                                        <Box display="flex" justifyContent="center" >
                                            <Button type="submit" onClick={toggleModal} color="error" variant="contained" sx={{ minWidth: "8rem", padding: ".5rem", margin: ".5rem", borderRadius: "6px" }}>
                                                <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                                                    {cancelTitle}
                                                </Typography>
                                            </Button>
                                            <Button type="submit" color="success" variant="contained" sx={{ minWidth: "8rem", padding: ".5rem", margin: ".5rem", borderRadius: "6px" }}>
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

    );



}
