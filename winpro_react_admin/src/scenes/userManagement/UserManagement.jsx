import React, { useEffect, useState, useRef } from 'react'
import { useQuery, } from '@apollo/client'
import "./userManagement.css"
// QUERIES
import { GetAllMember } from '../../graphQL/Queries'
// THEME
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

// ICONS
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import UserListModal from './UserListModal';


const UserManagement = () => {
    //THEME
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // STATES
    const [status, setStatus] = useState('');

    //REF
    const searchValueRef = useRef('');

    //FUNCTIONS
    const handleChange = (e) => {
        setStatus(e.target.value);
    };



    //GQL
    const { loading, error, data } = useQuery(GetAllMember);
    const [initMember, setInitMember] = useState([]);
    const [members, setMembers] = useState([]);
    useEffect(() => {
        if (data) {
            console.log(data.getAllMember);
            setInitMember(data.getAllMember);
            setMembers(data.getAllMember);
        }
        else {
            console.log(error);
        }
    }, [data]);

    const submitSearch = () => {
        //CALL SEARCH FUNCTION
        let searchValue = searchValueRef.current.value;
        console.log("submitSearch" + searchValue)

        if (searchValue.length > 2) {
            let search = memberArraySearch(members, searchValue);
            setMembers(search)
        }
        else { //IF SEARCH VALUE IS LESS THAN 3 CHARACTERS, RESET BRANDS TO INIT BRANDS
            setMembers(initMember)
        }
    }
    //SEARCH FUNCTION
    const memberArraySearch = (array, keyword) => {
        const searchTerm = keyword

        return array.filter(value => {
            return value.profile.nickname.match(new RegExp(searchTerm, 'g')) ||
                value.phone.number.match(new RegExp(searchTerm, 'g'))
        })
    }

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
                    <InputBase sx={{ ml: 2, pr: 2, flex: 1, minWidth: "200px" }} placeholder="Name & Phone Search" inputRef={searchValueRef} />
                </Box>
                {/* phone search */}
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
                        使用者清單
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
                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="500">ID</Typography>
                    </Box>
                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="500">暱稱</Typography>
                    </Box>
                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="500">手機</Typography>
                    </Box>
                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="500">狀態</Typography>
                    </Box>
                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="500">更新資料</Typography>
                    </Box>
                </Box>

                {members.map((member, i) => (
                    <Box
                        key={`${member.id}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        p="10px"
                    >
                        <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"}>{member.id}</Box>
                        <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"}>{member.profile.nickname}</Box>
                        <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"}>{member.phone.number}</Box>
                        <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"}>
                            {(() => {
                                if (member.status.name === "disable") {
                                    return (
                                        <Typography variant="h5" color={colors.primary[100]} sx={{ margin: ".5rem .5rem" }}>
                                            停用
                                        </Typography>)
                                }
                                else if (member.status.name === "banned") {
                                    return (
                                        <Typography variant="h5" color={colors.redAccent[500]} sx={{ margin: ".5rem .5rem" }}>
                                            封鎖
                                        </Typography>)
                                }
                                else if (member.status.name === "removed") {
                                    return (
                                        <Typography variant="h5" color={colors.redAccent[500]} sx={{ margin: ".5rem .5rem" }}>
                                            移除
                                        </Typography>)
                                }
                                else {
                                    return (
                                        <Typography variant="h5" color={colors.greenAccent[500]} sx={{ margin: ".5rem .5rem" }}>
                                            正常
                                        </Typography>)
                                }
                            })()}
                        </Box>
                        <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"}><UserListModal props={member} /></Box>


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







