import React, { useEffect, useState, useContext, useRef } from 'react'
import { useQuery, gql } from '@apollo/client'
// QUERIES
import { GetStoresByCoordinate } from '../../graphQL/Queries'
import { mockBrandData, mockTransactions } from "../../data/mockData";
// THEME
import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";

// ICONS
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { color } from '@mui/system';
import BrandListModal from '../../components/Modal/BrandListModal';
import UserListModal from '../../components/Modal/UserListModal';

const BrandManagement = () => {
    //THEME
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);


    // STATES
    // const [filter, setFilter] = useState('品牌名');
    const [status, setStatus] = useState('');
    const [review, setReview] = useState('');

    //REF
    const searchValueRef = useRef('');
    const filterRef = useRef('品牌名');

    //FUNCTIONS
    // const handleFilterChange = (e) => {
    //     setFilter(e.target.value);
    // };
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };
    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };
    const submitSearch = () => {
        console.log("search: " + searchValueRef.current.value + " " + filterRef.current.value + " " + status + " " + review);
    };



    return (
        <Box p={2}>
            <h1 className='userManagement_title'>品牌管理</h1>
            <p>Search: Filter {filterRef.current.value}, Status {status}, Review: {review}</p>
            {/* SEARCH DIV */}
            <Box display="flex" paddingBottom={5}>
                {/* name Search */}
                <Box
                    display="flex"
                    mr={2}
                    backgroundColor={colors.primary[400]}
                    borderRadius="10px">
                    <InputBase sx={{ ml: 2, pr: 2, flex: 1, minWidth: "200px" }} placeholder="Search" inputRef={searchValueRef} />
                </Box>
                <FormControl sx={{ minWidth: 150 }} >
                    <InputLabel id="demo-simple-select-label" >查詢過濾</InputLabel>
                    <Select
                        sx={{ borderRadius: "10px", background: colors.primary[400] }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filterRef.current.value}
                        label="Filter"
                        inputRef={filterRef}
                    // onChange={handleFilterChange}
                    >
                        <MenuItem value={"品牌名"}>品牌名</MenuItem>
                        <MenuItem value={"負責人"}>負責人</MenuItem>
                        <MenuItem value={"負責人手機號"}>負責人手機號</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 150, m: "0 10px" }} >
                    <InputLabel id="demo-simple-select-label" >狀態</InputLabel>
                    <Select
                        sx={{ borderRadius: "10px", background: colors.primary[400] }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Status"
                        onChange={handleStatusChange}
                    >
                        <MenuItem value={"無"}>無</MenuItem>
                        <MenuItem value={"正常"}>正常</MenuItem>
                        <MenuItem value={"停用"}>停用</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ minWidth: 150 }} >
                    <InputLabel id="demo-simple-select-label" >審核</InputLabel>
                    <Select
                        sx={{ borderRadius: "10px", background: colors.primary[400] }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={review}
                        label="Review"
                        onChange={handleReviewChange}
                    >
                        <MenuItem value={"無"}>無</MenuItem>
                        <MenuItem value={"通過"}>通過</MenuItem>
                        <MenuItem value={"待審核"}>待審核</MenuItem>
                        <MenuItem value={"封鎖"}>封鎖</MenuItem>
                    </Select>
                </FormControl>
                {/* SEARCH BTN */}
                <Button sx={{
                    backgroundColor: colors.blueAccent[400], color: colors.grey[100],
                    minWidth: "150px",
                    borderRadius: "10px",
                    marginLeft: "20px",
                    padding: "0px"
                }}
                    onClick={submitSearch}>
                    <SearchIcon sx={{ mr: "10px", fontsize: ".8rem" }} />
                    <p className='btn_text'>查詢</p>
                </Button>
                <Box
                    display="flex"
                    backgroundColor={colors.primary[400]}
                    borderRadius="10px"
                    marginLeft={"auto"}
                    padding={"0"}
                >
                    <BrandListModal type="new" />
                </Box>

            </Box>


            {/* TABLE DIV */}
            <Box className="recent_transaction_container"
                backgroundColor={colors.primary[400]}
                borderRadius="10px"
                height={"51vh"}
                overflow="auto"
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
                        品牌名稱
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottom={`4px solid ${colors.primary[500]}`}
                    background={colors.grey[300]}
                    p="10px"
                    maxHeight={"100px"}
                >
                    <Box minWidth={"100px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Typography color={colors.grey[100]} variant="h5" >
                            品牌名
                        </Typography>
                    </Box>
                    <Box minWidth={"100px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Typography color={colors.grey[100]} variant="h5">
                            品牌負責人
                        </Typography>
                    </Box>
                    <Box minWidth={"100px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Typography color={colors.grey[100]} variant="h5" >
                            合約到期日
                        </Typography>
                    </Box>
                    <Box minWidth={"100px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Typography color={colors.grey[100]} variant="h5" >
                            狀態
                        </Typography>
                    </Box>
                    <Box minWidth={"100px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Typography color={colors.grey[100]} variant="h5">
                            審核狀態
                        </Typography>
                    </Box>
                    <Box minWidth={"100px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Typography color={colors.grey[100]} variant="h5">
                            更新品牌
                        </Typography>
                    </Box>
                </Box>

                {/* MOCK DATA */}
                {mockBrandData.map((brand, i) => (
                    <Box
                        key={`${brand.id}-${i}`}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        p="10px"
                    >
                        <Box color={colors.grey[100]} minWidth={"100px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <Typography variant="h5" color={colors.grey[100]} >
                                {brand.brandName}
                            </Typography>
                        </Box>
                        <Box color={colors.grey[100]} minWidth={"100px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <Typography variant="h5" color={colors.grey[100]} >
                                {brand.brandManager}
                            </Typography>
                        </Box>
                        <Box color={colors.grey[100]} minWidth={"100px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <Typography variant="h5" color={colors.grey[100]} >
                                {brand.brandExpireDate}
                            </Typography>
                        </Box>
                        <Box color={colors.grey[100]} minWidth={"100px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <Typography variant="h5" color={colors.grey[100]} >
                                {brand.status}
                            </Typography>
                        </Box>
                        <Box color={colors.grey[100]} minWidth={"100px"}>
                            <Typography variant="h5" color={colors.grey[100]} >
                                {brand.review}
                            </Typography>
                        </Box>
                        <Box
                            display={"flex"}
                            borderRadius="4px">
                            <BrandListModal type="edit" id={brand.id} />
                        </Box>
                    </Box>
                ))}

            </Box>
        </Box >
    )
}

export default BrandManagement