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
import { format } from 'date-fns';
import { replaceNullWithEmptyString } from "../../utils/Utils";


const checkoutSchema = yup.object().shape({
  title: yup.string().required("required"),
  content: yup.string().required("required"),
  comments: yup.string().required("required"),
  rewardId: yup.string().required("required"),
});


export default function SystemCoinListModal({ props }) {
  //========================== THEME ==========================
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //========================== INITIAL VALUES ==========================
  var btnTitle = "詳細資料", confirmTitle = "新增", deleteTitle = "取消";
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

  //========================== INITIAL VALUES ==========================
  const [initialValues, setInitialValues] = useState({
    title: "",
    content: "",
    comment: "",
    rewardId: "",
    triggerAtDate: "",
    expireAtDate: "",
    currencyID: "",
    currencyName: "",
    currencyAmount: "",
    rewardLimit: "",
    rewardDescription: "",
    rewardStatus: "",
    startAt: "",
    endAt: "",
  });
  useEffect(() => {
    if (props) {
      setInitialValues({
        title: props.notification.title,
        content: props.notification.content,
        comment: props.comment,
        rewardId: props.rewardId,
        triggerAtDate: format(new Date(props.triggerAt * 1000), 'MM/dd/yyyy - HH:mm:ss'),
        expireAtDate: props.notification.expireAt === null ? "無" : format(new Date(props.notification.expireAt * 1000), 'MM/dd/yyyy - HH:mm:ss'),
        currencyID: props.notification.reward.content.currency.id,
        currencyName: props.notification.reward.content.currency.name,
        currencyAmount: props.notification.reward.content.amount,
        rewardLimit: props.notification.reward.limit === null ? "無" : props.notification.reward.limit,
        rewardDescription: props.notification.reward.description === null ? "無" : props.notification.reward.description,
        rewardStatus: props.notification.reward.status.name,
        startAt: props.notification.reward.startAt === null ? "無" : format(new Date(props.notification.reward.startAt * 1000), 'MM/dd/yyyy - HH:mm:ss'),
        endAt: props.notification.reward.endAt === null ? "無" : format(new Date(props.notification.reward.endAt * 1000), 'MM/dd/yyyy - HH:mm:ss'),
      });
    }
  }, [props]);

  //========================== GRAPHQL ==========================
  // const [ApolloCreateNotification, { loading, error, data }] = useMutation(ManagerSetNotificationScheduleToAllMember);
  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //     window.location.reload();
  //   }
  //   else {
  //     console.log(error)
  //   }
  // }, [data]);







  const handleFormSubmit = (values) => {
    console.log("SEND CREATE NOTIFICATION REQUEST");
    console.log(values);
    const triggerAtDateObj = new Date(triggerAtDate);
    const expireAtDateObj = new Date(expireAtDate);

    const triggerAtUnix = triggerAtDateObj.getTime() / 1000;
    const expireAtUnix = expireAtDateObj.getTime() / 1000;


    // ApolloCreateNotification({
    //   variables: {
    //     comment: values.comments,
    //     triggerAt: triggerAtUnix,
    //     notification: {
    //       type: notifType,
    //       title: values.title,
    //       content: values.content,
    //       expireAt: expireAtUnix,
    //       rewardId: null
    //     }
    //   }
    // });
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
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="備註"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.comment}
                          name="comments"
                          error={!!touched.comment && !!errors.comment}
                          helperText={touched.comment && errors.comment}
                          sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
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

                      <Box display={"flex"} justifyContent={"space-between"}>
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
                          label="過期時間"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.expireAtDate}
                          name="expireAtDate"
                          error={!!touched.expireAtDate && !!errors.expireAtDate}
                          helperText={touched.expireAtDate && errors.expireAtDate}
                          sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                      </Box>

                      <Typography variant="h4" sx={{ m: "1rem 0", textAlign: "center", fontSize: "1rem", fontWeight: "600", color: "#cecece" }}>
                        Reward
                      </Typography>

                      <Box display={"flex"} justifyContent={"space-between"}>
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="貨幣 ID"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.currencyID}
                          name="currencyID"
                          error={!!touched.currencyID && !!errors.currencyID}
                          helperText={touched.currencyID && errors.currencyID}
                          sx={{ margin: "0rem 1rem 1rem 0rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="貨幣名稱"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.currencyName}
                          name="currencyName"
                          error={!!touched.currencyName && !!errors.currencyName}
                          helperText={touched.currencyName && errors.currencyName}
                          sx={{ margin: "0rem 0rem 1rem 0rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                      </Box>

                      <Box display={"flex"} justifyContent={"space-between"}>
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="數量"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.currencyAmount}
                          name="currencyAmount"
                          error={!!touched.currencyAmount && !!errors.currencyAmount}
                          helperText={touched.currencyAmount && errors.currencyAmount}
                          sx={{ margin: "0rem 1rem 1rem 0rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="限定數量"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.rewardLimit}
                          name="currencyLimit"
                          error={!!touched.rewardLimit && !!errors.rewardLimit}
                          helperText={touched.rewardLimit && errors.rewardLimit}
                          sx={{ margin: "0rem 0rem 1rem 0rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                      </Box>

                      <Box display={"flex"} justifyContent={"space-between"}>
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="獎勵描述"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.rewardDescription}
                          name="rewardDescription"
                          error={!!touched.rewardDescription && !!errors.rewardDescription}
                          helperText={touched.rewardDescription && errors.rewardDescription}
                          sx={{ margin: "0rem 1rem 1rem 0rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="獎勵狀態"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.rewardStatus}
                          name="rewardStatus"
                          error={!!touched.rewardStatus && !!errors.rewardStatus}
                          helperText={touched.rewardStatus && errors.rewardStatus}
                          sx={{ margin: "0rem 0rem 1rem 0rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                      </Box>

                      <Box display={"flex"} justifyContent={"space-between"}>
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="獎勵開始時間"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.startAt}
                          name="startAt"
                          error={!!touched.startAt && !!errors.startAt}
                          helperText={touched.startAt && errors.startAt}
                          sx={{ margin: "0rem 1rem 1rem 0rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                        <TextField
                          fullWidth
                          variant="filled"
                          type="text"
                          label="獎勵結束時間"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.endAt}
                          name="endAt"
                          error={!!touched.endAt && !!errors.endAt}
                          helperText={touched.endAt && errors.endAt}
                          sx={{ margin: "0rem 0rem 1rem 0rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                      </Box>


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
