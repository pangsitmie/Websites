import React, { useState, useEffect } from "react";
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

// {店面id、機台碼、NFCID、機台名稱、機台單次花費金額、備註}

const checkoutSchema = yup.object().shape({
    name: yup.string().required("required"),
    price: yup.number().required("required"),
    desc: yup.string().required("required"),
});


export default function MachineListModal({ props }) {
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
                            uuid: props.uuid
                        }
                    ]
                }
            })
            console.log("deleted");
        } else {
            console.log("not deleted");
        }
    };

    // ===================== BAN MACHINE MUTATION =====================
    const [ApolloBanMachine, { loading: loading2, error: error2, data: data2 }] = useLazyQuery(BanMachine);
    useEffect(() => {
        if (data2) {
            window.location.reload();
        }
        else {
            console.log("NO DATA")
        }
    }, [data2]);

    // HANDLE BAN MACHINE
    const handleBan = (e) => {
        var result = window.confirm("Are you sure you want to ban this machine?");
        if (result) {
            ApolloBanMachine({
                variables: {
                    args: [
                        {
                            uuid: props.uuid
                        }
                    ]
                }
            })
            console.log("banned");
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
                        uuid: props.uuid
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
            // handleStatusChange(nonNullData.status.name)
            // setStatus(data3.getBrand[0].status.name)
        }
    }, [data3]);

    // UPDATE BRAND MUTATION
    const [ApolloUpdateMachine, { loading: loading4, error: error4, data: data4 }] = useLazyQuery(UpdateMachine);
    useEffect(() => {
        if (data4) {
            window.location.reload();
        }
        else {
            console.log("No data update")
        }
    }, [data4]);

    // UNBAN MUTATION
    const [ApolloUnBanMachine, { loading: loading5, error: error5, data: data5 }] = useLazyQuery(UnBanMachine);
    useEffect(() => {
        if (data5) {
            window.location.reload();
        }
        else {
            console.log("No data update")
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
                            uuid: props.uuid,
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
                            uuid: props.uuid,
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
                            uuid: props.uuid
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

                                            <Box textAlign="center" display={"flex"} alignItems={"center"} justifyContent={"center"}>
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
                                            <Box display="flex" justifyContent="center" >
                                                <Button onClick={handleDelete} id={values.id} variant="contained" sx={{ minWidth: "100px", padding: ".5rem 1.5rem", margin: "0 1rem", borderRadius: "10px", border: "2px solid #ff2f00" }}>
                                                    <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                                                        {deleteTitle}
                                                    </Typography>
                                                </Button>

                                                {values.status === "banned" ? (
                                                    <Button onClick={handleUnBan} id={values.id} variant="contained" sx={{ minWidth: "100px", padding: ".5rem 1.5rem", margin: "0 1rem", borderRadius: "10px", border: "2px solid #fff" }}>
                                                        <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                                                            {banTitle}
                                                        </Typography>
                                                    </Button>
                                                ) : (
                                                    <Button onClick={handleBan} id={values.id} variant="contained" sx={{ minWidth: "100px", padding: ".5rem 1.5rem", margin: "0 1rem", borderRadius: "10px", border: "2px solid #ff2f00" }}>
                                                        <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                                                            {unbanTitle}
                                                        </Typography>
                                                    </Button>
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
