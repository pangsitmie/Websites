import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { ColorModeContext, tokens } from "../../theme";

const Privacy = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <>
            <section className='hero_section'>
                <Typography variant='h2' sx={{ textAlign: 'center', fontSize: '140px', fontWeight: '500', color: colors.grey[100] }}>
                    Privacy Policy
                </Typography>
            </section>

        </>
    )
}

export default Privacy