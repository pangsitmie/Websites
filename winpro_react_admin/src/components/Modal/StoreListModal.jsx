import React, { useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./modal.css";
import IMG from "../../assets/user.png";
import { tokens } from "../../theme";
import { mockStoreData } from "../../data/mockData";


const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    status: yup.string().required("required"),
    reason: yup.string().required("required"),
    uid: yup.string().required("required"),
    username: yup.string().required("required"),
    imgURL: yup.string().required("required"),
    phone: yup.string().required("required"),
    password: yup.string().required("required"),
    sex: yup.string().required("required"),
    birthday: yup.string().required("required"),
});


export default function StoreListModal(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [modal, setModal] = useState(false);

    var btnTitle = "", confirmTitle = "", cancelTitle = "";

    const initialValues = {
        id: 0,
        status: "",
        reason: "None",
        brandInfo: {
            id: null,
            name: "",
        },
        name: "",
        storeImgURL: "",
        storeAddress: {
            city: "",
            district: "",
            address: "",
        },
        storeManager: {
            name: "",
            phone: "",
            email: ""
        },
        remarks: "N/A"
    };
    console.log(props.type);
    if (props.type === "new") {
        btnTitle = "新增";
        confirmTitle = "新增";
        cancelTitle = "取消";
    } else {
        btnTitle = "更新";
        confirmTitle = "修改";
        cancelTitle = "取消";
        initialValues.id = mockStoreData[props.id].id;
        initialValues.status = mockStoreData[props.id].status;
        initialValues.reason = mockStoreData[props.id].reason;
        initialValues.brandInfo = mockStoreData[props.id].brandInfo;
        initialValues.name = mockStoreData[props.id].name;
        initialValues.storeImgURL = mockStoreData[props.id].storeImgURL;
        initialValues.storeAddress = mockStoreData[props.id].storeAddress;
        initialValues.storePhone = mockStoreData[props.id].storePhone;
        initialValues.storeManager = mockStoreData[props.id].storeManager;
        initialValues.remarks = mockStoreData[props.id].remarks;
    }

    const handleFormSubmit = (values) => {
        console.log("HELLO");
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

            <Button onClick={toggleModal} className="btn-modal" sx={{ color: colors.primary[100], border: "1px solid #111", borderColor: colors.blueAccent[100] }}>{btnTitle}{props.id}
            </Button>

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
                                            <Box textAlign="center">
                                                <Typography variant="h5" color={colors.greenAccent[500]} sx={{ margin: "1rem 0 0 0" }}>
                                                    UID: {initialValues.id}
                                                </Typography>
                                                <Typography variant="h5" color={colors.greenAccent[500]} sx={{ margin: ".5rem 0 1rem 0" }}>
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


                                            <Box display={"flex"}>
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="品牌id"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.brandInfo.id}
                                                    name="brandInfo_id"
                                                    error={!!touched.name && !!errors.name}
                                                    helperText={touched.name && errors.name}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="品牌名稱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.brandInfo.name}
                                                    name="phone"
                                                    error={!!touched.phone && !!errors.phone}
                                                    helperText={touched.phone && errors.phone}
                                                    sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                            </Box>

                                            {/* STORE ADDRESS */}
                                            <Box display={"flex"}>
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="品牌id"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.storeAddress.city}
                                                    name="brandInfo_id"
                                                    error={!!touched.name && !!errors.name}
                                                    helperText={touched.name && errors.name}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="品牌名稱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.storeAddress.district}
                                                    name="phone"
                                                    error={!!touched.phone && !!errors.phone}
                                                    helperText={touched.phone && errors.phone}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="品牌名稱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.storeAddress.address}
                                                    name="phone"
                                                    error={!!touched.phone && !!errors.phone}
                                                    helperText={touched.phone && errors.phone}
                                                    sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                            </Box>

                                            <Box display={"flex"}>
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="品牌id"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.storeManager.name}
                                                    name="brandInfo_id"
                                                    error={!!touched.name && !!errors.name}
                                                    helperText={touched.name && errors.name}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="品牌名稱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.storeManager.phone}
                                                    name="phone"
                                                    error={!!touched.phone && !!errors.phone}
                                                    helperText={touched.phone && errors.phone}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="品牌名稱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.storeManager.email}
                                                    name="phone"
                                                    error={!!touched.phone && !!errors.phone}
                                                    helperText={touched.phone && errors.phone}
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
                                                    取消
                                                </Typography>
                                            </Button>
                                            <Button type="submit" color="success" variant="contained" sx={{ minWidth: "8rem", padding: ".5rem", margin: ".5rem", borderRadius: "6px" }}>
                                                <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                                                    更新
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
