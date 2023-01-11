import React, { useState, useEffect, useRef } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useMutation, useQuery } from '@apollo/client'
import { Formik } from "formik";
import * as yup from "yup";
import "../../components/Modal/modal.css";
import { tokens } from "../../theme";
import { CreateBrand, UpdateCurrentVersion } from "../../graphQL/Mutations";
import { defaultCoverURL, defaultLogoURL } from "../../data/strings";
// ICONS
import InputBase from "@mui/material/InputBase";
import { GetCurrentVersion } from "../../graphQL/Queries";


const checkoutSchema = yup.object().shape({
    android: yup.string().required("請輸入版本號"),
    ios: yup.string().required("請輸入版本號"),
});


const VersionManagement = () => {

    //THEME
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    const [initialValues, setInitialValues] = useState({
        server: "",
        android: "",
        ios: "",
    });

    const { data } = useQuery(GetCurrentVersion, {
        variables: {
            clientName: "gamePay"
        }
    })
    useEffect(() => {
        if (data) {
            setInitialValues({
                server: data.getCurrentVersion.server,
                android: data.getCurrentVersion.android,
                ios: data.getCurrentVersion.ios,
            });
        }
    }, [data]);

    const [ApolloUpdateVersion, { loading: versionLoading, error: versionError, data: versionData }] = useMutation(UpdateCurrentVersion);
    useEffect(() => {
        if (versionData) {
            window.location.reload();
        }
    }, [versionData]);




    const handleFormSubmit = (values) => {
        const variables = {
            clientName: "gamePay",
        };
        if (values.android) {
            variables.android = values.android;
        }
        if (values.ios) {
            variables.ios = values.ios;
        }

        console.log(variables);
        ApolloUpdateVersion({ variables });
    }

    return (
        <Box p={2}>
            <h1 className='userManagement_title'>版本管控</h1>
            <Typography variant="h3" sx={{ mb: "10px", fontSize: "1.2rem", fontWeight: "500", color: "white" }}>
                伺服器版本 - {initialValues.server}
            </Typography>
            <Box m="5rem 2rem">
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
                                <Typography variant="h3" sx={{ mb: "10px", fontSize: "1.5rem", fontWeight: "600", color: "white", textAlign: "center" }}>
                                    Android - {initialValues.android}
                                </Typography>
                                <Box display={"flex"} justifyContent={"center"}>
                                    <TextField
                                        className="modal_input_textfield"
                                        id="outlined-basic"
                                        variant="filled"
                                        type="text"
                                        label="輸入新 Android 版本"
                                        placeholder={values.android}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.android}
                                        name="android"
                                        error={!!touched.android && !!errors.android}
                                        helperText={touched.android && errors.android}
                                        sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                    /></Box>

                                <Typography variant="h3" sx={{ mb: "10px", fontSize: "1.5rem", fontWeight: "600", color: "white", textAlign: "center" }}>
                                    IOS - {initialValues.ios}
                                </Typography>
                                <Box display={"flex"} justifyContent={"center"}>
                                    <TextField
                                        className="modal_input_textfield"
                                        id="outlined-basic"
                                        variant="filled"
                                        type="text"
                                        label="輸入新 IOS 版本"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.ios}
                                        name="ios"
                                        error={!!touched.ios && !!errors.ios}
                                        helperText={touched.ios && errors.ios}
                                        sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                    />
                                </Box>

                            </Box>
                            <Box display="flex" justifyContent="center" marginTop={"3rem"} >
                                <button className="my-button" type="submit">更新</button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box >

        </Box>

    )
}

export default VersionManagement







