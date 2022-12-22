import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import ".././modal.css";
import { tokens } from "../../../theme";
import { format } from 'date-fns';
import { useQuery, useLazyQuery } from "@apollo/client";
import { GetStore, UpdateStore, RemoveStore } from "../../../graphQL/Queries";
import PlacesAutocomplete, {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';
import ConfirmModal from "../ConfirmModal";

const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    name: yup.string().required("required"),
    status: yup.string().required("required"),
    intro: yup.string().required("required").nullable(),
    brandId: yup.string().required("required"),
    brandName: yup.string().required("required"),
    // location_address: yup.string().required("required"),
    principalName: yup.string().required("required"),
    // principalPassword: yup.string().required("required"),
    principalLineUrl: yup.string().required("required"),
    principalEmail: yup.string().required("required").nullable(),
});


export default function StoreListModal({ props }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [modal, setModal] = useState(false);
    const [{ address, city, district, coordinates }, setLocation] = useState({
        address: props.location.address,
        city: props.location.city,
        district: props.location.district,
        coordinates: {
            lat: 0,
            lng: 120,
        }
    });



    const [storeStatus, setStorestatus] = React.useState(props.status.name);
    const handleStatusChange = (event) => {
        setStorestatus(event.target.value);
    };
    const [inputAddress, setInputAddress] = useState("");
    var btnTitle = "修改", confirmTitle = "更新", deleteTitle = "移除", blockTitle = "封鎖";

    const [initialValues, setInitialValues] = useState({
        id: -1,
        brandId: -1,
        brandName: "",
        name: "",
        intro: "",
        cover: "https://img.icons8.com/fluency/48/null/test-account.png",
        logo: "https://img.icons8.com/fluency/48/null/test-account.png",
        //locations get from location state
        status: "",

        city: "",
        district: "",
        address: "",
        principalName: "",
        principalAccount: "",
        principalPassword: "",
        principalLineUrl: "https://lin.ee/",
        principalEmail: "",
    });





    // =================================================================================
    // REMOVE STORE MUTATION
    const [ApolloRemoveStore, { loading, error, data }] = useLazyQuery(RemoveStore);
    useEffect(() => {
        if (data) {
            console.log("REMOVE SUCCESS");
            window.location.reload();
        }
        else {
            console.log("NO REMOVE STORE DATA")
        }
    }, [data]);


    //UPDATE STORE MUTATION
    const [ApolloUpdateStore, { loading: loading2, error: error2, data: data2 }] = useLazyQuery(UpdateStore);
    useEffect(() => {
        if (data2) {
            window.location.reload();
            console.log("UPDATE SUCCESS")
        }
        else {
            console.log("NO UPDATE STORE DATA")
        }
    }, [data2]);

    // INITIAL VALUES FROM GET STORE QUERY
    const { loading: loading3, error: error3, data: data3 } = useQuery(GetStore
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
            // SET THE initial value using data3
            setInitialValues({
                id: props.id,
                status: props.status.name,
                name: data3.getStore[0].name,
                intro: data3.getStore[0].intro,
                cover: "https://img.icons8.com/fluency/48/null/test-account.png",
                brandId: data3.getStore[0].brand.id,
                brandName: data3.getStore[0].brand.name,
                city: data3.getStore[0].location.city,
                district: data3.getStore[0].location.district,
                address: data3.getStore[0].location.address,
                principalName: data3.getStore[0].principal.name,
                principalAccount: data3.getStore[0].principal.account,
                principalPassword: data3.getStore[0].principal.password,
                principalLineUrl: data3.getStore[0].principal.lineUrl,
                principalEmail: data3.getStore[0].principal.email,
            });
        }
        else {
            console.log("NO GET STORE DETAILS DATA")
        }
    }, [data3]);

    const handleFormSubmit = (values) => {
        if (values.principalPassword === "") { //if password is empty, do not update password
            ApolloUpdateStore({
                variables: {
                    args: [
                        {
                            id: values.id
                        }
                    ],
                    name: values.name,
                    intro: values.intro,
                    location: {
                        city: city,
                        district: district,
                        address: address,
                        coordinate: {
                            latitude: coordinates.lat,
                            longitude: coordinates.lng
                        },
                        description: "some desc"
                    },
                    principal: {
                        name: values.principalName,
                        lineUrl: values.principalLineUrl,
                        email: values.principalEmail,
                    },
                    statusId: storeStatus
                }
            });
        }
        else {
            ApolloUpdateStore({
                variables: {
                    args: [
                        {
                            id: values.id
                        }
                    ],
                    name: values.name,
                    intro: values.intro,
                    location: {
                        city: city,
                        district: district,
                        address: address,
                        coordinate: {
                            latitude: coordinates.lat,
                            longitude: coordinates.lng
                        },
                        description: "some desc"
                    },
                    principal: {
                        name: values.principalName,
                        password: values.principalPassword,
                        lineUrl: values.principalLineUrl,
                        email: values.principalEmail,
                    },
                    statusId: storeStatus
                }
            });
        }
    };

    const handleLocationSelect = async value => {
        const results = await geocodeByAddress(value);
        const formattedAddress = results[0].address_components[0].long_name + results[0].address_components[1].long_name;
        const latLng = await getLatLng(results[0]);
        const city = results[0].address_components[4].long_name;
        const district = results[0].address_components[3].long_name;

        setInputAddress(value);
        setLocation({
            address: formattedAddress,
            city: city,
            district: district,
            coordinates: latLng
        });
    };

    const handleDelete = () => {
        var result = window.confirm("Are you sure you want to delete this store?");
        if (result) {
            ApolloRemoveStore({
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
                            <Typography variant="h2" sx={{ mb: "10px", textAlign: "center", fontSize: "1.4rem", fontWeight: "600", color: "white" }}>
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
                                                    src={initialValues.cover}
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
                                                    label="暱稱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.name}
                                                    name="name"
                                                    error={!!touched.name && !!errors.name}
                                                    helperText={touched.name && errors.name}
                                                    sx={{ margin: "0 1rem 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                                                />
                                                <FormControl sx={{ minWidth: 150 }} >
                                                    <InputLabel id="demo-simple-select-label" >{initialValues.status}</InputLabel>
                                                    <Select
                                                        sx={{ borderRadius: "10px", background: colors.primary[400] }}
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={storeStatus}
                                                        label="storeStatus"
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
                                                label="Intro"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.intro}
                                                name="intro"
                                                error={!!touched.intro && !!errors.intro}
                                                helperText={touched.intro && errors.intro}
                                                sx={{ margin: "0 1rem 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                                            />
                                            <Box display={"flex"}>
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    disabled={true}
                                                    type="text"
                                                    label="品牌id"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.brandId}
                                                    name="brandId"
                                                    error={!!touched.brandId && !!errors.brandId}
                                                    helperText={touched.brandId && errors.brandId}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />

                                                <TextField
                                                    fullWidth
                                                    disabled={true}
                                                    variant="filled"
                                                    type="text"
                                                    label="品牌名稱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.brandName}
                                                    name="brandName"
                                                    error={!!touched.brandName && !!errors.brandName}
                                                    helperText={touched.brandName && errors.brandName}
                                                    sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                            </Box>

                                            <PlacesAutocomplete
                                                className="places_autocomplete"
                                                value={inputAddress}
                                                onChange={setInputAddress}
                                                onSelect={handleLocationSelect}
                                            >
                                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                                    <div>
                                                        <TextField
                                                            className="modal_input_textfield"
                                                            fullWidth
                                                            label="搜索店面地點 ..."
                                                            variant="filled"
                                                            type="text"
                                                            sx={{ margin: "1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                                                            {...getInputProps({
                                                                placeholder: '搜索店面地點 ...',
                                                                className: 'location-search-input',
                                                            })}
                                                        />
                                                        <div className="autocomplete-dropdown-container">
                                                            {loading && <div>Loading...</div>}
                                                            {suggestions.map(suggestion => {
                                                                const className = suggestion.active
                                                                    ? 'suggestion-item--active'
                                                                    : 'suggestion-item';
                                                                // inline style for demonstration purpose
                                                                const style = suggestion.active
                                                                    ? { backgroundColor: colors.primary[500], color: colors.grey[300], cursor: 'pointer', borderRadius: '5px', fontSize: '1rem', padding: '0.5rem', margin: "0.5rem" } //color when hover
                                                                    : { backgroundColor: colors.primary[400], color: colors.grey[300], cursor: 'pointer', borderRadius: '5px', fontSize: '1rem', padding: '0.5rem', margin: "0.5rem" }; //background color
                                                                return (
                                                                    <div
                                                                        {...getSuggestionItemProps(suggestion, {
                                                                            className,
                                                                            style,
                                                                        })}
                                                                    >
                                                                        <span>{suggestion.description}</span>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                )}
                                            </PlacesAutocomplete>

                                            {/* STORE ADDRESS */}
                                            <Box display={"flex"}>
                                                <TextField
                                                    fullWidth
                                                    disabled={true}
                                                    variant="filled"
                                                    type="text"
                                                    label="店面縣市"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={city}
                                                    name="city"
                                                    error={!!touched.city && !!errors.city}
                                                    helperText={touched.city && errors.city}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    disabled={true}
                                                    variant="filled"
                                                    type="text"
                                                    label="店面鄉鎮"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={district}
                                                    name="district"
                                                    error={!!touched.district && !!errors.district}
                                                    helperText={touched.district && errors.district}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    disabled={true}
                                                    variant="filled"
                                                    type="text"
                                                    label="店面地址"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={address}
                                                    name="address"
                                                    error={!!touched.address && !!errors.address}
                                                    helperText={touched.address && errors.address}
                                                    sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                            </Box>

                                            <Box display={"flex"} justifyContent={"space-between"} >
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="負責人名稱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.principalName}
                                                    name="principalName"
                                                    error={!!touched.principalName && !!errors.principalName}
                                                    helperText={touched.principalName && errors.principalName}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="負責人密碼"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.principalPassword}
                                                    name="principalPassword"
                                                    error={!!touched.principalPassword && !!errors.principalPassword}
                                                    helperText={touched.principalPassword && errors.principalPassword}
                                                    sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                            </Box>
                                            <Box display={"flex"} justifyContent={"space-between"} >
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="負責人line"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.principalLineUrl}
                                                    name="principalLineUrl"
                                                    error={!!touched.principalLineUrl && !!errors.principalLineUrl}
                                                    helperText={touched.principalLineUrl && errors.principalLineUrl}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <TextField
                                                    fullWidth
                                                    variant="filled"
                                                    type="text"
                                                    label="負責人信箱"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.principalEmail}
                                                    name="principalEmail"
                                                    error={!!touched.principalEmail && !!errors.principalEmail}
                                                    helperText={touched.principalEmail && errors.principalEmail}
                                                    sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                            </Box>

                                        </Box>
                                        <Box display="flex" justifyContent="center" >
                                            <Button onClick={handleDelete} variant="contained" sx={{ minWidth: "100px", padding: ".5rem 1.5rem", margin: "0 1rem", borderRadius: "10px", border: "2px solid #ff2f00" }}>
                                                <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                                                    {deleteTitle}
                                                </Typography>
                                            </Button>

                                            <ConfirmModal props={{ type: "store", id: props.id }} />

                                            <Button type="submit" color="success" variant="contained" sx={{ minWidth: "100px", padding: ".5rem 1.5rem", margin: "0 1rem", borderRadius: "10px", background: colors.grey[100] }}>
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
    );



}
