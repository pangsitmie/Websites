import React, { useState } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./modal.css";
import IMG from "../../assets/user.png";
import { tokens } from "../../theme";
import { mockDataUser } from "../../data/mockData";


const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  status: yup.string().required("required"),
  reason: yup.string().required("required"),
  uid: yup.string().required("required"),
  username: yup.string().required("required"),
  imgURL: yup.string().required("required"),
  phone: yup.string().required("required"),
  password: yup.string().required("required"),
  sex: yup.string().required("required"),
  birthday: yup.string().required("required"),
});


export default function UserListModal(props) {
  const buttonTitle = props.buttonTitle;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [modal, setModal] = useState(false);

  const initialValues = {
    id: 0,
    status: "",
    reason: "None",
    enable: true,
    uid: 0,
    username: "",
    imgURL: "",
    phone: "",
    password: "",
    sex: 0, //0=male , 1 = female
    birthday: ""
  };

  if (props.id != null) {
    initialValues.status = mockDataUser[props.id].status;
    initialValues.reason = mockDataUser[props.id].reason;
    initialValues.uid = mockDataUser[props.id].uid;
    initialValues.username = mockDataUser[props.id].username;
    initialValues.imgURL = mockDataUser[props.id].imgURL;
    initialValues.phone = mockDataUser[props.id].phone;
    initialValues.password = mockDataUser[props.id].password;
    initialValues.sex = mockDataUser[props.id].sex;
    initialValues.birthday = mockDataUser[props.id].birthday;
  }

  const handleFormSubmit = (values) => {
    console.log("HELLO");
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

      <button onClick={toggleModal} className="btn-modal">{buttonTitle}</button>

      {/* CONTENT OF WHAT HAPPEN AFTER BUTTON CLICKED */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <Box m="20px">
              {initialValues.username}
              <Typography variant="h2" sx={{ mb: "30px", textAlign: "center", fontSize: "1.4rem", fontWeight: "600", color: "white" }}>
                詳細資料
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
                      <Box display="flex" justifyContent="center" alignItems="center" mt={"2rem"}>
                        <img
                          alt="profile-user"
                          width="100px"
                          height="100px"
                          src={initialValues.imgURL}
                          style={{ cursor: "pointer", borderRadius: "50%" }}
                        />
                      </Box>
                      <Box textAlign="center">
                        <Typography variant="h5" color={colors.greenAccent[500]} sx={{ margin: "1rem 0 0 0" }}>
                          UID: {initialValues.uid}
                        </Typography>
                        <Typography variant="h5" color={colors.greenAccent[500]} sx={{ margin: ".5rem 0 1rem 0" }}>
                          {initialValues.status}
                        </Typography>
                      </Box>

                      <TextField className="modal_input_textfield"
                        fullWidth
                        variant="filled"
                        type="text"
                        label="暱稱"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.username}
                        name="username"
                        error={!!touched.username && !!errors.username}
                        helperText={touched.username && errors.username}
                        sx={{ margin: "0 1rem 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                      />
                      {/* PHONE */}
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="手機"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.phone}
                        name="phone"
                        error={!!touched.phone && !!errors.phone}
                        helperText={touched.phone && errors.phone}
                        sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                      />

                      {/* PASSWORD */}
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="密碼"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        name="password"
                        error={!!touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                        sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                      />
                      <Box display={"flex"}>
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="性別"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.sex}
                          name="sex"
                          error={!!touched.sex && !!errors.sex}
                          helperText={touched.sex && errors.sex}
                          sx={{ margin: "0 1rem 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="使用者生日"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.birthday}
                          name="birthday"
                          error={!!touched.birthday && !!errors.birthday}
                          helperText={touched.birthday && errors.birthday}
                          sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                      </Box>
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="封鎖原因"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.reason}
                        name="reason"
                        error={!!touched.reason && !!errors.reason}
                        helperText={touched.reason && errors.reason}
                        sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                      />

                    </Box>
                    <Box display="flex" justifyContent="center" >
                      <Button type="submit" onClick={toggleModal} color="error" variant="contained" sx={{ minWidth: "8rem", padding: ".5rem", margin: ".5rem", borderRadius: "6px" }}>
                        <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                          取消
                        </Typography>
                      </Button>
                      <Button type="submit" color="success" variant="contained" sx={{ minWidth: "8rem", padding: ".5rem", margin: ".5rem", borderRadius: "6px" }}>
                        <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                          更新
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
