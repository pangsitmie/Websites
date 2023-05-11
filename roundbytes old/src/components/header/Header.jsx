import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import LOGO_BLACK from "../../assets/logo_black.png";

import { Link, useNavigate } from 'react-router-dom';


const Header = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <Box
            position={"absolute"}
            top={0}
            left={0}
            right={0}
            display="flex"
            justifyContent="space-between"
            p={"2rem 4rem"}
            zIndex={"1000"}>
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
        </Box>
    );
};

export default Header;
