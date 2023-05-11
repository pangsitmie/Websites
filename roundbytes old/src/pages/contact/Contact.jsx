import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import 'transition-style';

const Contact = () => {
    return (
            <Box transition-style="in:circle:hesitate" className='hero_section' height={"100vh"} flexDirection={"column"}>
                <Typography variant='h2' sx={{ textAlign: 'center', fontSize: '140px', fontWeight: '500', color: "#111", mb: "2rem" }}>
                    Lets Connect
                </Typography>
                <a href="mailto:admin@roundbytes.com">
                    <button className='btn_underline_hover'>
                        <Typography variant='h4' sx={{ textAlign: 'center', fontWeight: '500', color: "#111" }}>
                            Contact Us
                        </Typography>
                    </button>
                </a>
            </Box>
    )
}

export default Contact