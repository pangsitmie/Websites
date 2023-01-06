import React, { useState, useEffect, useRef } from "react";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { useLazyQuery, useMutation } from '@apollo/client'
import { Formik } from "formik";
import * as yup from "yup";
import "../../components/Modal/modal.css";
import IMG from "../../assets/user.png";
import { tokens } from "../../theme";
import { CreateBrand } from "../../graphQL/Mutations";
import { Navigate } from "react-router-dom";
import BRANDCOVER from "../../assets/BrandCover01.png";
import { BrandUploadLogo, BrandUploadCover, UpdateBrandLogoCover } from "../../graphQL/Queries";



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

  //========================== INITIAL VALUES ==========================
  const initialValues = {
    name: "",
    intro: "",
    vatNumber: "",

    logo: "https://file-test.cloudprogrammingonline.com/files/92a6af6c4d26fdb0652fe6b18?serverId=1&fileType=IMAGE",
    cover: "https://file-test.cloudprogrammingonline.com/files/92a6af6c4d26fdb0652fe6b17?serverId=1&fileType=IMAGE",
    principalName: "",
    principalPassword: "",
    principalLineUrl: "https://lin.ee/",
    principalEmail: "",
    principalPhone: "",
    brandCoinName: "",
  };

  // ========================== STATES AND HANDLERS ==========================
  var btnTitle = "新增品牌", confirmTitle = "新增", cancelTitle = "取消";
  const [modal, setModal] = useState(false); //open or close modal
  const toggleModal = () => {
    setModal(!modal);
  };

  //========================== GRAPHQL ==========================
  const [ApolloCreateBrand, { loading, error, data }] = useMutation(CreateBrand);
  // useEffect(() => {
  //   if (data) {
  //     console.log(data);
  //     window.location.reload();
  //   }
  // }, [data]);
  const [ApolloUpdateBrandLogoCover, { loading: loadingLogoCover, error: errorLogo, data: dataLogoCover }] = useLazyQuery(UpdateBrandLogoCover);



  // ========================== FUNCTIONS ==========================
  const handleFormSubmit = (values) => {
    console.log("SEND CREATE BRAND API REQUEST");
    console.log(values);
    // GET UPLOAD COVER LINK



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
    })
      //here we already get the id and we want to get the upload logo link
      .then(({ data: brandData }) => {
        const targetId = brandData.createBrand.id;
        console.log(targetId);
        ApolloBrandUploadLogo({
          variables: {
            args: [
              {
                id: targetId
              }
            ],
            mimetype: "images/png",
            fileSize: parseInt("1")
          }
        })
          //here we already get the upload logo link, now we are going to upload the logo
          .then(({ data: logoData }) => {
            console.log(logoData.getBrand[0].genLogoUploadURI);

            const uploadURI = logoData.getBrand[0].genLogoUploadURI;
            const file = selectedLogoFile;
            const formData = new FormData();
            formData.append('encodeMethod', 'BINARY');
            formData.append('uploadFile', file, file.name);

            fetch(uploadURI, {
              method: 'POST',
              body: formData
            })
              .then((response) => response.json())
              .then((data) => {
                console.log("targetId: " + targetId)
                console.log(data.payload.filename);

                //set logo url state so it can be used when update is called
                setLogoURL(data.payload.filename);
                alert("Upload logo success!");
              })
              .catch((error) => {
                console.error(error);
              })
              //here we already upload the logo, now we are going to get the upload cover link
              .then(() => {
                console.log("targetId: " + targetId)
                ApolloBrandUploadCover({
                  variables: {
                    args: [
                      {
                        id: targetId
                      }
                    ],
                    mimetype: "images/png",
                    fileSize: parseInt("1")
                  }
                })
                  //here we already get the upload cover link, now we are going to upload the cover
                  .then(({ data }) => {
                    console.log("targetId: " + targetId)
                    console.log(data.getBrand[0].genCoverUploadURI);

                    const uploadURI = data.getBrand[0].genCoverUploadURI;
                    const file = selectedCoverFile;
                    const formData = new FormData();
                    formData.append('encodeMethod', 'BINARY');
                    formData.append('uploadFile', file, file.name);

                    fetch(uploadURI, {
                      method: 'POST',
                      body: formData
                    })
                      .then((response) => response.json())
                      .then((data) => {
                        console.log("targetId: " + targetId)
                        console.log(data.payload.filename);

                        //set logo url state so it can be used when update is called
                        setCoverURL(data.payload.filename);
                        alert("Upload cover success!");
                      })
                      .catch((error) => {
                        console.error(error);
                      })

                      //here we already upload the cover, now we are going to update the brand
                      .then(() => {
                        console.log("logoURL: " + logoURL);
                        console.log("coverURL: " + coverURL);
                        console.log("targetId: " + targetId)
                        ApolloUpdateBrandLogoCover({
                          variables: {
                            args: [
                              {
                                id: targetId
                              }
                            ],
                            logo: logoURL,
                            cover: coverURL
                          }
                        }).then(({ data }) => {
                          console.log(data);
                          alert("Update brand success!");
                          // window.location.reload();
                        })
                      })
                  })
              }
              )
          })
      })
  };






  // ========================== RENDER ==========================
  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  // UPLOAD LOGO 
  const [ApolloBrandUploadLogo] = useLazyQuery(BrandUploadLogo);
  const [ApolloBrandUploadCover] = useLazyQuery(BrandUploadCover);

  // =========================== FILE UPLOAD ===========================
  const [selectedLogoImage, setSelectedLogoImage] = useState(null);
  const [selectedCoverImage, setSelectedCoverImage] = useState(null);

  const [selectedLogoFile, setSelectedLogoFile] = useState(null);
  const [selectedCoverFile, setSelectedCoverFile] = useState(null);

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
    setSelectedLogoFile(file);
    setSelectedLogoImage(URL.createObjectURL(file));
    if (event.target.files.length > 0) {
      // a file was selected, proceed with the upload
      console.log("file selected");
    } else {
      // no file was selected, do nothing
      console.log("no file selected");
    }
  };

  const handleCoverChange = (event) => {
    const file = event.target.files[0];
    setSelectedCoverFile(file);
    setSelectedCoverImage(URL.createObjectURL(file));
    if (event.target.files.length > 0) {
      // a file was selected, proceed with the upload
      console.log("file selected");
    } else {
      // no file was selected, do nothing
      console.log("no file selected");
    }
  };

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
                      <button className="my-button" type="submit">{confirmTitle}</button>
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
