import React, { useEffect, useState, useContext, useRef } from 'react'
import { useQuery, gql } from '@apollo/client'

// QUERIES
import { mockDataUser, mockStoreData } from "../../data/mockData";
// THEME
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
// ICONS
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { color } from '@mui/system';
import UserListModal from '../../components/Modal/UserListModal';
import { citiesData } from "../../data/mockData";
import StoreListModal from '../../components/Modal/StoreListModal';


const StoreManagement = () => {
    //THEME
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    // STATES
    const [searchFilter, setSearchFilter] = useState('');
    const [cityFilter, setCityFilter] = useState('');

    //REF
    const brandRef = useRef('');
    const searchRef = useRef('');

    //FUNCTIONS
    const handleSearchChange = (e) => {
        setSearchFilter(e.target.value);
    };
    const handleCityChange = (e) => {
        setCityFilter(e.target.value);
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
    const submitSearch = () => {
        console.log(brandRef.current.value + " " + searchRef.current.value + searchFilter + cityFilter);
    }

    return (
        <Box p={2}>
            <h1 className='userManagement_title'>店面管理</h1>
            {/* SEARCH DIV */}
            <Box display="flex" marginBottom={5}>
                {/* name Search */}
                <Box
                    display="flex"
                    mr={2}
                    backgroundColor={colors.primary[400]}
                    borderRadius="10px">
                    <InputBase sx={{ ml: 2, pr: 2, flex: 1, minWidth: "200px" }} placeholder="品牌過濾" inputRef={brandRef} />
                </Box>
                <Box
                    display="flex"
                    mr={2}
                    backgroundColor={colors.primary[400]}
                    borderRadius="10px"
                    alignItems={"center"}>
                    <InputBase sx={{ m: "0 1rem", height: "100%" }} placeholder="查詢" inputRef={searchRef} />
                    <FormControl sx={{ minWidth: 150, m: ".8rem .5rem .5rem .5rem" }} >
                        <InputLabel id="demo-simple-select-label">查詢過濾</InputLabel>
                        <Select
                            sx={{ borderRadius: "10px", background: colors.primary[400], maxHeight: "40px" }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={searchFilter}
                            label="searchFilter"
                            onChange={handleSearchChange}
                        >
                            <MenuItem value={"店面名"}>店面名</MenuItem>
                            <MenuItem value={"負責人"}>負責人</MenuItem>
                            <MenuItem value={"負責人手機號"}>負責人手機號</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl sx={{ minWidth: 150, height: "100%" }}>
                        <InputLabel id="demo-simple-select-label" >縣市過濾</InputLabel>
                        <Select
                            sx={{ borderRadius: "10px", background: colors.primary[400], height: "100%", width: "auto" }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={cityFilter}
                            label="cityFilter"
                            onChange={handleCityChange}
                        >
                            {citiesData.map((city, i) => (
                                <MenuItem
                                    value={city.name}
                                    key={`${city.id}-${i}`}
                                >
                                    {city.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

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
                        店面名稱
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    colors={colors.grey[100]}
                    p="10px"
                >

                    <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"}>ID</Box>
                    <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"}>店面名稱</Box>
                    <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"}>狀態</Box>
                    <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"}>品牌名稱</Box>
                    <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"}>店面地址</Box>
                    <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"}>更新資料</Box>
                </Box>

                {mockStoreData.map((store, i) => (
                    <Box
                        key={`${store.id}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        p="10px"
                    >
                        <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"}>{store.id}</Box>
                        <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"}>{store.name}</Box>
                        <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"}>{store.status}</Box>
                        <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"}>{store.brandInfo.name}</Box>
                        <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"}>{store.storeAddress.city}</Box>
                        <Box
                            width={"15%"}
                            display={"flex"}
                            alignItems={"center"} justifyContent={"center"}
                            borderRadius="4px">
                            <StoreListModal type="edit" id={store.id} />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box >
    )
}

export default StoreManagement