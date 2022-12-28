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
  //THEME
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  var btnTitle = "新增", confirmTitle = "新增", cancelTitle = "取消";
  const [modal, setModal] = useState(false); //open or close modal
  const [notifType, setNotifType] = useState('system');
  const [triggerAtDate, setTriggerAtDate] = useState('');
  const [expireAtDate, setExpireAtDate] = useState('');


  const handleNotifTypeChange = (event) => {
    setNotifType(event.target.value);
  };

  const initialValues = {
    title: "",
    content: "",
    comments: "",
    rewardId: "",
  };

  //create brand mutation
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



  function handleTriggerAtDateChange(event) {
    setTriggerAtDate(event.target.value);
  }

  function handleExpireAtDateChange(event) {
    setExpireAtDate(event.target.value);
  }

  const handleFormSubmit = (values) => {
    // console.log("SEND CREATE NOTIFICATION REQUEST");
    // console.log(values);
    const triggerAtDateObj = new Date(triggerAtDate);
    const expireAtDateObj = new Date(expireAtDate);

    const triggerAtUnix = triggerAtDateObj.getTime() / 1000;
    const expireAtUnix = expireAtDateObj.getTime() / 1000;
    // console.log("UNIX" + triggerAtUnix + "===" + expireAtUnix)


    ApolloCreateNotification({
      variables: {
        comment: values.comments,
        triggerAt: triggerAtUnix,
        notification: {
          type: notifType,
          title: values.title,
          content: values.content,
          expireAt: expireAtUnix,
          rewardId: null
        }
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
                      <Box display={"flex"} justifyContent={"space-between"}>
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
                          sx={{ marginBottom: "1rem", mr: '1rem', backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                        />
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Type</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={notifType}
                            label="type"
                            onChange={handleNotifTypeChange}
                          >
                            <MenuItem value={'system'}>system</MenuItem>
                            <MenuItem value={'brandActivity'}>brandActivity</MenuItem>
                            <MenuItem value={'freeCoin'}>freeCoin</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
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
                        label="排程時間點"
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
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="獎勵 ID"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.rewardId}
                        name="rewardId"
                        error={!!touched.rewardId && !!errors.rewardId}
                        helperText={touched.rewardId && errors.rewardId}
                        sx={{ margin: "0rem 0rem 1rem 0rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
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
