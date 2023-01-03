import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { useLazyQuery, useQuery } from '@apollo/client'
import { Formik } from "formik";
import * as yup from "yup";
import "../../components/Modal/modal.css";
import IMG from "../../assets/user.png";
import { tokens } from "../../theme";
import { GetAds, RemoveAds, UnbanAds, UpdateAds } from "../../graphQL/Queries";
import { format } from 'date-fns';
import { replaceNullWithEmptyString } from "../../utils/Utils";
import ConfirmModal from "../../components/Modal/ConfirmModal";


const checkoutSchema = yup.object().shape({
    image: yup.string().required("required"),
    url: yup.string().required("required"),
    description: yup.string().required("required"),
    startAtDate: yup.string().required("required"),
    endAtDate: yup.string().required("required"),
    status: yup.string().required("required"),
    type: yup.string().required("required"),
});



export default function AdsListModal({ props }) {
    //========================== THEME ==========================
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    var btnTitle = "修改", confirmTitle = "更新", deleteTitle = "移除", banTitle = "封鎖", unbanTitle = "解封";
    const [modal, setModal] = useState(false); //open or close modal


    // ========================== STATES AND HANDLERS ==========================
    const [status, setStatus] = useState('disable');
    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

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
    const { loading, error, data } = useQuery(GetAds
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
        if (data) {
            const nonNullData = replaceNullWithEmptyString(data.getAdvertisement[0]);
            const expireAtDate = nonNullData.endAt === null ? "無" : format(new Date(nonNullData.endAt * 1000), 'MM/dd/yyyy - HH:mm:ss');

            console.log(expireAtDate);
            setInitialValues({
                image: nonNullData.image,
                url: nonNullData.url,
                description: nonNullData.description,
                startAtDate: format(new Date(nonNullData.startAt), 'MM/dd/yyyy - HH:mm:ss'),
                endAtDate: expireAtDate,
                status: nonNullData.status.name,
                type: nonNullData.type.name,
            });
        }
    }, [data]);

    // REMOVE STORE MUTATION
    const [ApolloRemoveAds, { loading: loading1, error: error1, data: data1 }] = useLazyQuery(RemoveAds);
    useEffect(() => {
        if (data) {
            console.log("REMOVE SUCCESS");
            window.location.reload();
        }
    }, [data1]);

    const handleDelete = () => {
        var result = window.confirm("Are you sure you want to delete this advertisement?");
        if (result) {
            ApolloRemoveAds({
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


    // UNBAN MUTATION
    const [ApolloUnBanAds, { loading: loading2, error: error2, data: data2 }] = useLazyQuery(UnbanAds);
    useEffect(() => {
        if (data2) {
            window.location.reload();
        }
    }, [data2]);

    const handleUnBan = (e) => {
        var result = window.confirm("Are you sure you want to unban this Advertisement?");
        if (result) {
            ApolloUnBanAds({
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
    };


    // UNBAN MUTATION
    const [ApolloUpdateAds, { loading: loading3, error: error3, data: data3 }] = useLazyQuery(UpdateAds);
    useEffect(() => {
        if (data3) {
            window.location.reload();
        }
    }, [data3]);

    const handleFormSubmit = (values) => {
        console.log(values);
        ApolloUpdateAds({
            variables: {
                args: [
                    {
                        id: props.id,

                    }
                ],
                image: values.image,
                url: values.url,
                description: values.description,
                startAt: values.startAt,
                endAt: values.endAt,
                statusId: status,
                type: values.type,
            }
        })

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
                                                    disabled={true}
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
                                                        value={status}
                                                        label="status"
                                                        onChange={handleStatusChange}
                                                    >
                                                        <MenuItem value={"normal"}>正常</MenuItem>
                                                        <MenuItem value={"disable"}>停用</MenuItem>
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
                                                variant="filled"
                                                type="text"
                                                label="開始時間點"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.startAtDate}
                                                name="startAtDate"
                                                error={!!touched.startAtDate && !!errors.startAtDate}
                                                helperText={touched.startAtDate && errors.startAtDate}
                                                sx={{ marginBottom: "1rem", marginRight: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                            />
                                            <TextField
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="過期時間"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.endAtDate}
                                                name="endAtDate"
                                                error={!!touched.endAtDate && !!errors.endAtDate}
                                                helperText={touched.endAtDate && errors.endAtDate}
                                                sx={{ marginBottom: "1rem", marginRight: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                            />
                                        </Box>
                                        <Box display="flex" justifyContent="center" >
                                            <Box display="flex" justifyContent="center" >
                                                <Button onClick={handleDelete} variant="contained" sx={{ minWidth: "100px", padding: ".5rem 1.5rem", margin: "0 1rem", borderRadius: "10px", border: "2px solid #ff2f00" }}>
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
                                                    <ConfirmModal props={{ type: "ads", id: props.id }} />
                                                )}

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
