import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useMutation } from '@apollo/client'
import { Formik } from "formik";
import * as yup from "yup";
import ".././modal.css";
import IMG from "../../../assets/user.png";
import { tokens } from "../../../theme";
import { CreateBrand } from "../../../graphQL/Mutations";
import { Navigate } from "react-router-dom";


const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  vatNumber: yup.string().required("required"),
  intro: yup.string().required("required"),

  principalName: yup.string().required("required"),
  principalPassword: yup.string().required("required"),
  principalLineUrl: yup.string().required("required"),
  principalEmail: yup.string().email("invalid email").required("required"),
  principalPhone: yup.string().required("required"),
  brandCoinName: yup.string().required("required"),
});


export default function CreateBrandModal() {
  //THEME
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  var btnTitle = "新增品牌", confirmTitle = "新增", cancelTitle = "取消";
  const [modal, setModal] = useState(false); //open or close modal

  const initialValues = {
    name: "",
    intro: "",
    vatNumber: "",

    principalName: "",
    principalPassword: "",
    principalLineUrl: "https://lin.ee/",
    principalEmail: "",
    principalPhone: "",
    brandCoinName: "",
  };

  //create brand mutation
  const [ApolloCreateBrand, { loading, error, data }] = useMutation(CreateBrand);
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
    console.log("SEND CREATE BRAND API REQUEST");
    console.log(values);
    ApolloCreateBrand({
      variables: {
        name: values.name,
        vatNumber: values.vatNumber,
        intro: values.intro,
        principal: {
          name: values.principalName,
          password: values.principalPassword,
          lineUrl: values.principalLineUrl,
          email: values.principalEmail,
          phone: {
            country: "tw",
            number: values.principalPhone
          }
        },
        currencyName: values.brandCoinName
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
                      <Box display="flex" justifyContent="center" alignItems="center" m={"1rem"}>
                        <img
                          alt="profile-user"
                          width="100px"
                          height="100px"
                          src={IMG}
                          style={{ cursor: "pointer", borderRadius: "50%" }}
                        />
                      </Box>
                      <Box display={"flex"} justifyContent={"space-between"}>

                        <TextField className="modal_input_textfield"
                          fullWidth
                          variant="filled"
                          type="text"
                          label="品牌名稱"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.name}
                          name="name"
                          error={!!touched.name && !!errors.name}
                          helperText={touched.name && errors.name}
                          sx={{ marginBottom: "1rem", mr: '1rem', backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="統一編號"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.vatNumber}
                          name="vatNumber"
                          error={!!touched.vatNumber && !!errors.vatNumber}
                          helperText={touched.vatNumber && errors.vatNumber}
                          sx={{ margin: "0 0rem 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                      </Box>
                      <TextField
                        id="outlined-multiline-flexible"
                        multiline
                        fullWidth
                        maxRows={4}
                        variant="filled"
                        type="text"
                        label="品牌簡介"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.intro}
                        name="intro"
                        error={!!touched.intro && !!errors.intro}
                        helperText={touched.intro && errors.intro}
                        sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                      />

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
                        sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                      />
                      <Box display={"flex"} justifyContent={"space-between"} >
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
                          sx={{ marginBottom: "1rem", marginRight: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="負責人電話"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.principalPhone}
                          name="principalPhone"
                          error={!!touched.principalPhone && !!errors.principalPhone}
                          helperText={touched.principalPhone && errors.principalPhone}
                          sx={{ margin: "0rem 0rem 1rem 0rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                      </Box>

                      <Box display={"flex"} justifyContent={"space-between"} >
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="負責人Line"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.principalLineUrl}
                          name="principalLineUrl"
                          error={!!touched.principalLineUrl && !!errors.principalLineUrl}
                          helperText={touched.principalLineUrl && errors.principalLineUrl}
                          sx={{ margin: "0rem 1rem 1rem 0rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="負責人電子信箱"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.principalEmail}
                          name="principalEmail"
                          error={!!touched.principalEmail && !!errors.principalEmail}
                          helperText={touched.principalEmail && errors.principalEmail}
                          sx={{ margin: "0rem 0rem 1rem 0rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />


                      </Box>
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="品牌專屬幣名稱"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.brandCoinName}
                        name="brandCoinName"
                        error={!!touched.brandCoinName && !!errors.brandCoinName}
                        helperText={touched.brandCoinName && errors.brandCoinName}
                        sx={{ margin: "0 1rem 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px" }}
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
  );
}
