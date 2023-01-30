import { Box, Typography, useTheme } from '@mui/material'
import { ColorModeContext, tokens } from "../../theme";
import MAP1 from 'src/assets/map1.png'
import React, { Component } from "react";
import Slider from "react-slick";

import GAMEPAY_CAROUSEL from 'src/assets/gamepay_carousel.png'
import MOONZ_CAROUSEL from 'src/assets/moonz_carousel.png'
import PAHAMFILM_CAROUSEL from 'src/assets/pahamfilm_carousel.png'
import CLAWMACHINE_CAROUSEL from 'src/assets/clawmachine_carousel.png'
import RAFA_CAROUSEL from 'src/assets/rafahl_carousel.png'
import TWINDO_CAROUSEL from 'src/assets/twindo_carousel.png'
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
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
    };
    return (
        <Box>
            <Slider {...centerSettings}>
                <div >
                    <Box className={"center_carousel_item"} >
                        <img src={GAMEPAY_CAROUSEL} className="center_carousel_img" />
                        <div>
                            <Typography variant='h3' sx={{ textAlign: 'left', fontSize: "22px", fontWeight: '600', color: colors.grey[100], m: "1rem 0 .5rem" }}>
                                Game Pay
                            </Typography>
                            <div className='a_arrow'>
                                <Typography variant='h5' sx={{ textAlign: 'left', fontSize: "14px", fontWeight: '400', color: "#011cff" }}>
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
                            <Typography variant='h3' sx={{ textAlign: 'left', fontSize: "22px", fontWeight: '600', color: colors.grey[100], m: "1rem 0 .5rem" }}>
                                Moonz
                            </Typography>
                            <div className='a_arrow'>
                                <Typography variant='h5' sx={{ textAlign: 'left', fontSize: "14px", fontWeight: '400', color: "#011cff" }}>
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
                            <Typography variant='h3' sx={{ textAlign: 'left', fontSize: "22px", fontWeight: '600', color: colors.grey[100], m: "1rem 0 .5rem" }}>
                                Paham Film
                            </Typography>
                            <div className='a_arrow'>
                                <Typography variant='h5' sx={{ textAlign: 'left', fontSize: "14px", fontWeight: '400', color: "#011cff" }}>
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
                            <Typography variant='h3' sx={{ textAlign: 'left', fontSize: "22px", fontWeight: '600', color: colors.grey[100], m: "1rem 0 .5rem" }}>
                                Claw Machine Recommender
                            </Typography>
                            <div className='a_arrow'>
                                <Typography variant='h5' sx={{ textAlign: 'left', fontSize: "14px", fontWeight: '400', color: "#011cff" }}>
                                    Learn More
                                </Typography>
                                <NavigateNextIcon className='a_arrow_icon' />
                            </div>
                        </div>
                    </Box>
                </div>
                <div>
                    <Box className={"center_carousel_item"} >
                        <img src={TWINDO_CAROUSEL} className="center_carousel_img" />
                        <div>
                            <Typography variant='h3' sx={{ textAlign: 'left', fontSize: "22px", fontWeight: '600', color: colors.grey[100], m: "1rem 0 .5rem" }}>
                                Twindo Furniture
                            </Typography>
                            <div className='a_arrow'>
                                <Typography variant='h5' sx={{ textAlign: 'left', fontSize: "14px", fontWeight: '400', color: "#011cff" }}>
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
                            <Typography variant='h3' sx={{ textAlign: 'left', fontSize: "20px", fontWeight: '600', color: colors.grey[100], m: ".5rem 0 " }}>
                                Rafa Architecture
                            </Typography>
                            <div className='a_arrow'>
                                <Typography variant='h5' sx={{ textAlign: 'left', fontSize: "14px", fontWeight: '400', color: "#011cff" }}>
                                    Learn More
                                </Typography>
                                <NavigateNextIcon className='a_arrow_icon' />
                            </div>
                        </div>
                    </Box>
                </div>



            </Slider >
        </Box >
    )
}

export default CenterCarousel

