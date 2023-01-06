import React, { useState, useEffect, useRef } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { useQuery, useMutation, useLazyQuery } from '@apollo/client'
import { Formik } from "formik";
import * as yup from "yup";
import "../../components/Modal/modal.css";
import BRANDCOVER from "../../assets/cover_null.png";
import { tokens } from "../../theme";
import { GetBrand, UpdateBrand, RemoveBrand, UnbanBrand, BrandUploadLogo, BrandUploadCover } from "../../graphQL/Queries";
import ConfirmModal from "../../components/Modal/ConfirmModal";
import { replaceNullWithEmptyString } from "../../utils/Utils";


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
  //========================== THEME ==========================
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //========================== INITIAL VALUES ==========================
  const [initialValues, setInitialValues] = useState({
    id: -1,
    status: "",
    statusDesc: "",
    name: "",
    intro: "",
    logo: "",
    cover: "",
    principalName: "",
    principalPassword: "",
    principalLineUrl: "",
    principalEmail: "",
    vatNumber: "",
    brandCoinName: "",
  });

  // ========================== STATES AND HANDLERS ==========================
  var btnTitle = "修改", confirmTitle = "更新", deleteTitle = "移除", banTitle = "封鎖", unbanTitle = "解封";

  const [modal, setModal] = useState(false); //open or close modal
  const toggleModal = () => {
    setModal(!modal);
  };

  const [status, setStatus] = useState('disable');
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  //========================== GRAPHQL ==========================

  // ============ UPDATE BRAND ============
  const [ApolloUpdateBrand, { loading: loadingUpdate, error: errorUpdate, data: dataUpdate }] = useLazyQuery(UpdateBrand);
  // ============ REMOVE BRAND ============
  const [ApolloRemoveBrand, { loading: loadingRemove, error: errorRemove, data: dataRemove }] = useLazyQuery(RemoveBrand);
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
  // ============ UNBAN BRAND ============
  const [ApolloUnBanMachine, { loading: loadingUnBan, error: errorUnBan, data: dataUnBan }] = useLazyQuery(UnbanBrand);
  const handleUnBan = (e) => {
    var result = window.confirm("Are you sure you want to unban this machine?");
    if (result) {
      ApolloUnBanMachine({
        variables: {
          args: [
            {
              id: props.id
            }
          ],
        }
      })
      console.log("unbaned");
    } else {
      console.log("not deleted");
    }
  }

  useEffect(() => {
    if (dataUpdate) {
      window.location.reload();
    }
    if (dataRemove) {
      window.location.reload();
    }
    if (dataUnBan) {
      window.location.reload();
    }
  }, [dataUpdate, dataRemove, dataUnBan]);

  const handleFormSubmit = (values) => {
    const variables = {
      args: [
        {
          id: values.id
        }
      ],
      name: values.name,
      logo: logoURL,
      cover: coverURL,
      vatNumber: values.vatNumber,
      intro: values.intro,
      principal: {
        name: values.principalName,
        lineUrl: values.principalLineUrl,
        email: values.principalEmail,
      },
      currencyName: values.brandCoinName,
    };

    if (values.principalPassword !== "") {
      variables.principal.password = values.principalPassword;
    }

    if (initialValues.status !== "banned") {
      variables.statusId = status;
    }

    ApolloUpdateBrand({ variables });
  };

  // INITIAL VALUES FROM GET BRAND QUERY
  const { loading: loadingInit, error: errorInit, data: dataInit } = useQuery(GetBrand
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
    if (dataInit) {
      const nonNullData = replaceNullWithEmptyString(dataInit.getBrand[0]);

      const defaultLogo = "https://file-test.cloudprogrammingonline.com/files/92a6af6c4d26fdb0652fe6b18?serverId=1&fileType=IMAGE"
      const defaultCover = "https://file-test.cloudprogrammingonline.com/files/92a6af6c4d26fdb0652fe6b17?serverId=1&fileType=IMAGE"
      setInitialValues({
        id: props.id,
        status: nonNullData.status.name,
        name: nonNullData.name,
        vatNumber: nonNullData.vatNumber,
        intro: nonNullData.intro,
        logo: nonNullData.logo.length < 10 ? defaultLogo : "https://file-test.cloudprogrammingonline.com/files/" + nonNullData.logo + "?serverId=1&fileType=IMAGE",
        cover: nonNullData.cover.length < 10 ? defaultCover : "https://file-test.cloudprogrammingonline.com/files/" + nonNullData.cover + "?serverId=1&fileType=IMAGE",
        principalName: nonNullData.principal.name,
        principalLineUrl: nonNullData.principal.lineUrl,
        principalEmail: nonNullData.principal.email,
        //password doesnt have initial value
        brandCoinName: nonNullData.currency.name,
      });

      //set status only if not banned
      if (nonNullData.status.name !== "banned") {
        setStatus(nonNullData.status.name)
      }

    }
  }, [dataInit]);



  // UPLOAD LOGO 
  const [ApolloBrandUploadLogo] = useLazyQuery(BrandUploadLogo);
  const [ApolloBrandUploadCover] = useLazyQuery(BrandUploadCover);

  // =========================== FILE UPLOAD ===========================
  const [selectedLogoImage, setSelectedLogoImage] = useState(null);
  const [selectedCoverImage, setSelectedCoverImage] = useState(null);

  const [logoURL, setLogoURL] = useState("");
  const [coverURL, setCoverURL] = useState("");

  const logoFileInput = useRef(null);
  const handleLogoImgClick = () => {
    logoFileInput.current.click();
  };

  const coverFileInput = useRef(null);
  const handleCoverImgClick = () => {
    coverFileInput.current.click();
  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    setSelectedLogoImage(URL.createObjectURL(file));
    if (event.target.files.length > 0) {
      // a file was selected, proceed with the upload
      console.log("file selected");

      // get the upload uri
      ApolloBrandUploadLogo({
        variables: {
          args: [
            {
              id: props.id
            }
          ],
          mimetype: "images/png",
          fileSize: parseInt("1")
        }
      }).then(({ data }) => {
        console.log(data.getBrand[0].genLogoUploadURI);

        //create formData body
        const formData = new FormData();
        formData.append('encodeMethod', 'BINARY');
        formData.append('uploadFile', file, file.name);

        fetch(data.getBrand[0].genLogoUploadURI, {
          method: 'POST',
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data.payload.filename);

            //set logo url state so it can be used when update is called
            setLogoURL(data.payload.filename);
            alert("Upload logo success!");
          })
          .catch((error) => {
            console.error(error);
          });

      });

    } else {
      // no file was selected, do nothing
      console.log("no file selected");
    }
  };

  const handleCoverChange = (event) => {
    const file = event.target.files[0];
    setSelectedCoverImage(URL.createObjectURL(file));
    if (event.target.files.length > 0) {
      // a file was selected, proceed with the upload
      console.log("file selected");

      // get the upload uri
      ApolloBrandUploadCover({
        variables: {
          args: [
            {
              id: props.id
            }
          ],
          mimetype: "images/png",
          fileSize: parseInt("1")
        }
      }).then(({ data }) => {
        console.log(data);
        console.log(data.getBrand[0].genCoverUploadURI);

        //create formData body
        const formData = new FormData();
        formData.append('encodeMethod', 'BINARY');
        formData.append('uploadFile', file, file.name);

        fetch(data.getBrand[0].genCoverUploadURI, {
          method: 'POST',
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data.payload.filename);

            //set logo url state so it can be used when update is called
            setCoverURL(data.payload.filename);
            alert("Upload cover success!");
          })
          .catch((error) => {
            console.error(error);
          });
      });

    } else {
      // no file was selected, do nothing
      console.log("no file selected");
    }
  };

  //========================== RENDER ==========================
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
                    <Box>
                      <Typography variant="h2" sx={{ textAlign: "center", fontSize: "1.4rem", fontWeight: "600", color: "white" }}>
                        {btnTitle}
                      </Typography>

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

                      <Box display="flex" m={"1.2rem 0"} >
                        {/* LOGO */}
                        <Box display={"flex"} width={"40%"}
                          justifyContent={"center"}
                          alignItems={"center"}>
                          <Box className="hover-image-container">
                            <img
                              alt="profile-user"
                              width="100px"
                              height="100px"
                              style={{ cursor: "pointer", borderRadius: "50%" }}
                              src={selectedLogoImage || values.logo}
                              onClick={handleLogoImgClick}
                            />
                            <Box className="img_overlay logo_overlay">
                              <Box className="hover-text">Upload image</Box>
                            </Box>
                          </Box>
                          <input
                            type="file"
                            ref={logoFileInput}
                            style={{ display: 'none' }}
                            onChange={handleLogoChange}
                          />
                        </Box>

                        {/* COVER */}
                        <Box width={"60%"}  >
                          <Box className="hover-image-container">
                            <img
                              alt="brand_cover"
                              width="100%"
                              height="100%"
                              src={selectedCoverImage || values.cover}
                              style={{
                                cursor: "pointer", borderRadius: "12px"
                              }}
                              onClick={handleCoverImgClick}
                            />

                            <Box className="img_overlay cover_overlay">
                              <Box className="hover-text">Upload image</Box>
                            </Box>
                          </Box>

                          <input
                            type="file"
                            ref={coverFileInput}
                            style={{ display: 'none' }}
                            onChange={handleCoverChange}
                          />
                        </Box>
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

                        <FormControl sx={{ minWidth: 150 }}>
                          <InputLabel id="demo-simple-select-label" >{initialValues.status}</InputLabel>
                          <Select
                            disabled={initialValues.status === "banned"}
                            sx={{ borderRadius: "10px", background: colors.primary[400] }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
                            label="status"
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

                      {values.status === "banned" ? (
                        <Button onClick={handleUnBan} id={values.id} variant="contained" sx={{ minWidth: "100px", padding: ".5rem 1.5rem", margin: "0 1rem", borderRadius: "10px", border: "2px solid #fff" }}>
                          <Typography variant="h5" sx={{ textAlign: "center", fontSize: ".9rem", color: "white" }}>
                            {unbanTitle}
                          </Typography>
                        </Button>
                      ) : (
                        <ConfirmModal props={{ type: "brand", id: props.id }} />
                      )}



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
