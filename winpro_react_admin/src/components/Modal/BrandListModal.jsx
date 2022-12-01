import React, { useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./modal.css";
import IMG from "../../assets/user.png";
import { tokens } from "../../theme";
import { mockBrandData } from "../../data/mockData";


const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  brandName: yup.string().required("required"),
  brandDesc: yup.string().required("required"),
  brandManager: yup.string().required("required"),
  brandManagerPhone: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
  brandManagerEmail: yup.string().email("invalid email").required("required"),
  brandManagerLine: yup.string().required("required"),
  brandTax: yup.string().required("required"),
  brandPassword: yup.string().required("required"),
  brandExpire: yup.string().required("required"),
  brandRemark: yup.string().required("required"),
});


export default function BrandListModal(props) {
  const [type, setType] = useState(props.type);
  var btnTitle = "", confirmTitle = "", cancelTitle = "";
  const [modal, setModal] = useState(false); //open or close modal

  const initialValues = {
    brandName: "",
    brandDesc: "",
    brandManager: "",
    brandManagerPhone: "",
    brandManagerEmail: "",
    brandManagerLine: "",
    brandTax: "",
    brandPassword: "",
    brandExpireDate: "",
    brandRemark: "",
  };

  console.log(type);
  if (type === "new") {
    btnTitle = "新增品牌";
    confirmTitle = "新增";
    cancelTitle = "取消";
  }
  else {
    btnTitle = "修改品牌";
    confirmTitle = "修改";
    cancelTitle = "取消";
    initialValues.brandName = mockBrandData[props.id].brandName;
    initialValues.brandDesc = mockBrandData[props.id].brandDesc;
    initialValues.brandManager = mockBrandData[props.id].brandManager;
    initialValues.brandManagerPhone = mockBrandData[props.id].brandManagerPhone;
    initialValues.brandManagerEmail = mockBrandData[props.id].brandManagerEmail;
    initialValues.brandManagerLine = mockBrandData[props.id].brandManagerLine;
    initialValues.brandTax = mockBrandData[props.id].brandTax;
    initialValues.brandPassword = mockBrandData[props.id].brandPassword;
    initialValues.brandExpireDate = mockBrandData[props.id].brandExpireDate;
  }


  const handleFormSubmit = (values) => {
    console.log(values);
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
      <button onClick={toggleModal} className="btn-modal">{btnTitle} {props.id}</button>

      {/* CONTENT OF WHAT HAPPEN AFTER BUTTON CLICKED */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <Box m="20px">
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
                      <Box display="flex" justifyContent="center" alignItems="center" m={"2rem"}>
                        <img
                          alt="profile-user"
                          width="100px"
                          height="100px"
                          src={IMG}
                          style={{ cursor: "pointer", borderRadius: "50%" }}
                        />
                      </Box>
                      <TextField className="modal_input_textfield"
                        fullWidth
                        variant="filled"
                        type="text"
                        label="品牌名稱"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.brandName}
                        name="brandName"
                        error={!!touched.brandName && !!errors.brandName}
                        helperText={touched.brandName && errors.brandName}
                        sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                      />
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
                        value={values.brandDesc}
                        name="brandDesc"
                        error={!!touched.brandDesc && !!errors.brandDesc}
                        helperText={touched.brandDesc && errors.brandDesc}
                        sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                      />
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="負責人"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.brandManager}
                        name="brandManager"
                        error={!!touched.brandManager && !!errors.brandManager}
                        helperText={touched.brandManager && errors.brandManager}
                        sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                      />
                      <Box display={"flex"} justifyContent={"space-between"} >
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="負責人連絡電話"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.brandManagerPhone}
                          name="brandManagerPhone"
                          error={!!touched.brandManagerPhone && !!errors.brandManagerPhone}
                          helperText={touched.brandManagerPhone && errors.brandManagerPhone}
                          sx={{ margin: "0rem 1rem 1rem 0rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="負責人電子信箱"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.brandManagerEmail}
                          name="brandManagerEmail"
                          error={!!touched.brandManagerEmail && !!errors.brandManagerEmail}
                          helperText={touched.brandManagerEmail && errors.brandManagerEmail}
                          sx={{ margin: "0rem 1rem 1rem 0rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="負責人Line"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.brandManagerLine}
                          name="brandManagerLine"
                          error={!!touched.brandManagerLine && !!errors.brandManagerLine}
                          helperText={touched.brandManagerLine && errors.brandManagerLine}
                          sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                      </Box>

                      <Box display={"flex"} justifyContent={"space-between"} >
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="統一編號"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.brandTax}
                          name="brandTax"
                          error={!!touched.brandTax && !!errors.brandTax}
                          helperText={touched.brandTax && errors.brandTax}
                          sx={{ margin: "0 1rem 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="品牌密碼"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.brandPassword}
                          name="brandPassword"
                          error={!!touched.brandPassword && !!errors.brandPassword}
                          helperText={touched.brandPassword && errors.brandPassword}
                          sx={{ margin: "0 1rem 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="合約到期日"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.brandExpireDate}
                          name="brandExpire"
                          error={!!touched.brandExpireDate && !!errors.brandExpireDate}
                          helperText={touched.brandExpireDate && errors.brandExpireDate}
                          sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                      </Box>
                      <TextField
                        multiline
                        fullWidth
                        variant="filled"
                        type="text"
                        label="備註"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.brandRemark}
                        name="brandRemark"
                        error={!!touched.brandRemark && !!errors.brandRemark}
                        helperText={touched.brandRemark && errors.brandRemark}
                        sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                      />
                    </Box>
                    <Box display="flex" justifyContent="center" >
                      <Button type="submit" onClick={toggleModal} color="error" variant="contained" sx={{ minWidth: "8rem", padding: ".5rem", margin: ".5rem", borderRadius: "6px" }}>
                        <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                          {cancelTitle}
                        </Typography>
                      </Button>
                      <Button type="submit" onClick={handleFormSubmit} color="success" variant="contained" sx={{ minWidth: "8rem", padding: ".5rem", margin: ".5rem", borderRadius: "6px" }}>
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
