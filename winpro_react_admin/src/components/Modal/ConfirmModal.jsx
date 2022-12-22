import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Input, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import { tokens } from "../../theme";
import * as yup from "yup";
import { useLazyQuery } from '@apollo/client'
import { BanBrand, BanStore } from "../../graphQL/Queries";



const checkoutSchema = yup.object().shape({
    reason: yup.string().required("required"),
});

export default function ConfirmModal({ props }) {
    //THEME
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [modal, setModal] = useState(false); //open or close modal
    const toggleModal = () => {
        setModal(!modal);
    };

    const expireAtRef = useRef('') //creating a refernce for TextField Component
    const reasonRef = useRef('') //creating a refernce for TextField Component

    // BAN BRAND
    const [ApolloBanBrand, { loading, error, data }] = useLazyQuery(BanBrand);
    useEffect(() => {
        if (data) {
            console.log(data);
            window.location.reload();
        }
        else {
            console.log("NO DATA")
        }
    }, [data]);

    // BAN STORE
    const [ApolloBanStore, { loading: loading1, error: error1, data: data1 }] = useLazyQuery(BanStore);
    useEffect(() => {
        if (data1) {
            console.log(data1);
            window.location.reload();
        }
        else {
            console.log("NO DATA")
        }
    }, [data1]);


    //date
    const [date, setDate] = useState('');
    const [unixTime, setUnixTime] = useState('');
    useEffect(() => {
        const dateObject = new Date(date);
        const unix = dateObject.getTime();
        setUnixTime(unix);
    }, [date]);

    function handleDateChange(event) {
        setDate(event.target.value);
    }

    const handleBan = () => {
        const targetId = props.id;
        const unixSecond = unixTime / 1000;

        console.log("SEND BAN API REQUEST");
        console.log("TARGET ID: " + targetId);
        console.log("TARGET ID: " + props.type);

        console.log(unixSecond);
        console.log(reasonRef.current.value);
        switch (props.type) {
            case "brand":
                ApolloBanBrand({
                    variables: {
                        args: [
                            {
                                id: targetId
                            }
                        ],
                        expireAt: parseInt(unixSecond),
                        reason: reasonRef.current.value
                    }
                })
            case "store":
                ApolloBanStore({
                    variables: {
                        args: [
                            {
                                id: targetId
                            }
                        ],
                        expireAt: parseInt(unixSecond),
                        reason: reasonRef.current.value
                    }
                })
        }

    };


    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <Button onClick={toggleModal} className="btn-modal" sx={{ color: colors.primary[100], border: "1px solid #111", borderColor: colors.blueAccent[100] }}>封鎖</Button>


            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <Box m="20px">

                            {/* <TextField type="date" value={date} onChange={handleDateChange} /> */}
                            {/* <Button onClick={handleGetUnix}>Get Unix time</Button> */}
                            {unixTime && <div>Unix time: {unixTime}</div>}
                            <Box color={"black"}>
                                <TextField className="modal_input_textfield"
                                    fullWidth
                                    variant="filled"
                                    label="Expire At"
                                    // inputRef={expireAtRef}
                                    type="date" value={date} onChange={handleDateChange}
                                    sx={{ marginBottom: "1rem", mr: '1rem', backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                                />
                                <TextField className="modal_input_textfield"
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="封鎖原因"
                                    inputRef={reasonRef}
                                    sx={{ marginBottom: "1rem", mr: '1rem', backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                                />

                            </Box>
                            <Button onClick={handleBan} color="success" variant="contained" sx={{ minWidth: "8rem", padding: ".55rem 1rem", margin: ".5rem .5rem 0 .5rem", borderRadius: "8px", background: colors.blueAccent[400] }}>
                                <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                                    確認
                                </Typography>
                            </Button>


                        </Box>
                    </div>
                </div>
            )}
        </>
    )
}