import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { useMutation } from '@apollo/client'
import { Formik } from "formik";
import * as yup from "yup";
import "../../components/Modal/modal.css";
import IMG from "../../assets/user.png";
import { tokens } from "../../theme";
import { CreateAdvertisement } from "../../graphQL/Mutations";
import { format } from 'date-fns';
import { replaceNullWithEmptyString } from "../../utils/Utils";
import ConfirmModal from "../../components/Modal/ConfirmModal";


const checkoutSchema = yup.object().shape({
    image: yup.string().required("required"),
    url: yup.string().required("required"),
    description: yup.string().required("required"),
    // startAtDate: yup.string().required("required"),
    // endAtDate: yup.string().required("required"),
});



export default function CreateAdsModal({ props }) {
    //========================== THEME ==========================
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    var btnTitle = "新增", confirmTitle = "新增", deleteTitle = "移除", banTitle = "封鎖", unbanTitle = "解封";
    const [modal, setModal] = useState(false); //open or close modal


    // ========================== STATES AND HANDLERS ==========================
    const [typeId, setTypeId] = useState('banner');
    const handleTypeIdChange = (event) => {
        setTypeId(event.target.value);
    };

    const [startAtDate, setStartAtDate] = useState('');
    function handleStartAtDateChange(event) {
        setStartAtDate(event.target.value);
    }

    const [endAtDate, setEndAtDate] = useState('');
    function handleEndAtDateChange(event) {
        setEndAtDate(event.target.value);
    }

    const [initialValues, setInitialValues] = useState({
        image: "",
        url: "https://img.icons8.com/fluency/48/null/test-account.png",
        description: "",
        startAtDate: "",
        endAtDate: "",
        status: "",
        type: "",
    });






    //========================== GRAPHQL ==========================
    const [ApolloCreateAds, { loading, error, data }] = useMutation(CreateAdvertisement);
    useEffect(() => {
        if (data) {
            console.log(data);
            window.location.reload();
        }
        else {
            console.log(error)
        }
    }, [data]);

    const handleFormSubmit = (values) => {
        const startAtDateObj = new Date(startAtDate);
        const endAtDateObj = new Date(endAtDate);

        const startAtUnix = startAtDateObj.getTime() / 1000;
        const endAtUnix = endAtDateObj.getTime() / 1000;

        ApolloCreateAds({
            variables: {
                image: values.image,
                typeId: typeId,
                url: values.url,
                description: values.description,
                startAt: startAtUnix,
                endAt: endAtUnix,
            }
        });
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
                            <Typography variant="h2" sx={{ mb: "2rem", textAlign: "center", fontSize: "1.4rem", fontWeight: "600", color: "white" }}>
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
                                                    src="https://img.icons8.com/fluency/48/null/test-account.png"
                                                    onClick={() => {
                                                        // FIXME: UPLOAD IMAGE
                                                    }}
                                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                                />
                                            </Box>
                                            <Box textAlign="center" display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                                {(() => {
                                                    if (initialValues.status === "disable") {
                                                        return (
                                                            <Typography variant="h5" color={colors.primary[100]} sx={{ margin: ".5rem .5rem" }}>
                                                                停用
                                                            </Typography>)
                                                    }
                                                    if (initialValues.status === "banned") {
                                                        return (
                                                            <Typography variant="h5" color={colors.redAccent[500]} sx={{ margin: ".5rem .5rem" }}>
                                                                封鎖
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

                                            <Box display={"flex"} justifyContent={"space-between"}>
                                                <TextField className="modal_input_textfield"
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="圖片名稱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.image}
                                                    name="image"
                                                    error={!!touched.image && !!errors.image}
                                                    helperText={touched.image && errors.image}
                                                    sx={{ marginBottom: "1rem", mr: '1rem', backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                                                />
                                                <FormControl sx={{ minWidth: 150 }} >
                                                    <InputLabel id="demo-simple-select-label" >{initialValues.status}</InputLabel>
                                                    <Select
                                                        disabled={initialValues.status === "banned"}
                                                        sx={{ borderRadius: "10px", background: colors.primary[400] }}
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={typeId}
                                                        label="typeId"
                                                        onChange={handleTypeIdChange}
                                                    >
                                                        <MenuItem value={"banner"}>banner</MenuItem>
                                                        <MenuItem value={"placement"}>placement</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>

                                            <TextField
                                                id="outlined-multiline-flexible"
                                                multiline
                                                fullWidth
                                                maxRows={4}
                                                variant="filled"
                                                type="text"
                                                label="URL"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.url}
                                                name="url"
                                                error={!!touched.url && !!errors.url}
                                                helperText={touched.url && errors.url}
                                                sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                            />

                                            <TextField
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="描述"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.description}
                                                name="description"
                                                error={!!touched.description && !!errors.description}
                                                helperText={touched.description && errors.description}
                                                sx={{ marginBottom: "1rem", marginRight: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                            />
                                            <TextField
                                                fullWidth
                                                id="datetime-local"
                                                label="開始時間點"
                                                type="datetime-local"
                                                // defaultValue="2017-05-24T10:30"
                                                value={startAtDate}
                                                onChange={handleStartAtDateChange}
                                                sx={{ marginBottom: "1rem" }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />
                                            <TextField
                                                fullWidth
                                                id="datetime-local"
                                                label="過期時間"
                                                type="datetime-local"
                                                // defaultValue="2017-05-24T10:30"
                                                value={endAtDate}
                                                onChange={handleEndAtDateChange}
                                                sx={{ marginBottom: "1rem" }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                            />

                                        </Box>
                                        <Box display="flex" justifyContent="center" >
                                            <Box display="flex" justifyContent="center" >


                                                <Button type="submit" color="success" variant="contained" sx={{ minWidth: "100px", padding: ".5rem 1.5rem", margin: "0 1rem", borderRadius: "10px", background: colors.grey[100] }}>
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
    );
}
