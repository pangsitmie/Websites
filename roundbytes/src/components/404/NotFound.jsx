import React from 'react'
// THEME
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import EARTH_IMG from '../../assets/roundbytes_earth.svg';
import MOON_IMG from '../../assets/roundbytes_moon.svg';
import ASTRONAUT_IMG from '../../assets/roundbytes_astronaut.svg';

import './notFound.css'

const NotFound = () => {
    //========================== THEME ==========================
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <div class="bg_404">
            <div class="stars">
                <div class="central-body">
                    <Typography variant="h1" component="h1" sx={{ color: colors.primary[100], fontSize: 150, fontWeight: 700, textAlign: 'center' }}>
                        404
                    </Typography>
                    <Typography variant="h2" component="h2" sx={{ color: colors.primary[100], fontSize: 22, fontWeight: 300, textAlign: 'center' }}>
                        LOOKS LIKE YOU ARE<br />LOST IN SPACE
                    </Typography>
                    <a href="https://roundbytes.com" class="btn-go-home" >
                        <Typography variant="h4" sx={{ color: colors.primary[100], fontSize: 10, fontWeight: 600, textAlign: 'center' }}>
                            GO BACK HOME
                        </Typography>
                    </a>
                </div>
                <div class="objects">

                    <div class="earth-moon">
                        <img class="object_earth" src={EARTH_IMG} width="100px" />
                        <img class="object_moon" src={MOON_IMG} width="80px" />
                    </div>
                    <div class="box_astronaut">
                        <img class="object_astronaut" src={ASTRONAUT_IMG} width="140px" />
                    </div>
                </div>
                <div class="glowing_stars">
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                </div>
            </div>
        </div>


    )
}

export default NotFound