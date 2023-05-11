import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LogoutIcon from '@mui/icons-material/Logout';

import { Link, useNavigate } from 'react-router-dom';

import LOGO_BLACK from "../../assets/logo_black.png";
import LOGO_WHITE from "../../assets/logo_white.png";


import "./footer.css";
const Footer = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <Box display="flex" justifyContent="space-between" p={"2rem"}>
            <div>
                <a href="/">
                    <img src={LOGO_BLACK} width="40px" height={"40px"} alt="" className="header_logo" />
                </a>
            </div>



            {/* ICONS */}
            <Box display="flex" alignItems={"center"} gap={"1.5rem"}>
            <a href="/work">
                <button className="btn_underline_hover">
                    <Typography variant="h5" sx={{ color: colors.grey[100] }}>
                        WORK
                    </Typography>
                </button>
                </a>
                <button className="btn_underline_hover">
                    <Typography variant="h5" sx={{ color: colors.grey[100] }}>
                        ABOUT
                    </Typography>
                </button>
                <button className="btn_underline_hover">
                    <Typography variant="h5" sx={{ color: colors.grey[100] }}>
                        PARNERSHIPS
                    </Typography>
                </button>
                <a href="/contact">
                    <button className="btn_underline_hover">
                        <Typography variant="h5" sx={{ color: colors.grey[100] }}>
                            CONTACT
                        </Typography>
                    </button>
                </a>
            </Box>

            {/* ICONS */}
            <Box display="flex" alignItems={"center"}>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <LightModeOutlinedIcon />
                    ) : (
                        <DarkModeOutlinedIcon />
                    )}
                </IconButton>
            </Box>
        </Box>
    )
}

export default Footer