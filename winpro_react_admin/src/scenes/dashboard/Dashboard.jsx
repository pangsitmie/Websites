import React, { useEffect, useState, useContext } from 'react'
import { useQuery, gql, useMutation } from '@apollo/client'
import App from '../../App';
import { GetStoresByCoordinate } from '../../graphQL/Queries'
import { Login } from '../../graphQL/Mutations'
import { GetAccessToken } from '../../graphQL/Queries'

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
            console.log("NO DATA")
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
            console.log("NO DATA")
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

            <div>
                <Button onClick={handleClick} sx={{ background: "#fff" }}>
                    LOGIN
                </Button>
                {isLogin ? <div>LOGGED IN </div> : <div>NOT LOGGED IN</div>}
                <Button sx={{ background: "#fff" }}>
                    LOGIN
                </Button>
            </div>



        </div>
    )
}

export default Dashboard