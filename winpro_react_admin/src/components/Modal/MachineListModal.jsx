import React, { useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./modal.css";
import { tokens } from "../../theme";
import { mockMachineData } from "../../data/mockData";

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

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


export default function MachineListModal(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [modal, setModal] = useState(false);

    var btnTitle = "", confirmTitle = "", cancelTitle = "";

    const initialValues = {
        id: "",
        status: "正常",
        reason: "",
        brandInfo_id: "",
        brandInfo_name: "",
        storeInfo_id: "",
        storeInfo_name: "",
        machineCode: "",
        uuid: "",
        nfcid: "",
        qrcode: "",
        name: "",
        spending: 0,
        remarks: ""
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
        initialValues.id = mockMachineData[props.id].id;
        initialValues.status = mockMachineData[props.id].status;
        initialValues.reason = mockMachineData[props.id].reason;
        initialValues.brandInfo_id = mockMachineData[props.id].brandInfo.id;
        initialValues.brandInfo_name = mockMachineData[props.id].brandInfo.name;
        initialValues.storeInfo_id = mockMachineData[props.id].storeInfo.id;
        initialValues.storeInfo_name = mockMachineData[props.id].storeInfo.name;
        initialValues.machineCode = mockMachineData[props.id].machineCode;
        initialValues.uuid = mockMachineData[props.id].uuid;
        initialValues.nfcid = mockMachineData[props.id].nfcid;
        initialValues.qrcode = mockMachineData[props.id].qrcode;
        initialValues.name = mockMachineData[props.id].name;
        initialValues.spending = mockMachineData[props.id].spending;
        initialValues.remarks = mockMachineData[props.id].remarks;
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
                                                value={values.machineCode}
                                                name="machineCode"
                                                error={!!touched.machineCode && !!errors.machineCode}
                                                helperText={touched.machineCode && errors.machineCode}
                                                sx={{ margin: "0 1rem 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                                            />
                                            <TextField className="modal_input_textfield"
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="暱稱"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.uuid}
                                                name="uuid"
                                                error={!!touched.uuid && !!errors.uuid}
                                                helperText={touched.uuid && errors.uuid}
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
                                                    label="店面id"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.storeInfo_id}
                                                    name="storeInfo_id"
                                                    error={!!touched.storeInfo_id && !!errors.storeInfo_id}
                                                    helperText={touched.storeInfo_id && errors.storeInfo_id}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="店面名稱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.storeInfo_name}
                                                    name="storeInfo_name"
                                                    error={!!touched.storeInfo_name && !!errors.storeInfo_name}
                                                    helperText={touched.storeInfo_name && errors.storeInfo_name}
                                                    sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                            </Box>

                                            <Box display={"flex"}>
                                                <TextField
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
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="NCF-ID"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.nfcid}
                                                    name="nfcid"
                                                    error={!!touched.nfcid && !!errors.nfcid}
                                                    helperText={touched.nfcid && errors.nfcid}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="QR CODE"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.qrcode}
                                                    name="qrcode"
                                                    error={!!touched.qrcode && !!errors.qrcode}
                                                    helperText={touched.qrcode && errors.qrcode}
                                                    sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                            </Box>
                                            {/* SPENDING */}
                                            <TextField
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="機台單次花費金額"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.spending}
                                                name="spending"
                                                error={!!touched.spending && !!errors.spending}
                                                helperText={touched.spending && errors.spending}
                                                sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                            />
                                            <Box display={"flex"}>
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
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
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
    )
}
