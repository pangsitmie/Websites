import React, { useEffect, useState, useContext } from 'react'
import { useQuery, useMutation, useLazyQuery, ApolloClient, ApolloCache } from '@apollo/client'
import { useNavigate } from 'react-router-dom';

import "./login.css";
import LOGIN_BG from "../../assets/login_bg.png"
// import LOGO from "../../assets/logo512.png";

import { ManagerLogin } from '../../graphQL/Mutations'
import { GetManagerAccessToken } from '../../graphQL/Queries'
import Map from '../../components/Maps'
// THEME
import { ColorModeContext, tokens } from "../../theme";
import { Box, Button, FilledInput, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import * as yup from "yup";
import { Formik } from "formik";
import { Visibility, VisibilityOff } from '@mui/icons-material';

const checkoutSchema = yup.object().shape({
    account: yup.string().required("required"),
    password: yup.string().required("required").nullable(),
});


const Login = () => {
    //========================== THEME ==========================
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    //========================== INITIAL VALUES ==========================
    const initialValues = {
        account: "",
        password: ""
    }

    // ========================== STATES AND HANDLERS ==========================
    let navigate = useNavigate();

    //  ========================== PASSWORD VISIBILITY ==========================
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [isLoggedIn, setIsLogin] = useState(false);
    const [accessToken, setAccessToken] = useState('');


    //========================== GRAPHQL ==========================
    //LOGIN
    const [apolloManagerLogin, { loading, error, data }] = useMutation(ManagerLogin);
    useEffect(() => {
        if (data) {
            console.log("LOGIN TOKEN: " + data.managerLogin);
            localStorage.setItem('login_token', data.managerLogin);
            setIsLogin(true);
            apolloGetManagerAccessToken({
                variables: {
                    refreshToken: "Bearer " + data.managerLogin
                }
            });
        }
    }, [data]);

    //GET ACCESS TOKEN
    const [apolloGetManagerAccessToken, { loading: loading1, error: error1, data: data1 }] = useLazyQuery(GetManagerAccessToken);
    useEffect(() => {
        if (data1) {
            console.log("ACCESS TOKEN: " + data1.getManagerAccessToken);
            setAccessToken(data1.getManagerAccessToken);
            localStorage.setItem('token', data1.getManagerAccessToken);
            navigate("/");
        }
        else {
            console.log("NO ACCESS TOKEN")
        }
    }, [data1]);


    //========================== FUNCTIONS ==========================
    const handleFormSubmit = (values) => {
        console.log(values);
        apolloManagerLogin({
            variables: {
                account: values.account,
                password: values.password
            }
        })
    }


    // ========================== RETURN ==========================
    return (
        <Box className='login_page' backgroundColor={colors.primary[400]} >
            <Box p="6rem 2.5rem" className='login_container'>
                <Typography variant="h1" sx={{ mb: "30px", textAlign: "center", fontWeight: "600", color: "white" }}>
                    Game Pay
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
                            <Box >
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Account"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.account}
                                    name="account"
                                    error={!!touched.account && !!errors.account}
                                    helperText={touched.account && errors.account}
                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                />

                                {/* PASSWORD INPUT */}
                                <FormControl fullWidth variant="filled" sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }} >
                                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                                    <FilledInput
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.password}
                                        name="password"
                                        error={!!touched.password && !!errors.password}
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                    <FormHelperText error={!!touched.password && !!errors.password}>
                                        {touched.password && errors.password}
                                    </FormHelperText>
                                </FormControl>
                            </Box>
                            <Box display="flex" justifyContent="center" paddingTop={"2rem"}>
                                <button className="my-button" type="submit" >Login</button>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Box >
        </Box>
    )
};

export default Login