import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                    </Typography>
                    <Box alignitems="right" sx={{ flexGrow: 1, textAlign: "right" }}>
                        <Link to="/register" style={{ textDecoration: 'none', color: 'white', marginRight: "1rem" }}>Register</Link>
                        <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar