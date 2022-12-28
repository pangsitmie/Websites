import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { useMutation } from '@apollo/client'
import { Formik } from "formik";
import * as yup from "yup";
import "../../components/Modal/modal.css";
import IMG from "../../assets/user.png";
import { tokens } from "../../theme";
import { ManagerSetNotificationScheduleToAllMember } from "../../graphQL/Queries";
import { format } from 'date-fns';


const checkoutSchema = yup.object().shape({
  title: yup.string().required("required"),
  content: yup.string().required("required"),
  comments: yup.string().required("required"),
  rewardId: yup.string().required("required"),
});



export default function SystemNotificationListModal({ props }) {
  //THEME
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  var btnTitle = "詳細資料", deleteTitle = "刪除";
  const [modal, setModal] = useState(false); //open or close modal



  const [initialValues, setInitialValues] = useState({
    title: "",
    type: "",
    content: "",
    comments: "",
    triggerAtDate: "",
    expireAtDate: "",
    rewardId: "",
  });


  useEffect(() => {
    console.log(props);
    if (props.expireAt === null) {
      setInitialValues({
        title: props.notification.title,
        type: props.notification.type.name,
        content: props.notification.content,
        comments: props.comment,
        triggerAtDate: format(new Date(props.triggerAt * 1000), 'MM/dd/yyyy - HH:mm:ss'),
        expireAtDate: "無",
        rewardId: "",
      });
    }
    else {
      setInitialValues({
        title: props.notification.title,
        type: props.notification.type.name,
        content: props.notification.content,
        comments: props.comment,
        triggerAtDate: format(new Date(props.triggerAt * 1000), 'MM/dd/yyyy - HH:mm:ss'),
        expireAtDate: format(new Date(props.notification.expireAt * 1000), 'MM/dd/yyyy - HH:mm:ss'),
        rewardId: "",
      });
    }
  }, []);


  //create brand mutation
  const [ApolloDeleteNotification, { loading, error, data }] = useMutation(ManagerSetNotificationScheduleToAllMember);
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
    console.log("SEND CREATE NOTIFICATION REQUEST");
    console.log(values);
    // FIXME: delete funciton
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
                          disabled={true}
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
                        <TextField className="modal_input_textfield"
                          disabled={true}
                          fullWidth
                          variant="filled"
                          type="text"
                          label="Type"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.type}
                          name="type"
                          error={!!touched.type && !!errors.type}
                          helperText={touched.type && errors.type}
                          sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px", color: "black" }}
                        />

                      </Box>
                      <TextField
                        disabled={true}
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
                        disabled={true}
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
                        disabled={true}
                        fullWidth
                        variant="filled"
                        type="text"
                        label="排程時間點"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.triggerAtDate}
                        name="triggerAtDate"
                        error={!!touched.triggerAtDate && !!errors.triggerAtDate}
                        helperText={touched.triggerAtDate && errors.triggerAtDate}
                        sx={{ marginBottom: "1rem", marginRight: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                      />
                      <TextField
                        disabled={true}
                        fullWidth
                        variant="filled"
                        type="text"
                        label="排程時間點"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.expireAtDate}
                        name="expireAtDate"
                        error={!!touched.expireAtDate && !!errors.expireAtDate}
                        helperText={touched.expireAtDate && errors.expireAtDate}
                        sx={{ marginBottom: "1rem", marginRight: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                      />
                      <TextField
                        disabled={true}
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
                      <Button type="submit" variant="contained" sx={{ minWidth: "8rem", padding: ".55rem 1rem", margin: ".5rem .5rem 0 .5rem", borderRadius: "8px", background: colors.redAccent[600] }}>
                        <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                          {deleteTitle}
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
