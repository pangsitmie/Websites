import { Box, Typography, useTheme } from '@mui/material'
import { ColorModeContext, tokens } from "../../theme";
import MAP1 from 'src/assets/map1.png'
import React, { Component } from "react";
import Slider from "react-slick";
import MOONZ_CAROUSEL from 'src/assets/moonz_carousel.png'
import PAHAMFILM_CAROUSEL from 'src/assets/pahamfilm_carousel.png'
import CLAWMACHINE_CAROUSEL from 'src/assets/clawmachine_carousel.png'
import RAFA_CAROUSEL from 'src/assets/rafahl_carousel.png'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./centerCarousel.css";

const CenterCarousel = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const centerSettings = {
        className: "center",
        arrows: false,
        dots: true,
        centerMode: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 3,
        speed: 500,
    };
    return (
        <div>
            <Slider {...centerSettings}>
                <div>
                    <Box className={"center_carousel_item"} >
                        <img src={MOONZ_CAROUSEL} className="center_carousel_img" />
                        <div>
                            <Typography variant='h3' sx={{ textAlign: 'left', fontSize: "24px", fontWeight: '500', color: colors.grey[100], m: "1rem 0" }}>
                                Game Pay
                            </Typography>
                            <div className='a_arrow'>
                                <Typography variant='h5' sx={{ textAlign: 'left', fontSize: "18px", fontWeight: '500', color: "#6B76FD" }}>
                                    Learn More
                                </Typography>
                                <NavigateNextIcon className='a_arrow_icon' />
                            </div>
                        </div>
                    </Box>
                </div>
                <div>
                    <Box className={"center_carousel_item"} >
                        <img src={MOONZ_CAROUSEL} className="center_carousel_img" />
                        <div>
                            <Typography variant='h3' sx={{ textAlign: 'left', fontSize: "24px", fontWeight: '500', color: colors.grey[100], m: "1rem 0" }}>
                                Moonz
                            </Typography>
                            <div className='a_arrow'>
                                <Typography variant='h5' sx={{ textAlign: 'left', fontSize: "18px", fontWeight: '500', color: "#6B76FD" }}>
                                    Learn More
                                </Typography>
                                <NavigateNextIcon className='a_arrow_icon' />
                            </div>
                        </div>
                    </Box>
                </div>
                <div>
                    <Box className={"center_carousel_item"} >
                        <img src={PAHAMFILM_CAROUSEL} className="center_carousel_img" />
                        <div>
                            <Typography variant='h3' sx={{ textAlign: 'left', fontSize: "24px", fontWeight: '500', color: colors.grey[100], m: "1rem 0" }}>
                                Paham Film
                            </Typography>
                            <div className='a_arrow'>
                                <Typography variant='h5' sx={{ textAlign: 'left', fontSize: "18px", fontWeight: '500', color: "#6B76FD" }}>
                                    Learn More
                                </Typography>
                                <NavigateNextIcon className='a_arrow_icon' />
                            </div>
                        </div>
                    </Box>
                </div>
                <div>
                    <Box className={"center_carousel_item"} >
                        <img src={CLAWMACHINE_CAROUSEL} className="center_carousel_img" />
                        <div>
                            <Typography variant='h3' sx={{ textAlign: 'left', fontSize: "24px", fontWeight: '500', color: colors.grey[100], m: "1rem 0" }}>
                                Claw Machine Recommender
                            </Typography>
                            <div className='a_arrow'>
                                <Typography variant='h5' sx={{ textAlign: 'left', fontSize: "18px", fontWeight: '500', color: "#6B76FD" }}>
                                    Learn More
                                </Typography>
                                <NavigateNextIcon className='a_arrow_icon' />
                            </div>
                        </div>
                    </Box>
                </div>
                <div>
                    <Box className={"center_carousel_item"} >
                        <img src={MOONZ_CAROUSEL} className="center_carousel_img" />
                        <div>
                            <Typography variant='h3' sx={{ textAlign: 'left', fontSize: "24px", fontWeight: '500', color: colors.grey[100], m: "1rem 0" }}>
                                Twindo Furniture
                            </Typography>
                            <div className='a_arrow'>
                                <Typography variant='h5' sx={{ textAlign: 'left', fontSize: "18px", fontWeight: '500', color: "#6B76FD" }}>
                                    Learn More
                                </Typography>
                                <NavigateNextIcon className='a_arrow_icon' />
                            </div>
                        </div>
                    </Box>
                </div>
                <div>
                    <Box className={"center_carousel_item"} >
                        <img src={RAFA_CAROUSEL} className="center_carousel_img" />
                        <div>
                            <Typography variant='h3' sx={{ textAlign: 'left', fontSize: "24px", fontWeight: '500', color: colors.grey[100], m: "1rem 0" }}>
                                Rafa Architecture
                            </Typography>
                            <div className='a_arrow'>
                                <Typography variant='h5' sx={{ textAlign: 'left', fontSize: "18px", fontWeight: '500', color: "#6B76FD" }}>
                                    Learn More
                                </Typography>
                                <NavigateNextIcon className='a_arrow_icon' />
                            </div>
                        </div>
                    </Box>
                </div>



            </Slider >
        </div >
    )
}

export default CenterCarousel

