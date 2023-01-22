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
        <Box display="flex" justifyContent="space-between" p={4}>
            <div>
            </div>



            {/* ICONS */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <LightModeOutlinedIcon />
                    ) : (
                        <DarkModeOutlinedIcon />
                    )}
                </IconButton>
            </Box>
        </Box>
    );
};

export default Header;
