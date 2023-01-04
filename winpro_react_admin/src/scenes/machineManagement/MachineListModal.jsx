import React, { useState, useEffect, useRef } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useQuery, useLazyQuery } from '@apollo/client'
import "../../components/Modal/modal.css";
import { tokens } from "../../theme";
import ConfirmModal from "../../components/Modal/ConfirmModal";
import { BanMachine, GetMachine, RemoveMachine, UnBanMachine, UpdateMachine } from "../../graphQL/Queries";
import { replaceNullWithEmptyString } from "../../utils/Utils";
import QRCode from "react-qr-code";
import { saveAs } from 'file-saver';
import svgToCanvas from 'svg-to-canvas';


// {店面id、機台碼、NFCID、機台名稱、機台單次花費金額、備註}

const checkoutSchema = yup.object().shape({
    name: yup.string().required("required"),
    price: yup.number().required("required"),
    desc: yup.string().required("required"),
});


export default function MachineListModal({ props }) {

    const canRef = useRef(null);
    const handleDownloadClick = () => {
        // Get the QR code element
        // const qrCodeEl = canRef.current;
        const qrCodeEl = document.getElementById('qr-code');

        console.log(qrCodeEl);
        const canvasEl = svgToCanvas(qrCodeEl);
        console.log(canvasEl);

        const dataUrl = canvasEl.toDataURL();

        // Create a Blob object from the data URL
        const blob = new Blob([dataUrl], { type: 'image/png' });

        // Use the FileSaver library to save the Blob object as a file
        saveAs(blob, 'qr-code.png');
    };


    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [modal, setModal] = useState(false);
    //REF
    const [status, setStatus] = useState('disable');
    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    var btnTitle = "修改", confirmTitle = "更新", deleteTitle = "移除", banTitle = "封鎖", unbanTitle = "解封";
    const [initialValues, setInitialValues] = useState({
        id: 0,
        UUID: "",
        name: "",
        code: "",
        price: 0,
        qrCode: "",
        status: "",
        connStatus: "",
        desc: "",
    });


    // ===================== REMOVE MACHINE QUERY =====================
    const [ApolloRemoveMachine, { loading, error, data }] = useLazyQuery(RemoveMachine);
    useEffect(() => {
        if (data) {
            window.location.reload();
        }
        else {
            console.log("NO DATA")
        }
    }, [data]);

    // HANDLE REMOVE MACHINE
    const handleDelete = (e) => {
        var result = window.confirm("Are you sure you want to delete this machine?");
        if (result) {
            ApolloRemoveMachine({
                variables: {
                    args: [
                        {
                            id: props.id
                        }
                    ]
                }
            })
            console.log("deleted");
        } else {
            console.log("not deleted");
        }
    };



    // ===================== INITIAL VALUES FROM GETMACHINE =====================
    const { loading: loading3, error: error3, data: data3 } = useQuery(GetMachine
        , {
            variables: {
                args: [
                    {
                        id: props.id
                    }
                ],
            }
        }
    );
    useEffect(() => {
        if (data3) {
            const nonNullData = replaceNullWithEmptyString(data3.getMachine[0]);
            setInitialValues({
                // ...initialValues,
                // ...nonNullData
                id: nonNullData.id,
                UUID: nonNullData.uuid,
                name: nonNullData.name,
                code: nonNullData.code,
                price: nonNullData.price,
                qrCode: nonNullData.qrCode,
                status: nonNullData.status.name,
                desc: nonNullData.description,
            });

            //set status only if not banned
            if (nonNullData.status.name !== "banned") {
                setStatus(nonNullData.status.name)
            }
        }
    }, [data3]);

    // UPDATE BRAND MUTATION
    const [ApolloUpdateMachine, { loading: loading4, error: error4, data: data4 }] = useLazyQuery(UpdateMachine);
    useEffect(() => {
        if (data4) {
            window.location.reload();
        }
    }, [data4]);

    // UNBAN MUTATION
    const [ApolloUnBanMachine, { loading: loading5, error: error5, data: data5 }] = useLazyQuery(UnBanMachine);
    useEffect(() => {
        if (data5) {
            window.location.reload();
        }
    }, [data5]);



    const handleFormSubmit = (values) => {
        console.log("FORM SUBMIT");
        console.log(values);
        console.log(status);

        if (initialValues.status === "banned") { //if banned dont update status
            ApolloUpdateMachine({
                variables: {
                    args: [
                        {
                            id: props.id,
                        }
                    ],
                    name: values.name,
                    price: parseInt(values.price),
                    description: values.desc,
                }
            })
        } else {
            ApolloUpdateMachine({
                variables: {
                    args: [
                        {
                            id: props.id,
                        }
                    ],
                    name: values.name,
                    price: parseInt(values.price),
                    description: values.desc,
                    statusId: status
                }
            })
        }

    };




    const handleUnBan = (e) => {
        var result = window.confirm("Are you sure you want to unban this machine?");
        if (result) {
            ApolloUnBanMachine({
                variables: {
                    args: [
                        {
                            id: props.id
                        }
                    ],
                    reason: "null"
                }
            })
            console.log("unbaned");
        } else {
            console.log("not deleted");
        }
    }

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
                                        <Box color={"black"} >

                                            <Box display={"flex"} >
                                                <Box width={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                                                    <Typography variant="h2" sx={{ fontSize: "2rem", fontWeight: "600", color: "white" }}>
                                                        {btnTitle}
                                                    </Typography>
                                                    {(() => {
                                                        if (initialValues.status === "disable") {
                                                            return (
                                                                <Typography variant="h5" color={colors.primary[100]} sx={{ margin: ".5rem .5rem" }}>
                                                                    停用
                                                                </Typography>)
                                                        }
                                                        else if (initialValues.status === "banned") {
                                                            return (
                                                                <Typography variant="h5" color={colors.redAccent[500]} sx={{ margin: ".5rem .5rem" }}>
                                                                    封鎖
                                                                </Typography>)
                                                        }
                                                        else if (initialValues.status === "removed") {
                                                            return (
                                                                <Typography variant="h5" color={colors.redAccent[500]} sx={{ margin: ".5rem .5rem" }}>
                                                                    删除
                                                                </Typography>)
                                                        }
                                                        else {
                                                            return (
                                                                <Typography variant="h5" color={colors.greenAccent[500]} sx={{ margin: ".5rem .5rem" }}>
                                                                    正常
                                                                </Typography>)
                                                        }
                                                    })()}

                                                </Box>

                                                <Box display={"flex"} justifyContent={"center"} padding={".5rem"} flexDirection={"column"} >
                                                    <QRCode ref={canRef} id="qr-code" value="HELLO" size={100} />
                                                    <Button
                                                        sx={{ background: "#cecece", margin: "5px 0 10px 0", width: "100px" }}
                                                        onClick={handleDownloadClick}
                                                    >
                                                        Download
                                                    </Button>
                                                </Box>
                                            </Box>




                                            <Box display={"flex"} justifyContent={"center"}>
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
                                                    sx={{ margin: "0 1rem 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                                                />
                                                <FormControl sx={{ minWidth: 150 }}>
                                                    <InputLabel id="demo-simple-select-label" >{initialValues.status}</InputLabel>
                                                    <Select
                                                        disabled={initialValues.status === "banned"}
                                                        sx={{ borderRadius: "10px", background: colors.primary[400] }}
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={status}
                                                        label="status"
                                                        onChange={handleStatusChange}
                                                    >
                                                        <MenuItem value={"normal"}>正常</MenuItem>
                                                        <MenuItem value={"disable"}>停用</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>


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
                                            <TextField
                                                fullWidth
                                                disabled={true}
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
                                                disabled={true}
                                                variant="filled"
                                                type="text"
                                                label="QR Code Payload"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.qrCode}
                                                name="qrCode"
                                                error={!!touched.qrCode && !!errors.qrCode}
                                                helperText={touched.qrCode && errors.qrCode}
                                                sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                            />
                                            <Box display={"flex"}>
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
                                                    sx={{ margin: "0 1rem 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px" }}
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
                                        </Box>
                                        <Box display="flex" justifyContent="center" >
                                            <Box display="flex" justifyContent="center" >
                                                <Button onClick={handleDelete} id={values.id} variant="contained" sx={{ minWidth: "100px", padding: ".5rem 1.5rem", margin: "0 1rem", borderRadius: "10px", border: "2px solid #ff2f00" }}>
                                                    <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                                                        {deleteTitle}
                                                    </Typography>
                                                </Button>

                                                {values.status === "banned" ? (
                                                    <Button onClick={handleUnBan} id={values.id} variant="contained" sx={{ minWidth: "100px", padding: ".5rem 1.5rem", margin: "0 1rem", borderRadius: "10px", border: "2px solid #fff" }}>
                                                        <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                                                            {unbanTitle}
                                                        </Typography>
                                                    </Button>
                                                ) : (
                                                    <ConfirmModal props={{ type: "machine", id: props.id }} />
                                                )}

                                                <Button type="submit" color="success" sx={{ minWidth: "100px", padding: ".5rem 1.5rem", margin: "0 1rem", borderRadius: "10px", background: colors.grey[100] }}>
                                                    <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: colors.grey[700] }}>
                                                        {confirmTitle}
                                                    </Typography>
                                                </Button>
                                            </Box>
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
