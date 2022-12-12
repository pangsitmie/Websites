import React, { useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { format } from 'date-fns';
import "./modal.css";
import IMG from "../../assets/user.png";
import { ColorModeContext, tokens } from "../../theme";
import { mockBrandData } from "../../data/mockData";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  intro: yup.string().required("required"),
  principalName: yup.string().required("required"),
  principalLineUrl: yup.string().required("required"),
  principalEmail: yup.string().email("invalid email").required("required"),
  principalCreatedAt: yup.string().required("required"),
  vatNumber: yup.string().required("required"),
  statusDesc: yup.string().required("required"),
});


export default function BrandListModal({ props }) {
  //THEME
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //const colorMode = useContext(ColorModeContext);


  var btnTitle = "", confirmTitle = "", cancelTitle = "", displayDate = "";
  const [modal, setModal] = useState(false); //open or close modal

  const initialValues = {
    id: 0,
    status: "",
    statusDesc: "",
    name: "",
    intro: "",
    principalName: "",
    principalLineUrl: "",
    principalEmail: "",
    principalCreatedAt: "",
    vatNumber: "",
  };

  console.log(props);
  if (props == null) {
    btnTitle = "新增";
    confirmTitle = "新增";
    cancelTitle = "取消";
  }
  else {
    btnTitle = "修改";
    confirmTitle = "更新";
    cancelTitle = "刪除";
    initialValues.id = props.id;
    initialValues.status = props.status.name;
    initialValues.statusDesc = props.status.description;
    displayDate = format(props.createdAt * 1000, 'yyyy MMM d');
    initialValues.name = props.name;
    initialValues.intro = props.intro;
    initialValues.principalName = props.principal.name;
    initialValues.principalLineUrl = props.principal.lineUrl;
    initialValues.principalEmail = props.principal.email;
    initialValues.principalCreatedAt = format(props.principal.createdAt * 1000, 'yyyy MMM d');
    initialValues.vatNumber = props.vatNumber;
  }


  const handleFormSubmit = (values) => {
    console.log("SEND API REQUEST");
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
      <Button onClick={toggleModal} className="btn-modal" sx={{ color: colors.primary[100], border: "1px solid #111", borderColor: colors.blueAccent[100] }}>{btnTitle}</Button>

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
                      <Box textAlign="center" display={"flex"} alignItems={"center"} justifyContent={"center"}>
                        <Typography variant="h5" color={colors.greenAccent[500]} sx={{ margin: ".25rem .5rem" }}>
                          UID: {initialValues.id}
                        </Typography>
                        <Typography variant="h5" color={colors.greenAccent[500]} sx={{ margin: ".25rem .5rem" }}>
                          |
                        </Typography>
                        <Typography variant="h5" color={colors.greenAccent[500]} sx={{ margin: ".25rem 0.5" }}>
                          {initialValues.status}
                        </Typography>
                      </Box>
                      <Typography variant="h5" color={colors.greenAccent[500]} sx={{ margin: "0 .5rem 1rem", textAlign: "center" }}>
                        CREATED: {displayDate}
                      </Typography>
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
                        label="負責人"
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
                          sx={{ margin: "0rem 1rem 1rem 0rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />

                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="負責人Created At"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.principalCreatedAt}
                          name="principalCreatedAt"
                          error={!!touched.principalCreatedAt && !!errors.principalCreatedAt}
                          helperText={touched.principalCreatedAt && errors.principalCreatedAt}
                          sx={{ margin: "0rem 0rem 1rem 0rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                      </Box>

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
                        sx={{ margin: "0 1rem 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                      />

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
                      <Button type="submit" color="success" variant="contained" sx={{ minWidth: "8rem", padding: ".5rem", margin: ".5rem", borderRadius: "6px" }}>
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
