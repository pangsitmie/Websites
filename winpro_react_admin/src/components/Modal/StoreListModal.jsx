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
    name: yup.string().required("required"),
    brandInfo_id: yup.string().required("required"),
    brandInfo_name: yup.string().required("required"),
    storeAddress_city: yup.string().required("required"),
    storeAddress_district: yup.string().required("required"),
    storeAddress_road: yup.string().required("required"),
    storeManager_name: yup.string().required("required"),
    storeManager_phone: yup.string().required("required"),
    storeManager_email: yup.string().required("required"),
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
        brandInfo_id: "",
        brandInfo_name: "",
        name: "",
        storeImgURL: "",
        storeAddress_city: "",
        storeAddress_district: "",
        storeAddress_road: "",
        storeManager_name: "",
        storeManager_phone: "",
        storeManager_email: "",
        remarks: "N/A"
    };
    console.log(props.type);
    if (props.type === "new") {
        btnTitle = "新增";
        confirmTitle = "新增";
        cancelTitle = "取消";
    } else {
        btnTitle = "修改";
        confirmTitle = "更新";
        cancelTitle = "刪除";
        initialValues.id = mockStoreData[props.id].id;
        initialValues.status = mockStoreData[props.id].status;
        initialValues.reason = mockStoreData[props.id].reason;
        initialValues.brandInfo_id = mockStoreData[props.id].brandInfo.id;
        initialValues.brandInfo_name = mockStoreData[props.id].brandInfo.name;
        initialValues.name = mockStoreData[props.id].name;
        initialValues.storeImgURL = mockStoreData[props.id].storeImgURL;
        initialValues.storeAddress_city = mockStoreData[props.id].storeAddress.city;
        initialValues.storeAddress_district = mockStoreData[props.id].storeAddress.district;
        initialValues.storeAddress_road = mockStoreData[props.id].storeAddress.road;
        initialValues.storePhone = mockStoreData[props.id].storePhone;
        initialValues.storeManager_name = mockStoreData[props.id].storeManager.name;
        initialValues.storeManager_phone = mockStoreData[props.id].storeManager.phone;
        initialValues.storeManager_email = mockStoreData[props.id].storeManager.email;
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
                                                    label="品牌id"
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
                                                    label="品牌名稱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.storeManager_phone}
                                                    name="storeManager_phone"
                                                    error={!!touched.storeManager_phone && !!errors.storeManager_phone}
                                                    helperText={touched.storeManager_phone && errors.storeManager_phone}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="品牌名稱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.storeManager_email}
                                                    name="storeManager_email"
                                                    error={!!touched.storeManager_email && !!errors.storeManager_email}
                                                    helperText={touched.storeManager_email && errors.storeManager_email}
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
