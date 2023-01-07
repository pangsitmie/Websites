import React, { useState, useRef } from 'react'
import { Box } from '@mui/material'
import { useMutation } from '@apollo/client';
import { UploadBrandLogo } from '../../graphQL/Mutations';
import { defaultLogoURL } from '../../data/strings';


const LogoUpload = (props) => {
    const [ApolloBrandUploadLogo, { loading, error, data: brandData }] = useMutation(UploadBrandLogo);

    const [selectedImage, setSelectedImage] = useState(null)
    const fileInput = useRef(null);

    const handleClick = () => {
        fileInput.current.click();
    };

    const handleChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
        if (event.target.files.length > 0) {
            // a file was selected, proceed with the upload
            console.log("file selected");

            // get the upload uri
            ApolloBrandUploadLogo({
                variables: {
                    mimetype: "images/png",
                    fileSize: parseInt("2000")
                }
            }).then(({ data }) => {
                const uploadURI = data.genBrandLogoUploadURI;
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
                        console.log("LogoUpload:" + data.payload.filename);
                        props.handleSuccess(data.payload.filename);
                        alert("Upload Logo Successful!");
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


    return (
        <Box >
            {/* LOGO */}
            <Box display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}>
                <Box className="hover-image-container">
                    <img
                        alt="profile-user"
                        width="120px"
                        height="120px"
                        style={{ cursor: "pointer", borderRadius: "50%" }}
                        src={selectedImage || props.imagePlaceHolder}
                        onClick={handleClick}
                    />
                    <Box className="img_overlay logo_overlay">
                        <Box className="hover-text">Upload 360x360 image</Box>
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

export default LogoUpload