import React, { useState, useEffect, useRef } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import "../../components/Modal/modal.css";
import { tokens } from "../../theme";
import { useLazyQuery } from "@apollo/client";
import { CreateBillboard } from "../../graphQL/Queries";
import { defaultCoverURL } from "../../data/strings";

const checkoutSchema = yup.object().shape({
    // storeId: yup.string().required("店面id必填"),
    title: yup.string().required("必填"),
    content: yup.string().required("必填"),
    description: yup.string().required("必填"),
});


export default function CreateBillboardModal({ props }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [modal, setModal] = useState(false);
    const [startAtDate, setStartAtDate] = useState('');
    const [endAtDate, setEndAtDate] = useState('');

    function handleStartAtDateChange(event) {
        setStartAtDate(event.target.value);
    }

    function handleEndAtDateChange(event) {
        setEndAtDate(event.target.value);
    }

    var btnTitle = "新增告示牌", confirmTitle = "新增", cancelTitle = "取消";

    const initialValues = {
        title: "",
        content: "",
        image: defaultCoverURL,
        description: "",
    };

    // GQL
    const [ApolloCreateBillboard, { loading, error, data }] = useLazyQuery(CreateBillboard);
    useEffect(() => {
        if (data) {
            console.log(data.getBrand);
            window.location.reload();
        }
        else {
            console.log("NO DATA")
        }
    }, [data]);


    const [selectedCoverImage, setSelectedCoverImage] = useState(null);

    const coverFileInput = useRef(null);
    const handleCoverImgClick = () => {
        coverFileInput.current.click();
    };
    const handleCoverChange = (event) => {
        const file = event.target.files[0];
        // setSelectedCoverFile(file);
        setSelectedCoverImage(URL.createObjectURL(file));
        if (event.target.files.length > 0) {
            // a file was selected, proceed with the upload
            console.log("file selected");
        } else {
            // no file was selected, do nothing
            console.log("no file selected");
        }
    };

    const handleFormSubmit = (values) => {
        console.log("FORM SUBMIT");
        console.log(values);

        const startAtDateObj = new Date(startAtDate);
        const endAtDateObj = new Date(endAtDate);

        const startAtUnix = startAtDateObj.getTime() / 1000;
        const endAtUnix = endAtDateObj.getTime() / 1000;

        ApolloCreateBillboard({
            variables: {
                args: [
                    {
                        id: props.id
                    }
                ],
                title: values.title,
                content: values.content,
                image: values.image,
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
                                            {/* IMAGE */}
                                            <Box padding={".5rem 1rem 1rem 1rem"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                                                <Box className="hover-image-container" width={"70%"}>
                                                    <img
                                                        alt="brand_cover"
                                                        width="100%"
                                                        src={selectedCoverImage || values.image}
                                                        style={{
                                                            cursor: "pointer", borderRadius: "12px"
                                                        }}
                                                        onClick={handleCoverImgClick}
                                                    />

                                                    <Box className="img_overlay cover_overlay">
                                                        <Box className="hover-text">Upload image</Box>
                                                    </Box>
                                                </Box>

                                                <input
                                                    type="file"
                                                    ref={coverFileInput}
                                                    style={{ display: 'none' }}
                                                    onChange={handleCoverChange}
                                                />
                                            </Box>

                                            <TextField className="modal_input_textfield"
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="標題"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.title}
                                                name="title"
                                                error={!!touched.title && !!errors.title}
                                                helperText={touched.title && errors.title}
                                                sx={{ margin: "0 1rem 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                                            />
                                            <TextField className="modal_input_textfield"
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="內容"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.content}
                                                name="content"
                                                error={!!touched.content && !!errors.content}
                                                helperText={touched.content && errors.content}
                                                sx={{ margin: "0 0 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
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
                                                sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                            />
                                            <TextField
                                                fullWidth
                                                id="datetime-local"
                                                label="開始時間"
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
                                                label="結束時間"
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

                                            <Button type="submit" color="success" variant="contained" sx={{ minWidth: "8rem", padding: ".55rem 1rem", margin: ".5rem .5rem 0 .5rem", borderRadius: "8px", background: colors.blueAccent[400] }}>
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
