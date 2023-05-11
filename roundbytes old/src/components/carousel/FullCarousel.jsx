import { Box, Typography, useTheme } from '@mui/material'
import { ColorModeContext, tokens } from "../../theme";
import MAP1 from 'src/assets/map1.png'
import React, { Component } from "react";
import Slider from "react-slick";
import FULL_CAROUSEL_IMG1 from 'src/assets/full_carousel_img1.png'
import FULL_CAROUSEL_IMG2 from 'src/assets/full_carousel_img2.png'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./fullCarousel.css";

const FullCarousel = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const settings = {
        className: "center",
        arrows: false,
        dots: false,
        centerMode: true,
        infinite: true,
        centerPadding: "0px", //ini harus sama dengan padding di css .slick-list
        slidesToShow: 1,
        speed: 500,
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <Box className={"full_carousel_item"} backgroundColor={"#040305"}>
                        {/* CONTENT */}
                        <Box className={"full_carousel_item_content"} >
                            <div >
                                <Typography variant="h1" sx={{ fontSize: "80px", fontWeight: "600", color: "#fefefe", mb: "1rem" }}>
                                    Round Bytes
                                </Typography>
                                <Typography variant="h1" sx={{ fontSize: "20px", fontWeight: "400", color: "#fefefe", lineHeight: "1.5", mb: "1rem", pr: "2rem" }}>
                                    You bring the steak, we'll add the sizzle. We are a full-service design firm with a craving for creating the unimaginable
                                </Typography>
                            </div>
                        </Box>

                        {/* IMG */}
                        <Box className={"full_carousel_item_img"} >
                            <img src={FULL_CAROUSEL_IMG1} alt="" />
                        </Box>
                    </Box>
                </div>
                <div>
                    <Box className={"full_carousel_item"} backgroundColor={"#f7e7db"}>
                        {/* CONTENT */}
                        <Box className={"full_carousel_item_content"} >
                            <div >
                                <Typography variant="h1" sx={{ fontSize: "80px", fontWeight: "600", color: "#1F1C1A", mb: "1rem" }}>
                                    Tucope
                                </Typography>
                                <Typography variant="h1" sx={{ fontSize: "20px", fontWeight: "400", color: "#2b2826", lineHeight: "1.5", mb: "1rem", pr: "2rem" }}>
                                    You bring the steak, we'll add the sizzle. We are a full-service design firm with a craving for creating the unimaginable
                                </Typography>
                                <Typography variant="h2" sx={{ fontSize: "18px", color: "#286FDA", pt: "1rem" }}>
                                    View Project
                                </Typography>
                            </div>
                        </Box>

                        {/* IMG */}
                        <Box className={"full_carousel_item_img"} >
                            <img src={FULL_CAROUSEL_IMG2} alt="" />
                        </Box>
                    </Box>
                </div>
                <div>
                    <Box className={"full_carousel_item"} backgroundColor={"#040305"}>
                        {/* CONTENT */}
                        <Box className={"full_carousel_item_content"} >
                            <div >
                                <Typography variant="h1" sx={{ fontSize: "80px", fontWeight: "600", color: "#FFF", mb: "1rem" }}>
                                    Moonz
                                </Typography>
                                <Typography variant="h1" sx={{ fontSize: "18px", fontWeight: "400", color: "#FFF", lineHeight: "1.5", mb: "1rem", pr: "2rem" }}>
                                    You bring the steak, we'll add the sizzle. We are a full-service design firm with a craving for creating the <br /> unimaginable
                                </Typography>
                                <Typography variant="h2" sx={{ fontSize: "18px", color: "#286FDA", pt: "1rem" }}>
                                    View Project
                                </Typography>
                            </div>
                        </Box>

                        {/* IMG */}
                        <Box className={"full_carousel_item_img"} >
                            <img src={FULL_CAROUSEL_IMG1} alt="" />
                        </Box>
                    </Box>
                </div>
            </Slider >
        </div >
    )
}

export default FullCarousel

