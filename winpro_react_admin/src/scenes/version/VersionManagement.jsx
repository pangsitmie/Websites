import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import GamePayVersion from "./GamePayVersion";
import { tokens } from "../../theme";
import AuditVersion from "./AuditVersion";



const VersionManagement = () => {

    //THEME
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box>
            <Box>
                <h1 className='userManagement_title'>版本管控</h1>
                <Typography variant="h3" sx={{ mb: "10px", fontSize: "1rem", fontWeight: "500", color: colors.grey[200] }}>
                    伺服器版本:
                </Typography>
            </Box>
            <Box width={"100%"} display={"flex"} p={"0 2rem "}>

                <Box width={"100%"} >
                    <GamePayVersion />
                </Box>
                <Box width={"100%"} >
                    <AuditVersion />
                </Box>
            </Box>
        </Box>

    )
}

export default VersionManagement







