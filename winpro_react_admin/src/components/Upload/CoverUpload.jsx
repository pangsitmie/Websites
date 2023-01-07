import React, { useState, useRef } from 'react'
import { Box } from '@mui/material'
import { useMutation } from '@apollo/client';
import { uploadBrandCover, uploadStoreCover } from '../../graphQL/Mutations';
import { defaultCoverURL } from '../../data/strings';


const CoverUpload = (props) => {
    const [ApolloBrandUploadCover, { loading, error, data: brandData }] = useMutation(uploadBrandCover);
    const [ApolloStoreUploadCover, { loading: storeLoading, error: storeError, data: storeData }] = useMutation(uploadStoreCover);

    const [selectedImage, setSelectedImage] = useState(null)
    const fileInput = useRef(null);

    const handleClick = () => {
        fileInput.current.click();
    };

    const brandUploadCover = (file) => {
        // get the upload uri
        ApolloBrandUploadCover({
            variables: {
                mimetype: "images/png",
                fileSize: parseInt("2000")
            }
        }).then(({ data }) => {
            const uploadURI = data.genBrandCoverUploadURI;
            console.log(uploadURI);

            //create formData body
            const formData = new FormData();
            formData.append('encodeMethod', 'BINARY');
            formData.append('uploadFile', file, file.name);

            fetch(uploadURI, {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("CoverUpload:" + data.payload.filename);
                    props.handleSuccess(data.payload.filename);
                    alert("Upload Cover Successful!");
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    };

    //function to use apollo uplooad store cover
    const storeUploadCover = (file) => {
        // get the upload uri
        ApolloStoreUploadCover({
            variables: {
                mimetype: "images/png",
                fileSize: parseInt("2000")
            }
        }).then(({ data }) => {
            const uploadURI = data.genStoreCoverUploadURI;
            console.log(uploadURI);

            //create formData body
            const formData = new FormData();
            formData.append('encodeMethod', 'BINARY');
            formData.append('uploadFile', file, file.name);

            fetch(uploadURI, {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("CoverUpload:" + data.payload.filename);
                    props.handleSuccess(data.payload.filename);
                    alert("Upload Cover Successful!");
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    };

    const handleChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
        if (event.target.files.length > 0) {
            // a file was selected, proceed with the upload
            console.log("file selected");
            switch (props.type) {
                case "brand":
                    brandUploadCover(file);
                    break;
                case "store":
                    storeUploadCover(file);
                    break;
                default:
                    alert("Error: No type selected");
                    break;
            }
        } else {
            // no file was selected, do nothing
            console.log("no file selected");
        }
    };

    return (
        <Box >
            <Box display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}>
                <Box className="hover-image-container">
                    <img
                        alt="brand_cover"
                        width="100%"
                        height="100%"
                        src={selectedImage || props.imagePlaceHolder}
                        style={{
                            cursor: "pointer", borderRadius: "12px"
                        }}
                        onClick={handleClick}
                    />
                    <Box className="img_overlay cover_overlay">
                        <Box className="hover-text">Upload 900x300 image</Box>
                    </Box>
                </Box>
                <input
                    type="file"
                    ref={fileInput}
                    style={{ display: 'none' }}
                    onChange={handleChange}
                />
            </Box>
        </Box>
    )
}

export default CoverUpload
