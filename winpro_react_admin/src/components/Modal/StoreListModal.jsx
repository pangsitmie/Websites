import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./modal.css";
import { tokens } from "../../theme";
import { format } from 'date-fns';
import { useMutation } from "@apollo/client";
import { SendVerificationCode } from "../../graphQL/Mutations";



const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    status: yup.string().required("required"),
    reason: yup.string().required("required"),
    name: yup.string().required("required"),
    brandInfo_id: yup.string().required("required"),
    brandInfo_name: yup.string().required("required"),
    storeAddress_city: yup.string().required("required"),
    storeAddress_district: yup.string().required("required"),
    storeAddress_road: yup.string().required("required"),
    storeManager_name: yup.string().required("required"),
    storeManager_email: yup.string().required("required"),
    storeManager_line: yup.string().required("required"),
});


export default function StoreListModal({ props }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [modal, setModal] = useState(false);

    var btnTitle = "", confirmTitle = "", cancelTitle = "", displayDate = "";


    // if (error) return `Submission error! ${error.message}`;
    // const { loading, error, data } = useMutation(Login, { variables: { phone: { number: "0974148161", country: "tw" }, type: "signup" } });
    // const [secd, { data }] = useMutation(Login, { variables: { phone: { number: "0974148161", country: "tw" }, password: "signup", deviceCode: "", firebaseToken: "" } });


    //GQL
    // const { loading, error, data } = useMutation(SendVerificationCode, {
    //     variables: {
    //         phone:
    //         {
    //             number: "0974148567",
    //             country: "tw"
    //         },
    //         type: "signup"
    //     }
    // });
    const [SendCode, { loading, error, data }] = useMutation(SendVerificationCode);
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;


    const initialValues = {
        id: 0,
        status: "",
        reason: "None",
        brandInfo_id: "",
        brandInfo_name: "",
        name: "",
        storeImgURL: "https://img.icons8.com/fluency/48/null/test-account.png",
        storeAddress_city: "",
        storeAddress_district: "",
        storeAddress_road: "",
        storeManager_name: "",
        storeManager_email: "",
        storeManager_line: "",
        remarks: "N/A"
    };
    if (props == null) {
        btnTitle = "新增";
        confirmTitle = "新增";
        cancelTitle = "取消";
    }
    else {
        btnTitle = "修改";
        confirmTitle = "更新";
        cancelTitle = "刪除";
        initialValues.id = props.id;
        initialValues.status = props.status.name.toUpperCase();
        initialValues.reason = props.status.description;
        initialValues.brandInfo_id = props.brand.id;
        initialValues.brandInfo_name = props.brand.name;
        initialValues.name = props.name;
        initialValues.storeImgURL = "https://img.icons8.com/fluency/48/null/test-account.png";
        initialValues.storeAddress_city = props.location.address;
        initialValues.storeAddress_district = props.location.address;
        initialValues.storeAddress_road = props.location.address;
        initialValues.storeManager_name = props.principal.name;
        initialValues.storeManager_email = props.principal.email;
        initialValues.storeManager_line = props.principal.lineUrl;
        initialValues.remarks = props.intro;
        displayDate = format(props.createdAt * 1000, 'yyyy MMM d');
    }

    const handleFormSubmit = (values) => {
        //FIXME: CALL GQL API TO UPDATE THE DATA
        console.log("FORM SUBMIT");
        console.log(values);
        SendCode({ variables: { phone: { number: "0974148571", country: "tw" }, type: "signup" } });
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
                                                    src={initialValues.storeImgURL}
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
                                            <Typography variant="h5" color={colors.greenAccent[500]} sx={{ margin: "0 .5rem 1rem", textAlign: "center" }}>
                                                CREATED: {displayDate}
                                            </Typography>

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


                                            <Box display={"flex"}>
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="品牌id"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.brandInfo_id}
                                                    name="brandInfo_id"
                                                    error={!!touched.brandInfo_id && !!errors.brandInfo_id}
                                                    helperText={touched.brandInfo_id && errors.brandInfo_id}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="品牌名稱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.brandInfo_name}
                                                    name="brandInfo_name"
                                                    error={!!touched.brandInfo_name && !!errors.brandInfo_name}
                                                    helperText={touched.brandInfo_name && errors.brandInfo_name}
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
                                                    value={values.storeAddress_city}
                                                    name="storeAddress_city"
                                                    error={!!touched.storeAddress_city && !!errors.storeAddress_city}
                                                    helperText={touched.storeAddress_city && errors.storeAddress_city}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="店面鄉鎮"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.storeAddress_district}
                                                    name="storeAddress_district"
                                                    error={!!touched.storeAddress_district && !!errors.storeAddress_district}
                                                    helperText={touched.storeAddress_district && errors.storeAddress_district}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="店面地址"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.storeAddress_road}
                                                    name="storeAddress_road"
                                                    error={!!touched.storeAddress_road && !!errors.storeAddress_road}
                                                    helperText={touched.storeAddress_road && errors.storeAddress_road}
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
                                                    value={values.storeManager_name}
                                                    name="storeManager_name"
                                                    error={!!touched.storeManager_name && !!errors.storeManager_name}
                                                    helperText={touched.storeManager_name && errors.storeManager_name}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="負責人信箱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.storeManager_email}
                                                    name="storeManager_email"
                                                    error={!!touched.storeManager_email && !!errors.storeManager_email}
                                                    helperText={touched.storeManager_email && errors.storeManager_email}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="負責人line"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.storeManager_line}
                                                    name="storeManager_line"
                                                    error={!!touched.storeManager_line && !!errors.storeManager_line}
                                                    helperText={touched.storeManager_line && errors.storeManager_line}
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
                                            <TextField
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="備註"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.remarks}
                                                name="remarks"
                                                error={!!touched.remarks && !!errors.remarks}
                                                helperText={touched.remarks && errors.remarks}
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
