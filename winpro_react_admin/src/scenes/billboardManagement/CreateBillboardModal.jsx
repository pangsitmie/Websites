import React, { useState, useEffect, useRef } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import "../../components/Modal/modal.css";
import { tokens } from "../../theme";
import { useLazyQuery } from "@apollo/client";
import { CreateBillboard } from "../../graphQL/Queries";
import { defaultCoverURL, defaultLogoURL } from "../../data/strings";
import CoverUpload from "../../components/Upload/CoverUpload";
import LogoUpload from "../../components/Upload/LogoUpload";

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
        image: defaultLogoURL,
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


    // IMAGE UPLOAD
    const [imageFileName, setImageFileName] = useState('');
    const handleUploadImageSucess = (name) => {
        setImageFileName(name);
    };

    const handleFormSubmit = (values) => {
        console.log("FORM SUBMIT");
        console.log(values);

        const startAtDateObj = new Date(startAtDate);
        const endAtDateObj = new Date(endAtDate);

        const startAtUnix = startAtDateObj.getTime() / 1000;
        const endAtUnix = endAtDateObj.getTime() / 1000;

        const variables = {
            args: [
                {
                    id: props.id
                }
            ],
            title: values.title,
            content: values.content,
            description: values.description,
            startAt: startAtUnix,
            endAt: endAtUnix,
        }
        if (imageFileName) {
            variables.image = imageFileName;
        }

        ApolloCreateBillboard({ variables });
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
                                        <Box color={"black"}>
                                            {/* IMAGE */}

                                            <Box display={"flex"} m={"1rem 0"}>
                                                <Box width={"35%"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                                                    <Typography variant="h2" sx={{ textAlign: "left", fontSize: "2rem", fontWeight: "600", color: "white", lineHeight: "1.5" }}>
                                                        新增
                                                        <br />
                                                        告示牌
                                                    </Typography>
                                                </Box>
                                                <Box width={"65%"} display={"flex"} justifyContent={"flex-end"} >
                                                    {/* UPLOAD COVER COMPONENET */}
                                                    <LogoUpload handleSuccess={handleUploadImageSucess} imagePlaceHolder={values.image} type={"billboard"} />
                                                </Box>
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
