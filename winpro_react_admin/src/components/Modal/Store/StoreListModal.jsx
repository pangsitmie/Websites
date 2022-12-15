import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import ".././modal.css";
import { tokens } from "../../../theme";
import { format } from 'date-fns';
import { useMutation } from "@apollo/client";
import { BannedStore, RemoveStore, UpdateStore } from "../../../graphQL/Mutations";

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    status: yup.string().required("required"),
    reason: yup.string().required("required"),
    name: yup.string().required("required"),
    intro: yup.string().required("required").nullable(),
    // location_address: yup.string().required("required"),
    principalName: yup.string().required("required"),
    principalLineUrl: yup.string().required("required"),
    principalEmail: yup.string().required("required").nullable(),
});


export default function StoreListModal({ props }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [modal, setModal] = useState(false);

    //REF
    const [storeStatus, setStorestatus] = React.useState('');
    const handleStatusChange = (event) => {
        setStorestatus(event.target.value);
    };

    var btnTitle = "修改", confirmTitle = "更新", deleteTitle = "移除", blockTitle = "封鎖";


    const initialValues = {
        id: -1,
        status: "",
        brand_id: "",
        brand_name: "",
        name: "",
        intro: "",
        cover: "https://img.icons8.com/fluency/48/null/test-account.png",
        location_address: "",
        location_description: "",
        principalName: "",
        principalPassword: "",
        principalLineUrl: "",
        principalEmail: "",
    };


    initialValues.id = props.id;
    initialValues.status = props.status.name.toUpperCase();
    initialValues.reason = props.status.description;
    initialValues.brand_id = props.brand.id;
    initialValues.brand_name = props.brand.name;
    initialValues.name = props.name;
    initialValues.intro = props.intro;
    initialValues.cover = "https://img.icons8.com/fluency/48/null/test-account.png";
    initialValues.location_address = props.location.address;
    initialValues.location_description = props.location.description;
    initialValues.principalName = props.principal.name;
    initialValues.principalLineUrl = props.principal.lineUrl;
    initialValues.principalEmail = props.principal.email;

    // =================================================================================
    // REMOVE STORE MUTATION
    const [ApolloRemoveStore, { loading, error, data }] = useMutation(RemoveStore);
    useEffect(() => {
        if (data) {
            console.log(data.removeStore);
            window.location.reload();
        }
        else {
            console.log("NO DATA")
        }
    }, [data]);

    // BAN STORE MUTATION
    const [ApolloBannedStore, { loading: loading1, error: error1, data: data1 }] = useMutation(BannedStore);
    useEffect(() => {
        if (data1) {
            console.log(data1);
            window.location.reload();
        }
        else {
            console.log("NO DATA")
        }
    }, [data1]);

    //UPDATE STORE MUTATION
    const [ApolloUpdateStore, { loading: loading2, error: error2, data: data2 }] = useMutation(UpdateStore);
    useEffect(() => {
        if (data2) {
            console.log(data2.updateStore.id);
            window.location.reload();
            console.log("UPDATE SUCCESS")
        }
        else {
            console.log("No data update")
        }
    }, [data2]);



    const handleFormSubmit = (values) => {
        //FIXME: CALL GQL API TO UPDATE THE DATA
        console.log("FORM SUBMIT");
        console.log(values);

        if (values.principalPassword === "") { //if password is empty, do not update password
            ApolloUpdateStore({
                variables: {
                    storeId: values.id,
                    name: values.name,
                    intro: values.intro,
                    principal: {
                        name: values.principalName,
                        lineUrl: values.principalLineUrl,
                        email: values.principalEmail,
                    },
                    statusId: storeStatus
                }
            });
        }
        else {
            ApolloUpdateStore({
                variables: {
                    storeId: values.id,
                    name: values.name,
                    intro: values.intro,
                    principal: {
                        name: values.principalName,
                        password: values.principalPassword,
                        lineUrl: values.principalLineUrl,
                        email: values.principalEmail,
                    },
                    statusId: storeStatus
                }
            });
        }
    };

    const handleDelete = (e) => {
        const targetId = e.target.id;
        console.log(targetId);
        var result = window.confirm("Are you sure you want to delete this brand?");
        if (result) {
            ApolloRemoveStore({
                variables: {
                    brandId: targetId,
                    statusId: "removed"
                }
            })
            console.log("deleted");
        } else {
            console.log("not deleted");
        }
    };

    const handleBan = (e) => {
        const targetId = e.target.id;
        console.log("Ban id:?" + targetId);
        var result = window.confirm("Are you sure you want to ban this brand?");
        if (result) {
            ApolloBannedStore({
                variables: {
                    storeId: targetId,
                    statusId: "banned"
                }
            })
            console.log("banned");
        } else {
            console.log("not banned");
        }
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
                            <Typography variant="h2" sx={{ mb: "10px", textAlign: "center", fontSize: "1.4rem", fontWeight: "600", color: "white" }}>
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
                                            <Box display="flex" justifyContent="center" alignItems="center" mt={"1rem"}>
                                                <img
                                                    alt="profile-user"
                                                    width="100px"
                                                    height="100px"
                                                    src={initialValues.cover}
                                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                                />
                                            </Box>
                                            <Box textAlign="center" display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                                <Typography variant="h5" color={colors.greenAccent[500]} sx={{ margin: "0.5rem" }}>
                                                    {initialValues.status}
                                                </Typography>
                                            </Box>

                                            <Box display={"flex"} justifyContent={"space-between"}>
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
                                                <FormControl sx={{ minWidth: 150 }} >
                                                    <InputLabel id="demo-simple-select-label" >{initialValues.status}</InputLabel>
                                                    <Select
                                                        sx={{ borderRadius: "10px", background: colors.primary[400] }}
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={storeStatus}
                                                        label="storeStatus"
                                                        onChange={handleStatusChange}
                                                    >
                                                        <MenuItem value={"normal"}>正常</MenuItem>
                                                        <MenuItem value={"disable"}>停用</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
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
                                                    disabled={true}
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
                                                    disabled={true}
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
                                            <Box display={"flex"} justifyContent={"space-between"} >
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

                                            <Box display={"flex"} justifyContent={"space-between"} >
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="負責人名稱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.principalName}
                                                    name="principalName"
                                                    error={!!touched.principalName && !!errors.principalName}
                                                    helperText={touched.principalName && errors.principalName}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="負責人密碼"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.principalPassword}
                                                    name="principalPassword"
                                                    error={!!touched.principalPassword && !!errors.principalPassword}
                                                    helperText={touched.principalPassword && errors.principalPassword}
                                                    sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                            </Box>
                                            <Box display={"flex"} justifyContent={"space-between"} >
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="負責人line"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.principalLineUrl}
                                                    name="principal_lineUrl"
                                                    error={!!touched.principalLineUrl && !!errors.principalLineUrl}
                                                    helperText={touched.principalLineUrl && errors.principalLineUrl}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="負責人信箱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.principalEmail}
                                                    name="principalEmail"
                                                    error={!!touched.principalEmail && !!errors.principalEmail}
                                                    helperText={touched.principalEmail && errors.principalEmail}
                                                    sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                            </Box>

                                        </Box>
                                        <Box display="flex" justifyContent="center" >
                                            <Button onClick={handleDelete} id={values.id} variant="contained" sx={{ minWidth: "8rem", padding: ".5rem", margin: ".5rem", borderRadius: "6px", border: "2px solid #ff2f00" }}>
                                                <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                                                    {deleteTitle}
                                                </Typography>
                                            </Button>
                                            <Button onClick={handleBan} id={values.id} variant="contained" sx={{ minWidth: "8rem", padding: ".5rem", margin: ".5rem", borderRadius: "6px", border: "2px solid #fff" }}>
                                                <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                                                    {blockTitle}
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
