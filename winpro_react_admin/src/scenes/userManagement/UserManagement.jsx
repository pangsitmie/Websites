import React, { useEffect, useState, useContext } from 'react'
import { useQuery, gql } from '@apollo/client'
import "./userManagement.css"
// QUERIES
import { GetStoresByCoordinate } from '../../graphQL/Queries'
import { mockDataUser, mockTransactions } from "../../data/mockData";
// THEME
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";

// ICONS
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { color } from '@mui/system';
import Popup from '../../components/popup/Popup';
import UserListModal from '../../components/Modal/UserListModal';

const UserManagement = () => {
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
    const handleDelete = (e) => {
        const id = e.target.id;
        console.log(id);
        var result = window.confirm("Are you sure you want to delete this user?");
        if (result) {
            console.log("deleted");
        } else {
            console.log("not deleted");
        }
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
        <Box p={2}>
            <h1 className='userManagement_title'>使用者管理</h1>
            {/* SEARCH DIV */}
            <Box display="flex" paddingBottom={5}>
                {/* name Search */}
                <Box
                    display="flex"
                    mr={2}
                    backgroundColor={colors.primary[400]}
                    borderRadius="10px">
                    <InputBase sx={{ ml: 2, pr: 2, flex: 1, minWidth: "200px" }} placeholder="Name search" />
                </Box>
                {/* phone search */}
                <Box
                    display="flex"
                    mr={2}
                    backgroundColor={colors.primary[400]}
                    borderRadius="10px">
                    <InputBase sx={{ ml: 2, pr: 2, flex: 1, minWidth: "200px" }} placeholder="Phone search" />
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
                        <MenuItem value={10}>無</MenuItem>
                        <MenuItem value={20}>正常</MenuItem>
                        <MenuItem value={30}>封鎖</MenuItem>
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
                    <Typography color={colors.grey[100]} variant="h5" fontWeight="400">
                        暱稱
                    </Typography>
                    <Typography color={colors.grey[100]} variant="h5" fontWeight="400">
                        狀態
                    </Typography>
                    <Typography color={colors.grey[100]} variant="h5" fontWeight="400">
                        性别
                    </Typography>
                    <Typography color={colors.grey[100]} variant="h5" fontWeight="400" >
                        手機
                    </Typography>
                    <Typography color={colors.grey[100]} variant="h5" fontWeight="400" >
                        更新資料
                    </Typography>
                </Box>

                {mockDataUser.map((user, i) => (
                    <Box
                        key={`${user.id}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        p="10px"
                    >
                        <Box>
                            <Typography variant="h5" color={colors.grey[100]} >
                                {user.username}
                            </Typography>
                        </Box>
                        <Box color={colors.grey[100]} pl={"4.5rem"}>{user.status}</Box>
                        <Box color={colors.grey[100]} pl={"6rem"}>{user.sex === 0 ? (<p>男</p>) : (<p>女</p>)}</Box>
                        <Box color={colors.grey[100]} pl={"5rem"}>{user.phone}</Box>
                        <Box
                            display={"flex"}
                            p="0px 10px"
                            borderRadius="4px">
                            <UserListModal buttonTitle="詳細" id={user.id} />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box >

    )
}

export default UserManagement







// {stores.map((store, i) => (
//     <Box
//         key={`${store.id}-${i}`}
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//         borderBottom={`4px solid ${colors.primary[500]}`}
//         p="10px"
//     >
//         <Box>
//             <Typography variant="h5" color={colors.grey[100]} >
//                 {store.name}
//             </Typography>
//         </Box>
//         <Box color={colors.grey[100]}>{store.lineUrl}</Box>
//         <Box
//             display={"flex"}
//             p="0px 10px"
//             borderRadius="4px">
//             <UserListModal buttonTitle="詳細資料" />
//         </Box>
//     </Box>
// ))}