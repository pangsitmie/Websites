import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { useMutation } from '@apollo/client'
import { Formik } from "formik";
import * as yup from "yup";
import "../../components/Modal/modal.css";
import IMG from "../../assets/user.png";
import { tokens } from "../../theme";
import { ManagerSetNotificationScheduleToAllMember } from "../../graphQL/Queries";
import { Navigate } from "react-router-dom";


const checkoutSchema = yup.object().shape({
  title: yup.string().required("required"),
  content: yup.string().required("required"),
  comments: yup.string().required("required"),
  rewardId: yup.string().required("required"),
});


export default function CreateSystemNotificationModal() {
  //========================== THEME ==========================
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //========================== INITIAL VALUES ==========================
  const initialValues = {
    title: "",
    content: "",
    comments: "",
    rewardId: "",
  };

  // ========================== STATES AND HANDLERS ==========================
  var btnTitle = "新增", confirmTitle = "新增", cancelTitle = "取消";

  const [modal, setModal] = useState(false); //open or close modal
  const toggleModal = () => {
    setModal(!modal);
  };

  const [notifType, setNotifType] = useState('system');
  const handleNotifTypeChange = (event) => {
    setNotifType(event.target.value);
  };

  const [triggerAtDate, setTriggerAtDate] = useState('');
  function handleTriggerAtDateChange(event) {
    setTriggerAtDate(event.target.value);
  }

  const [expireAtDate, setExpireAtDate] = useState('');
  function handleExpireAtDateChange(event) {
    setExpireAtDate(event.target.value);
  }

  const handleFormSubmit = (values) => {
    const triggerAtDateObj = new Date(triggerAtDate);
    const expireAtDateObj = new Date(expireAtDate);

    const triggerAtUnix = triggerAtDateObj.getTime() / 1000;
    const expireAtUnix = expireAtDateObj.getTime() / 1000;

    ApolloCreateNotification({
      variables: {
        comment: values.comments,
        triggerAt: triggerAtUnix,
        notification: {
          type: "system",
          title: values.title,
          content: values.content,
          expireAt: expireAtUnix,
        }
      }
    });
  };

  //========================== GRAPHQL ==========================
  const [ApolloCreateNotification, { loading, error, data }] = useMutation(ManagerSetNotificationScheduleToAllMember);
  useEffect(() => {
    if (data) {
      console.log(data);
      window.location.reload();
    }
    else {
      console.log(error)
    }
  }, [data]);

  //========================== RENDER ==========================
  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  // ========================== RETURN ==========================
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
                        sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                      />

                      <TextField
                        id="outlined-multiline-flexible"
                        multiline
                        fullWidth
                        maxRows={4}
                        variant="filled"
                        type="text"
                        label="内容"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.content}
                        name="content"
                        error={!!touched.content && !!errors.content}
                        helperText={touched.content && errors.content}
                        sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                      />

                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="備註"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.comments}
                        name="comments"
                        error={!!touched.comments && !!errors.comments}
                        helperText={touched.comments && errors.comments}
                        sx={{ marginBottom: "1rem", marginRight: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                      />

                      <TextField
                        fullWidth
                        id="datetime-local"
                        label="排程時間"
                        type="datetime-local"
                        // defaultValue="2017-05-24T10:30"
                        value={triggerAtDate}
                        onChange={handleTriggerAtDateChange}
                        sx={{ marginBottom: "1rem" }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        fullWidth
                        id="datetime-local"
                        label="過期時間"
                        type="datetime-local"
                        // defaultValue="2017-05-24T10:30"
                        value={expireAtDate}
                        onChange={handleExpireAtDateChange}
                        sx={{ marginBottom: "1rem" }}
                        InputLabelProps={{
                          shrink: true,
                        }}
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
