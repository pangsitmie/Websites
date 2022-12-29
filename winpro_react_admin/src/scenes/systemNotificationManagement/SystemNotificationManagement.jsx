import React, { useEffect, useState, useRef } from 'react'
import { useQuery } from '@apollo/client'
import { format } from 'date-fns';

// QUERIES
import { ManagerGetAllNotificationSchedules } from '../../graphQL/Queries'
// THEME
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

// ICONS
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import CreateSystemNotificationModal from './CreateSystemNotificationModal';
import SystemNotificationListModal from './SystemNotificationListModal';
// import BrandListModal from '../brandManagement/BrandListModal';
// import CreateBrandModal from '../../components/Modal/Brand/CreateBrandModal';
// import ConfirmModal from '../../components/Modal/ConfirmModal';

const SystemNotificationManagement = () => {
    //THEME
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // STATES
    // const [filter, setFilter] = useState('品牌名');
    const [status, setStatus] = useState('');
    const [review, setReview] = useState('');

    //REF
    const searchValueRef = useRef('');
    const filterRef = useRef('品牌名');


    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };
    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const submitSearch = () => {
        // LOG SEARCH STATES
        console.log("search: " + searchValueRef.current.value + " " + status + " " + review);

        //CALL SEARCH FUNCTION
        let value = searchValueRef.current.value;
        if (value.length > 2) {
            let search = arraySearch(notifications, value);
            setNotifications(search)
        } else { //IF SEARCH VALUE IS LESS THAN 3 CHARACTERS, RESET BRANDS TO INIT BRANDS
            setNotifications(initNotifications)
        }
    };
    //SEARCH FUNCTION
    const arraySearch = (array, keyword, filter) => {
        const searchTerm = keyword

        return array.filter(value => {
            return value.name.match(new RegExp(searchTerm, 'g')) ||
                value.principal.name.match(new RegExp(searchTerm, 'g'))
        })
    }

    //GRAPHQL
    const { loading, error, data } = useQuery(ManagerGetAllNotificationSchedules);
    const [initNotifications, setInitNotifications] = useState([]);
    const [notifications, setNotifications] = useState([]);
    useEffect(() => {
        if (data) {
            console.log(data);
            setInitNotifications(data.managerGetAllNotificationSchedules); //all brand datas
            setNotifications(data.managerGetAllNotificationSchedules); //datas for display
        }
        else {
            console.log(error);
            console.log(loading);
        }
    }, [data]);

    return (
        <Box p={2}>
            <h1 className='userManagement_title'>系統通知</h1>
            {/* SEARCH DIV */}
            <Box display="flex" paddingBottom={5}>
                {/* name Search */}
                <Box
                    display="flex"
                    mr={"1rem"}
                    backgroundColor={colors.primary[400]}
                    borderRadius="10px">
                    <InputBase sx={{ ml: 2, pr: 2, flex: 1, minWidth: "200px" }} placeholder="品牌名 或 負責人" inputRef={searchValueRef} />
                </Box>
                <FormControl sx={{ minWidth: 150, mr: "1rem" }} >
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
                    backgroundColor: colors.primary[300],
                    color: colors.grey[100],
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
                    <CreateSystemNotificationModal />
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
                        通知清單
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
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="500">Triger At</Typography>
                    </Box>
                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="500">Title</Typography>
                    </Box>
                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="500">Expire At</Typography>
                    </Box>
                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="500">狀態</Typography>
                    </Box>
                    <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"}>
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="500">刪除</Typography>
                    </Box>
                </Box>
                <Box
                    backgroundColor={colors.primary[400]}
                    borderRadius="10px"
                    height={"100%"}
                    overflow={"auto"}
                >
                    {/* MAP DATA */}
                    {notifications.map((item, i) => (
                        <Box
                            key={`${item.id}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="10px"
                        >
                            <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"}>{format(new Date(item.triggerAt * 1000), 'MM/dd/yyyy - HH:mm:ss')}</Box>
                            <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"}>{item.notification.title}</Box>
                            <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"}>
                                {(() => {
                                    if (item.notification.expireAt === null) {
                                        return "無"
                                    }
                                    else {
                                        return format(new Date(item.notification.expireAt * 1000), 'MM/dd/yyyy - HH:mm:ss')
                                    }
                                })()}
                            </Box>
                            <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"}>
                                {(() => {
                                    if (item.status.name === "done") {
                                        return (
                                            <Typography variant="h5" color={colors.greenAccent[500]} sx={{ margin: ".5rem .5rem" }}>
                                                完成
                                            </Typography>)
                                    }
                                    else if (item.status.name === "failed") {
                                        return (
                                            <Typography variant="h5" color={colors.redAccent[500]} sx={{ margin: ".5rem .5rem" }}>
                                                失敗
                                            </Typography>)
                                    }
                                    else {
                                        return (
                                            <Typography variant="h5" color={colors.primary[100]} sx={{ margin: ".5rem .5rem" }}>
                                                正常
                                            </Typography>)
                                    }
                                })()}
                            </Box>

                            <Box width={"20%"} display="flex" alignItems={"center"} justifyContent={"center"} textAlign={"center"}>
                                {/* FIXME: change title to delete */}
                                <SystemNotificationListModal props={item} />
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box >
    )
}

export default SystemNotificationManagement