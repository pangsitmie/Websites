import React, { useEffect, useState, useContext, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@apollo/client'

// THEME
import { Box, Button, Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
// ICONS
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import CreateMachineModal from './CreateMachineModal';
import MachineListModal from './MachineListModal';
import { GetStore } from '../../graphQL/Queries';


const MachineManagement = () => {
    const location = useLocation();
    const state = location.state;
    console.log(state); // output: "the-page-id"
    console.log("STATE" + state.data.id); // output: "the-page-id"
    console.log("STATE" + state.data.name); // output: "the-page-id"

    //THEME
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    // STATES
    const [searchFilter, setSearchFilter] = useState('');
    const [cityFilter, setCityFilter] = useState('');
    const [machineData, setMachineData] = useState([]);

    //REF
    const brandRef = useRef('');
    const searchRef = useRef('');

    const { loading, error, data } = useQuery(GetStore
        , {
            variables: {
                args: [
                    {
                        id: state.data.id
                    }
                ],
            }
        }
    );
    useEffect(() => {
        if (data) {
            console.log(data.getStore[0].managerGetMachines);
            setMachineData(data.getStore[0].managerGetMachines);
        }
        else {
            console.log("no data");
        }
    }, [data]);


    //FUNCTIONS
    const handleSearchChange = (e) => {
        setSearchFilter(e.target.value);
    };
    const handleCityChange = (e) => {
        setCityFilter(e.target.value);
    };

    const submitSearch = () => {
        console.log(brandRef.current.value + " " + searchRef.current.value + searchFilter + cityFilter);
    }

    return (
        <Box p={2}>
            <h1 className='userManagement_title'>{state.data.name} - 機台管理</h1>
            <Typography variant="h4" sx={{ color: colors.grey[400], margin: "-1rem 0 1rem 0" }}>{state.data.location.city} - {state.data.location.district} - {state.data.location.address}</Typography>
            {/* SEARCH DIV */}
            <Box display="flex" marginBottom={5}>
                {/* name Search */}
                <Box
                    display="flex"
                    mr={2}
                    backgroundColor={colors.primary[400]}
                    borderRadius="10px">
                    <InputBase sx={{ ml: 2, pr: 2, flex: 1, minWidth: "200px" }} placeholder="機台名稱" inputRef={brandRef} />
                </Box>

                {/* SEARCH BTN */}
                <Button className=""
                    sx={{
                        backgroundColor: colors.blueAccent[400],
                        color: colors.grey[100],
                        minWidth: "150px",
                        height: "50px",
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
                    borderRadius="10px"
                    marginLeft={"auto"}
                    padding={"0"}
                >
                    <Button className=""
                        sx={{
                            backgroundColor: colors.primary[300],
                            color: colors.grey[100],
                            minWidth: "120px",
                            height: "50px",
                            borderRadius: "10px",
                            padding: "0px",
                            marginRight: "2rem",
                            ':hover': {
                                bgcolor: colors.primary[400],
                                border: '1px solid white',
                            }
                        }}
                        onClick={submitSearch}
                    >
                        <p className='btn_text'>下載 QR</p>
                    </Button>

                    <CreateMachineModal props={state.data} />
                </Box>
            </Box>


            {/* TABLE DIV */}
            <Box className="recent_transaction_container"
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
                        機台清單
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

                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="500">UUID</Typography>
                    </Box>
                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="500">機台名稱</Typography>
                    </Box>
                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="500">機台號碼</Typography>
                    </Box>
                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="500">連接狀態</Typography>
                    </Box>
                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="500">更新資料</Typography>
                    </Box>
                </Box>

                {/* machine data map here */}
                <Box
                    backgroundColor={colors.primary[400]}
                    borderRadius="10px"
                    height={"100%"}
                    overflow={"auto"}
                >
                    {machineData.map((item, i) => (
                        <Box
                            key={`${item.id}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="10px"
                        >
                            <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"} padding={"0 1rem"}>{item.uuid}</Box>
                            <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"}>{item.id} - {item.name}</Box>
                            <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"}>{item.code}</Box>
                            <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"}>
                                {(() => {
                                    if (item.connStatus === true) {
                                        return (
                                            <Typography variant="h5" color={colors.greenAccent[400]} sx={{ margin: ".5rem .5rem" }}>
                                                連線中
                                            </Typography>
                                        )
                                    }
                                    else {
                                        return (
                                            <Typography variant="h5" color={colors.redAccent[500]} sx={{ margin: ".5rem .5rem" }}>
                                                已斷線
                                            </Typography>
                                        )
                                    }
                                })()}
                            </Box>
                            <Box
                                width={"20%"}
                                display={"flex"}
                                alignItems={"center"} justifyContent={"center"}
                                borderRadius="4px">
                                <MachineListModal props={item} />
                            </Box>
                        </Box>
                    ))}
                </Box>

            </Box>
        </Box >
    )
}
const defaultOptions = {
    significantDigits: 2,
    thousandsSeparator: ',',
    decimalSeparator: '.',
    symbol: 'NT'
}

const currencyFormatter = (value, options) => {
    if (typeof value !== 'number') value = 0.0
    options = { ...defaultOptions, ...options }
    value = value.toFixed(options.significantDigits)

    const [currency, decimal] = value.split('.')
    return `${options.symbol} ${currency.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        options.thousandsSeparator
    )}${options.decimalSeparator}${decimal}`
}

export default MachineManagement