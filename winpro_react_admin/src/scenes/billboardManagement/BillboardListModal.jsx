import React, { useState, useEffect, useRef } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
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
import { defaultCoverURL } from "../../data/strings";


const checkoutSchema = yup.object().shape({
    // storeId: yup.string().required("店面id必填"),
    title: yup.string().required("必填"),
    content: yup.string().required("必填"),
    description: yup.string().required("必填"),
});


export default function BillboardListModal({ props }) {
    //========================== THEME ==========================
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    //========================== INITIAL VALUES ==========================
    const [initialValues, setInitialValues] = useState({
        title: "",
        content: "",
        description: "",
        image: "",
        status: "",
    });

    //========================== INITIAL VALUES ==========================
    var btnTitle = "修改", confirmTitle = "更新", deleteTitle = "移除", banTitle = "封鎖", unbanTitle = "解封";

    const [modal, setModal] = useState(false);

    const [status, setStatus] = useState('disable');
    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const [startAtDate, setStartAtDate] = useState('');
    function handleStartAtDateChange(event) {
        setStartAtDate(event.target.value);
    }

    const [endAtDate, setEndAtDate] = useState('');
    function handleEndAtDateChange(event) {
        setEndAtDate(event.target.value);
    }

    //========================== GRAPHQL ==========================
    const [ApolloRemoveBillboard, { loading, error, data }] = useLazyQuery(RemoveBillboard);
    useEffect(() => {
        if (data) {
            window.location.reload();
        }
        else {
            console.log("NO DATA")
        }
    }, [data]);

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
            const nonNullData = replaceNullWithEmptyString(data3.getBillboard[0]);

            console.log(nonNullData.startAt);
            console.log(nonNullData.endAt);
            setInitialValues({
                title: nonNullData.title,
                content: nonNullData.content,
                description: nonNullData.description,
                image: nonNullData.image.length < 10 ? defaultCoverURL : "https://file-test.cloudprogrammingonline.com/files/" + nonNullData.image + "?serverId=1&fileType=IMAGE",
                status: nonNullData.status.name,
            });

            const startAtDateTimeLocal = unixTimestampToDatetimeLocal(nonNullData.startAt);
            const endAtDateTimeLocal = unixTimestampToDatetimeLocal(nonNullData.endAt);
            setStartAtDate(startAtDateTimeLocal);
            setEndAtDate(endAtDateTimeLocal);

            //set status only if not banned
            if (nonNullData.status.name !== "banned") {
                setStatus(nonNullData.status.name)
            }

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
                statusId: status
            }
        });
    };

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
                                            <Typography variant="h2" sx={{ textAlign: "center", fontSize: "1.4rem", fontWeight: "600", color: "white" }}>
                                                {btnTitle}
                                            </Typography>

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


                                            <Box display="flex" justifyContent="center" >
                                                <TextField
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
