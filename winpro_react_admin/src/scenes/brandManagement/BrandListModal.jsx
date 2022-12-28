import React, { useState, useEffect } from "react";
// import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { useQuery, useMutation, useLazyQuery } from '@apollo/client'
import { Formik } from "formik";
import * as yup from "yup";
import { format } from 'date-fns';
import "../../components/Modal/modal.css";
import IMG from "../../assets/user.png";
import { tokens } from "../../theme";
import { GetBrand, UpdateBrand, RemoveBrand } from "../../graphQL/Queries";
import ConfirmModal from "../../components/Modal/ConfirmModal";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  intro: yup.string().required("required"),
  principalName: yup.string().required("required"),
  principalLineUrl: yup.string().required("required"),
  principalEmail: yup.string().email("invalid email").required("required"),
  vatNumber: yup.string().required("required"),
  brandCoinName: yup.string().required("required"),
});


export default function BrandListModal({ props }) {
  //THEME
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [modal, setModal] = useState(false); //open or close modal

  //REF
  const [brandStatus, setBrandStatus] = useState('');
  const handleStatusChange = (event) => {
    setBrandStatus(event.target.value);
  };

  var btnTitle = "修改", confirmTitle = "更新", deleteTitle = "移除", blockTitle = "封鎖";

  const [initialValues, setInitialValues] = useState({
    id: -1,
    status: "",
    statusDesc: "",
    name: "",
    intro: "",
    principalName: "",
    principalPassword: "",
    principalLineUrl: "",
    principalEmail: "",
    vatNumber: "",
    brandCoinName: "",
  });

  // =================================================================================

  // REMOVE BRAND MUTATION
  const [ApolloRemoveBrand, { loading, error, data }] = useLazyQuery(RemoveBrand);
  useEffect(() => {
    if (data) {
      console.log(data.removeBrand);
      window.location.reload();
    }
    else {
      console.log("NO DATA")
    }
  }, [data]);



  //UPDATE BRAND MUTATION
  const [ApolloUpdateBrand, { loading: loading2, error: error2, data: data2 }] = useLazyQuery(UpdateBrand);
  useEffect(() => {
    if (data2) {
      window.location.reload();
      console.log("UPDATE SUCCESS")
    }
    else {
      console.log("No data update")
    }
  }, [data2]);

  // INITIAL VALUES FROM GET BRAND QUERY
  const { loading: loading3, error: error3, data: data3 } = useQuery(GetBrand
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
      console.log(data3.getBrand[0]);
      setInitialValues({
        id: props.id,
        status: data3.getBrand[0].status.name,
        name: data3.getBrand[0].name,
        vatNumber: data3.getBrand[0].vatNumber,
        intro: data3.getBrand[0].intro,

        principalName: data3.getBrand[0].principal.name,
        principalLineUrl: data3.getBrand[0].principal.lineUrl,
        principalEmail: data3.getBrand[0].principal.email,
        //password doesnt have initial value
        brandCoinName: data3.getBrand[0].currency.name,
      });
      setBrandStatus(data3.getBrand[0].status.name)
    }
    else {
      console.log("NO DATA ROM GET BRAND")
    }
  }, [data3]);

  // =================================================================================
  const handleFormSubmit = (values) => {
    console.log("SEND API REQUEST");
    console.log(values);

    if (values.principalPassword === "") { //if password is empty, do not update password
      ApolloUpdateBrand({
        variables: {
          args: [
            {
              id: values.id
            }
          ],
          name: values.name,
          vatNumber: values.vatNumber,
          intro: values.intro,
          principal: {
            name: values.principalName,
            lineUrl: values.principalLineUrl,
            email: values.principalEmail,
          },
          currencyName: values.brandCoinName,
          statusId: brandStatus
        }
      });
    }
    else {
      ApolloUpdateBrand({
        variables: {
          args: [
            {
              id: values.id
            }
          ],
          name: values.name,
          vatNumber: values.vatNumber,
          intro: values.intro,
          principal: {
            name: values.principalName,
            password: values.principalPassword,
            lineUrl: values.principalLineUrl,
            email: values.principalEmail,
          },
          currencyName: values.brandCoinName,
          statusId: brandStatus
        }
      });
    }
  };

  const handleDelete = (e) => {
    var result = window.confirm("Are you sure you want to delete this brand?");
    if (result) {
      ApolloRemoveBrand({
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
                          sx={{ margin: "0 1rem 1rem 0", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                        <FormControl sx={{ minWidth: 150 }} >
                          <InputLabel id="demo-simple-select-label" >{initialValues.status}</InputLabel>
                          <Select
                            sx={{ borderRadius: "10px", background: colors.primary[400] }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={brandStatus}
                            label="brandStatus"
                            onChange={handleStatusChange}
                          >
                            <MenuItem value={"normal"}>正常</MenuItem>
                            <MenuItem value={"disable"}>停用</MenuItem>
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
                        label="品牌簡介"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.intro}
                        name="intro"
                        error={!!touched.intro && !!errors.intro}
                        helperText={touched.intro && errors.intro}
                        sx={{ marginBottom: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                      />
                      <Box display={"flex"} justifyContent={"space-between"} >
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
                          sx={{ marginBottom: "1rem", mr: "1rem", backgroundColor: "#1F2A40", borderRadius: "5px" }}
                        />
                        <TextField
                          multiline
                          fullWidth
                          variant="filled"
                          type="text"
                          label="負責人密碼 (不必要)"
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
                      <Button onClick={handleDelete} id={values.id} variant="contained" sx={{ minWidth: "100px", padding: ".5rem 1.5rem", margin: "0 1rem", borderRadius: "10px", border: "2px solid #ff2f00" }}>
                        <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                          {deleteTitle}
                        </Typography>
                      </Button>

                      <ConfirmModal props={{ type: "brand", id: props.id }} />

                      <Button type="submit" color="success" sx={{ minWidth: "100px", padding: ".5rem 1.5rem", margin: "0 1rem", borderRadius: "10px", background: colors.grey[100] }}>
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
