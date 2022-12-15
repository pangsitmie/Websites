import React, { useEffect, useState, useContext, useRef } from 'react'
import { useQuery, gql } from '@apollo/client'

// QUERIES
import { GetAllStores } from '../../graphQL/Queries'
// THEME
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
// ICONS
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { color } from '@mui/system';
import { citiesData } from "../../data/mockData";
import StoreListModal from '../../components/Modal/Store/StoreListModal';
import CreateStoreModal from '../../components/Modal/Store/CreateStoreModal'


const StoreManagement = () => {
    //THEME
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

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

    const submitSearch = () => {
        console.log(brandRef.current.value + " " + searchRef.current.value + searchFilter + cityFilter);
        //CALL SEARCH FUNCTION
        let brandValue = brandRef.current.value;
        let storeValue = searchRef.current.value;
        if (brandValue.length > 2 && storeValue.length === 0) {
            let search = brandArraySearch(stores, brandValue);
            setStores(search)
        }
        else if (brandValue.length === 0 && storeValue.length > 2) {
            let search = storeArraySearch(stores, storeValue);
            setStores(search)
        }
        else { //IF SEARCH VALUE IS LESS THAN 3 CHARACTERS, RESET BRANDS TO INIT BRANDS
            setStores(initStores)
        }
    }

    //BRAND SEARCH FUNCTION
    const brandArraySearch = (array, keyword) => {
        const searchTerm = keyword

        return array.filter(value => {
            return value.brand.name.match(new RegExp(searchTerm, 'g'))
        })
    }

    // STORE SEARCH FUNCTION
    const storeArraySearch = (array, keyword) => {
        const searchTerm = keyword

        return array.filter(value => {
            return value.name.match(new RegExp(searchTerm, 'g')) ||
                value.principal.name.match(new RegExp(searchTerm, 'g'))
        })
    }

    //GQL
    const { loading, error, data } = useQuery(GetAllStores, { variables: { limit: 10, offset: 0 } });
    const [initStores, SetInitStores] = useState([]);
    const [stores, setStores] = useState([]);
    useEffect(() => {
        if (data) {
            console.log(data.getAllStores);
            setStores(data.getAllStores);
            SetInitStores(data.getAllStores);
        }

    }, [data]);

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
                    <InputBase sx={{ ml: 2, pr: 2, flex: 1, minWidth: "200px" }} placeholder="品牌名" inputRef={brandRef} />
                </Box>
                <Box
                    display="flex"
                    mr={2}
                    backgroundColor={colors.primary[400]}
                    borderRadius="10px"
                    alignItems={"center"}>
                    <InputBase sx={{ m: "0 1rem", height: "100%" }} placeholder="店面名 或 負責人" inputRef={searchRef} />
                    <FormControl sx={{ minWidth: 150, padding: "5px" }} >
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
                        backgroundColor: colors.primary[300],
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

                <Box
                    display="flex"
                    backgroundColor={colors.primary[400]}
                    borderRadius="10px"
                    marginLeft={"auto"}
                    padding={"0"}
                >
                    <CreateStoreModal type="new" />
                </Box>
            </Box>


            {/* TABLE DIV */}
            <Box
                className="recent_transaction_container"
                backgroundColor={colors.primary[400]}
                borderRadius="10px"
                height={"40vh"}
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
                    <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"}>品牌名稱</Box>
                    <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"}>店面地址</Box>
                    <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"}>狀態</Box>
                    <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"}>更新資料</Box>
                </Box>
                <Box

                    backgroundColor={colors.primary[400]}
                    borderRadius="10px"
                    height={"100%"}
                    overflow={"auto"}
                >
                    {stores.map((store, i) => (
                        <Box
                            key={`${store.id}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="10px"
                        >
                            <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"}>{store.id}</Box>
                            <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"}>{store.name}</Box>
                            <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"}>{store.brand.name}</Box>
                            <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"}>{store.location.address}</Box>
                            <Box width={"15%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"}>
                                {(() => {
                                    if (store.status.name === "disable") {
                                        return (
                                            <Typography variant="h5" color={colors.primary[100]} sx={{ margin: ".5rem .5rem" }}>
                                                停用
                                            </Typography>)
                                    }
                                    else if (store.status.name === "banned") {
                                        return (
                                            <Typography variant="h5" color={colors.redAccent[500]} sx={{ margin: ".5rem .5rem" }}>
                                                封鎖
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

                            <Box
                                width={"15%"}
                                display={"flex"}
                                alignItems={"center"} justifyContent={"center"}
                                borderRadius="4px">
                                <StoreListModal props={store} />
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box >
    )
}

export default StoreManagement