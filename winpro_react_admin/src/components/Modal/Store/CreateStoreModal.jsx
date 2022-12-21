import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import ".././modal.css";
import { tokens } from "../../../theme";
import { useMutation, useQuery } from "@apollo/client";
import { CreateStore } from "../../../graphQL/Mutations";
import PlacesAutocomplete, {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';
import { GetBrandList } from "../../../graphQL/Queries";
import { IntegrationInstructions } from "@mui/icons-material";


const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    // brandId: yup.string().required("required"),
    name: yup.string().required("required"),
    intro: yup.string().required("required").nullable(),

    principalName: yup.string().required("required"),
    principalAccount: yup.string().required("required"),
    principalPassword: yup.string().required("required"),
    principalLineUrl: yup.string().required("required"),
    principalEmail: yup.string().email("invalid email").required("required"),
});


export default function CreateStoreModal() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [modal, setModal] = useState(false);
    const [{ address, city, district, coordinates }, setLocation] = useState({
        address: "",
        city: "",
        district: "",
        coordinates: {
            lat: 0,
            lng: 120,
        }
    });
    const [inputAddress, setInputAddress] = useState("");
    const [{ brandId, brandName }, setBrandInfo] = useState({
        brandId: "null",
        brandName: "null",
    });
    var btnTitle = "新增店面", confirmTitle = "新增", cancelTitle = "取消";



    const initialValues = {
        name: "",
        intro: "",

        cover: "https://img.icons8.com/fluency/48/null/test-account.png",
        //locations get from location state

        principalName: "",
        principalAccount: "",
        principalPassword: "",
        principalLineUrl: "https://lin.ee/",
        principalEmail: "",
    };

    const { loading: loading1, error: error1, data: data1 } = useQuery(GetBrandList);
    const [brandListFilter, setBrandListFilter] = useState('');
    const [brandList, setBrandList] = useState([]);
    useEffect(() => {
        if (data1) {
            setBrandList(data1.getAllBrands);
        }

    }, [data1]);
    const handleBrandListChange = (e) => {
        const targetId = e.target.value;
        console.log(targetId);
        console.log(brandList[targetId - 1].name);
        setBrandListFilter(targetId);
        setBrandInfo({
            brandId: targetId,
            brandName: brandList[targetId - 1].name
        });
    };

    //create store mutation
    const [ApolloCreateStore, { loading, error, data }] = useMutation(CreateStore);
    useEffect(() => {
        if (data) {
            console.log(data);
            window.location.reload();
        }
        else {
            console.log(error)
        }
    }, [data]);

    const handleFormSubmit = (values) => {
        console.log("FORM SUBMIT");
        console.log(values);
        console.log(brandId + brandName);
        console.log("city" + city + ", district" + district + "address:" + address + "Coordinate:" + coordinates.lat + "," + coordinates.lng);
        ApolloCreateStore({
            variables: {
                brandId: brandId,
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
                    description: null
                },
                principal: {
                    name: values.principalName,
                    account: values.principalAccount,
                    password: values.principalPassword,
                    lineUrl: values.principalLineUrl,
                    email: values.principalEmail
                }
            }
        });
    };

    const handleLocationSelect = async value => {
        const results = await geocodeByAddress(value);
        console.log(results);
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
        console.log("Coordinate:" + coordinates.lat + "," + coordinates.lng);
        //this.props.onAddressSelected();
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
                                                    src={initialValues.cover}
                                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                                />
                                            </Box>


                                            {/* Brand info */}
                                            <Box display={"flex"}>
                                                <TextField
                                                    fullWidth
                                                    disabled={true}
                                                    variant="filled"
                                                    type="text"
                                                    label="品牌id"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={brandId}
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
                                                    value={brandName}
                                                    name="brandName"
                                                    error={!!touched.brandName && !!errors.brandName}
                                                    helperText={touched.brandName && errors.brandName}
                                                    sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                                                />
                                                <FormControl sx={{ minWidth: 150, height: "100%" }}>
                                                    <InputLabel id="demo-simple-select-label" >品牌過濾</InputLabel>
                                                    <Select
                                                        sx={{ borderRadius: "10px", background: colors.primary[400], height: "100%", width: "auto" }}
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={brandListFilter}
                                                        label="brandListFilter"
                                                        onChange={handleBrandListChange}
                                                    >
                                                        {brandList.map((brand, i) => (
                                                            <MenuItem
                                                                value={brand.id}
                                                                key={`${brand.id}-${i}`}
                                                            >
                                                                {brand.name}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Box>


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
                                            <TextField className="modal_input_textfield"
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="店面介紹"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.intro}
                                                name="intro"
                                                error={!!touched.intro && !!errors.intro}
                                                helperText={touched.intro && errors.intro}
                                                sx={{ margin: "0 1rem 0rem 0", backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                                            />

                                            {/* Search Store location */}
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


                                            <Box display={"flex"}>
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
                                                    label="負責人賬號"
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    value={values.principalAccount}
                                                    name="principalAccount"
                                                    error={!!touched.principalAccount && !!errors.principalAccount}
                                                    helperText={touched.principalAccount && errors.principalAccount}
                                                    sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
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

                                            <Box display={"flex"}>

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
                                            <Button onClick={toggleModal} color="error" variant="contained" sx={{ minWidth: "8rem", padding: ".55rem 1rem", margin: ".5rem .5rem 0 .5rem", borderRadius: "8px" }}>
                                                <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                                                    {cancelTitle}
                                                </Typography>
                                            </Button>
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

    );



}
