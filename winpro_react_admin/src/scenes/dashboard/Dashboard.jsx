import React, { useEffect, useState, useContext } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import App from '../../App';
import "../../index.css";
import { GetStoresByCoordinate } from '../../graphQL/Queries'
import { Login } from '../../graphQL/Mutations'
import { GetAccessToken } from '../../graphQL/Queries'
import Map from '../../components/Maps'
// THEME
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";

// ICONS
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { color } from '@mui/system';
import axios from 'axios';

// console.log("AXIOS")
// axios.get("https://jsonmock.hackerrank.com/api/stocks?date=5-January-2000")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error));

const Dashboard = () => {

    const [apiData, setApiData] = useState([])
    useEffect(() => {
        axios.get("https://jsonmock.hackerrank.com/api/stocks?date=5-January-2000")
            .then(response => setApiData(response.data))
            .catch(error => console.log(error));
    }, [])
    console.log("API DATA")
    console.log(apiData)

    //THEME
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    //login state
    const [isLogin, setIsLogin] = useState(false);

    //login mutation
    const [apolloLogin, { loading, error, data }] = useMutation(Login);
    useEffect(() => {
        if (data) {
            console.log(data.login);
            setIsLogin(true);
        }
        else {
            console.log("NO LOGIN DATA")
        }
    }, [data]);

    //get access token mutation
    const { loading1, error1, data1 } = useQuery(GetAccessToken, {
        variables: {
            refreshToken: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQiLCJ0b2tlblR5cGUiOiJSRUZSRVNIIiwicm9sZSI6Ik1FTUJFUiIsImlhdCI6MTY3MDkwMzY5OCwiZXhwIjoxNjczNjY4NDk4fQ.GQGZUhmawYJ4QWuTtRzSddFcPN9H7a-rfPYDkQ2f39w"
        }
    });
    useEffect(() => {
        if (data1) {
            console.log(data1.getAccessToken);
            setIsLogin(true);
        }
        else {
            console.log("NO GET ACCESS TOKEN DATA")
        }
    }, [data1]);


    const handleClick = () => {
        console.log("CLICKED")
        apolloLogin({
            variables: {
                phone: {
                    country: "tw",
                    number: "0911111116"
                },
                password: "A23387696",
                deviceCode: "",
                firebaseToken: "",
            }
        })
    };

    return (
        <div>
            <div>THIS IS DASHBOARD</div>
            {/* {count} */}
            <div>
                <Button onClick={handleClick} sx={{ background: "#fff" }}>
                    LOGIN
                </Button>
                {isLogin ? <div>LOGGED IN </div> : <div>NOT LOGGED IN</div>}
                <Button sx={{ background: "#fff" }}>
                    LOGIN
                </Button>
            </div>
            {/* <Map /> */}


            {/* display the data fetched from the api */}
            <div>
                <p>Date: {apiData.data[0].date}</p>
                <p>Open: {apiData.data[0].open}</p>
                <p>Close: {apiData.data[0].close}</p>
                <p>High: {apiData.data[0].high}</p>
                <p>Low: {apiData.data[0].low}</p>
            </div>
        </div>
    )
}

export default Dashboard


