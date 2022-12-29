import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import "../../components/Modal/modal.css";
import IMG from "../../assets/user.png";
import { tokens } from "../../theme";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GetBillboard, RemoveBillboard, UnbanBillboard, UpdateBillboard } from "../../graphQL/Queries";
import { replaceNullWithEmptyString, unixTimestampToDatetimeLocal } from "../../utils/Utils";
import { format } from 'date-fns';
import ConfirmModal from "../../components/Modal/ConfirmModal";


const checkoutSchema = yup.object().shape({
    // storeId: yup.string().required("店面id必填"),
    title: yup.string().required("必填"),
    content: yup.string().required("必填"),
    description: yup.string().required("必填"),
});


export default function BillboardListModal({ props }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [modal, setModal] = useState(false);
    const [startAtDate, setStartAtDate] = useState('');
    const [endAtDate, setEndAtDate] = useState('');
    const [billboardStatus, setBillboardStatus] = useState('');



    function handleStartAtDateChange(event) {
        setStartAtDate(event.target.value);
    }

    function handleEndAtDateChange(event) {
        setEndAtDate(event.target.value);
    }
    const handleStatusChange = (event) => {
        setBillboardStatus(event.target.value);
    };

    var btnTitle = "修改", confirmTitle = "更新", deleteTitle = "移除", banTitle = "封鎖", unbanTitle = "解封";


    const [initialValues, setInitialValues] = useState({
        title: "",
        content: "",
        description: "",
        status: "",
    });

    // GQL

    const [ApolloRemoveBillboard, { loading, error, data }] = useLazyQuery(RemoveBillboard);
    useEffect(() => {
        if (data) {
            window.location.reload();
        }
        else {
            console.log("NO DATA")
        }
    }, [data]);

    //UPDATE BRAND MUTATION
    const [ApolloUpdateBillboard, { loading: loading2, error: error2, data: data2 }] = useLazyQuery(UpdateBillboard);
    useEffect(() => {
        if (data2) {
            window.location.reload();
            console.log("UPDATE SUCCESS")
        }
        else {
            console.log("No data update")
        }
    }, [data2]);

    // INITIAL VALUES FROM GET BILLBOARD
    const { loading: loading3, error: error3, data: data3 } = useQuery(GetBillboard
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
            const noNullData = replaceNullWithEmptyString(data3.getBillboard[0]);
            console.log(noNullData.startAt);
            console.log(noNullData.endAt);
            setInitialValues({
                title: noNullData.title,
                content: noNullData.content,
                description: noNullData.description,
                status: noNullData.status.name,
            });

            const startAtDateTimeLocal = unixTimestampToDatetimeLocal(noNullData.startAt);
            const endAtDateTimeLocal = unixTimestampToDatetimeLocal(noNullData.endAt);
            setStartAtDate(startAtDateTimeLocal);
            setEndAtDate(endAtDateTimeLocal);
            // setBillboardStatus(data3.getBrand[0].status.name)
        }
        else {
            console.log("NO DATA ROM GET BRAND")
        }
    }, [data3]);

    // UNBAN MUTATION
    const [ApolloUnBanBillboard, { loading: loading4, error: error4, data: data4 }] = useLazyQuery(UnbanBillboard);
    useEffect(() => {
        if (data4) {
            window.location.reload();
        }
    }, [data4]);

    const handleUnBan = (e) => {
        var result = window.confirm("Are you sure you want to unban this billboard?");
        if (result) {
            ApolloUnBanBillboard({
                variables: {
                    args: [
                        {
                            id: props.id
                        }
                    ],
                }
            })
            console.log("unbaned");
        } else {
            console.log("not deleted");
        }
    }

    const handleFormSubmit = (values) => {
        console.log("FORM SUBMIT");
        console.log(values);

        const startAtDateObj = new Date(startAtDate);
        const endAtDateObj = new Date(endAtDate);

        const startAtUnix = startAtDateObj.getTime() / 1000;
        const endAtUnix = endAtDateObj.getTime() / 1000;

        ApolloUpdateBillboard({
            variables: {
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
        });
    };

    const handleDelete = (e) => {
        var result = window.confirm("Are you sure you want to delete this billboard?");
        if (result) {
            ApolloRemoveBillboard({
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
                                            <Box display="flex" justifyContent="center" alignItems="center" m={"1rem"}>
                                                <img
                                                    alt="profile-user"
                                                    width="100px"
                                                    height="100px"
                                                    src={IMG}
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
                                                <ConfirmModal props={{ type: "billboard", id: props.id }} />
                                            )}

                                            <Button type="submit" color="success" sx={{ minWidth: "100px", padding: ".5rem 1.5rem", margin: "0 1rem", borderRadius: "10px", background: colors.grey[100] }}>
                                                <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: colors.grey[700] }}>
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
