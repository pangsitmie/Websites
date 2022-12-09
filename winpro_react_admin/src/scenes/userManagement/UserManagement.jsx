import React, { useEffect, useState, useContext, useRef } from 'react'
import { useQuery, gql } from '@apollo/client'
import "./userManagement.css"
// QUERIES
import { GetStoresByCoordinate } from '../../graphQL/Queries'
import { mockDataUser } from "../../data/mockData";
// THEME
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";

// ICONS
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import UserListModal from '../../components/Modal/UserListModal';

const UserManagement = () => {
    //THEME
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    // STATES
    const [status, setStatus] = useState('');

    //REF
    const nameValueRef = useRef('');
    const phoneValueRef = useRef('');

    //FUNCTIONS
    const handleChange = (e) => {
        setStatus(e.target.value);
    };

    const submitSearch = () => {
        console.log(nameValueRef.current.value + " " + phoneValueRef.current.value + status);
    }

    //GQL
    const { loading, error, data } = useQuery(GetStoresByCoordinate, { variables: { coordinate: { latitude: 24.1043367, longitude: 120.6 } } });
    const [stores, setStores] = useState([]);
    useEffect(() => {
        if (data) {
            console.log(data.getStoresByCoordinate);
            setStores(data.getStoresByCoordinate);
        }

    }, [data]);

    return (
        <Box p={2}>
            <h1 className='userManagement_title'>使用者管理</h1>
            {/* SEARCH DIV */}
            <Box display="flex" marginBottom={5}>
                {/* name Search */}
                <Box
                    display="flex"
                    mr={2}
                    backgroundColor={colors.primary[400]}
                    borderRadius="10px">
                    <InputBase sx={{ ml: 2, pr: 2, flex: 1, minWidth: "200px" }} placeholder="Name Search" inputRef={nameValueRef} />
                </Box>
                {/* phone search */}
                <Box
                    display="flex"
                    mr={2}
                    backgroundColor={colors.primary[400]}
                    borderRadius="10px">
                    <InputBase sx={{ ml: 2, pr: 2, flex: 1, minWidth: "200px" }} placeholder="Phone Search" inputRef={phoneValueRef} />
                </Box>
                <FormControl sx={{ minWidth: 150 }} >
                    <InputLabel id="demo-simple-select-label" >Status</InputLabel>
                    <Select
                        sx={{ borderRadius: "10px", background: colors.primary[400] }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Status"
                        onChange={handleChange}
                    >
                        <MenuItem value={"無"}>無</MenuItem>
                        <MenuItem value={"正常"}>正常</MenuItem>
                        <MenuItem value={"封鎖"}>封鎖</MenuItem>
                    </Select>
                </FormControl>
                {/* SEARCH BTN */}
                <Button className=""
                    sx={{
                        backgroundColor: colors.blueAccent[400],
                        color: colors.grey[100],
                        minWidth: "150px",
                        borderRadius: "10px",
                        marginLeft: "20px",
                        padding: "0px"
                    }}
                    onClick={submitSearch}
                >
                    <SearchIcon sx={{ mr: "10px", fontsize: ".8rem" }} />
                    <p className='btn_text'>查詢</p>
                </Button>


            </Box>


            {/* TABLE DIV */}
            <Box className="recent_transaction_container"
                backgroundColor={colors.primary[400]}
                borderRadius="10px"
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`0px solid ${colors.primary[500]}`}
                    colors={colors.grey[100]}
                    p="15px"
                >
                    <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                        使用者名稱
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    colors={colors.grey[100]}
                    p="15px 25px 15px 15px"
                >
                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>ID</Box>
                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>暱稱</Box>
                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>狀態</Box>
                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>手機</Box>
                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"} paddingLeft={"1.5rem"}>更新資料</Box>
                </Box>

                {stores.map((store, i) => (
                    <Box
                        key={`${store.id}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        p="10px"
                    >
                        <Box>
                            <Typography variant="h5" color={colors.grey[100]} >
                                {store.id}
                            </Typography>
                        </Box>
                        <Box color={colors.grey[100]}>{store.name}</Box>
                        <Box
                            display={"flex"}
                            p="0px 10px"
                            borderRadius="4px">
                            <UserListModal props={store} />
                        </Box>
                    </Box>
                ))}

                {/* {mockDataUser.map((user, i) => (
                    <Box
                        key={`${user.id}-${i}`}
                        display="flex"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        p="10px"
                    >
                        <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>{user.id}</Box>
                        <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>{user.username}</Box>
                        <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>{user.status}</Box>
                        <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>{user.phone}</Box>
                        <Box
                            width={"20%"}
                            display={"flex"}
                            alignItems={"center"} justifyContent={"center"}
                            borderRadius="4px">
                            <UserListModal buttonTitle="更新" id={user.id} />
                        </Box>
                    </Box>
                ))} */}
            </Box>
        </Box >
    )
}

export default UserManagement







