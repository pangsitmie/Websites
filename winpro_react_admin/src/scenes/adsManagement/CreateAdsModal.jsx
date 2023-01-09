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
import CoverUpload from "../../components/Upload/CoverUpload";
import { defaultCoverURL } from "../../data/strings";


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
        image: defaultCoverURL,
        url: "",
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


    // IMAGE UPLOAD
    const [imageFileName, setImageFileName] = useState('');
    const handleUploadImageSucess = (name) => {
        setImageFileName(name);
    };

    const handleFormSubmit = (values) => {
        const startAtDateObj = new Date(startAtDate);
        const endAtDateObj = new Date(endAtDate);

        const startAtUnix = startAtDateObj.getTime() / 1000;
        const endAtUnix = endAtDateObj.getTime() / 1000;

        const variables = {
            typeId: typeId,
            url: values.url,
            description: values.description,
            startAt: startAtUnix,
            endAt: endAtUnix,
        }
        if (imageFileName) {
            variables.image = imageFileName;
        }

        console.log(variables);
        ApolloCreateAds({ variables });


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
                                        <Box >
                                            <Box display={"flex"} m={"1rem 0"}>
                                                <Box width={"35%"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                                                    <Typography variant="h2" sx={{ textAlign: "left", fontSize: "1.8rem", fontWeight: "600", color: "white", lineHeight: "1.5" }}>
                                                        新增<br /> 廣告
                                                    </Typography>
                                                </Box>
                                                <Box width={"65%"}>
                                                    {/* UPLOAD COVER COMPONENET */}
                                                    <CoverUpload handleSuccess={handleUploadImageSucess} imagePlaceHolder={values.image} type={typeId} />
                                                </Box>
                                            </Box>



                                            <Box display={"flex"} justifyContent={"space-between"}>

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
                                                    sx={{ margin: "0 1rem  1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px" }}
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
                                            <button className="my-button" type="submit">{confirmTitle}</button>
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
