import React, { useEffect, useState, useContext } from 'react'
import { useQuery, gql } from '@apollo/client'
import App from '../../App';
import { GetStoresByCoordinate } from '../../graphQL/Queries'

// THEME
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";

// ICONS
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { color } from '@mui/system';
const Dashboard = () => {
    //THEME
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    // STATES
    const [status, setStatus] = React.useState('');

    //FUNCTIONS
    const handleChange = (e) => {
        setStatus(e.target.value);
    };

    const { loading, error, data } = useQuery(GetStoresByCoordinate, { variables: { coordinate: { latitude: 24.1043367, longitude: 120.6 } } });
    const [stores, setStores] = useState([]);
    useEffect(() => {
        if (data) {
            console.log(data.getStoresByCoordinate);
            setStores(data.getStoresByCoordinate);
        }

    }, [data]);

    return (
        <>
            <App />
        </>
    )
}

export default Dashboard