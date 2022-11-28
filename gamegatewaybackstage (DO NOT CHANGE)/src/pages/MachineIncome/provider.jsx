import React, { createContext, useReducer } from "react";
import MachineIncome from './index'

//取得實體積台所有營銷紀錄
import { useQuery, gql } from '@apollo/client';

export let physicalMachineMarketings = {};
let hasComplete = false;

const GET_PhysicalMachineMarketing = gql`
    query GetMachineMarketings($params: MachineMarketingQueryParams!) {
        getMachineMarketings(params: $params) {
            id
            create
            gameSerialId
            seatNumeric
            machineCode
            income
            expenditure
            daily {
                id
                date
                create
                gameSerialId
                seatNumeric
                machineCode
                income
                expenditure
            }
            monthly {
                id
                date
                create
                gameSerialId
                seatNumeric
                machineCode
                income
                expenditure
            }
            annually {
                id
                date
                create
                gameSerialId
                seatNumeric
                machineCode
                income
                expenditure
            }
        }
    }
`;

function GetPhysicalMachineMarketing({params}) {
    const { loading, error, data } = useQuery(GET_PhysicalMachineMarketing, {
        variables: { params }
    });
  
    if (loading) {
        console.log(loading)
        return null;
    }

    if (error) {
        console.log(JSON.stringify(error, null, 2));
        return null;
    }

    console.log(data);

    if (!hasComplete) {
        let _formatObject = {};
        //console.log(data.getMachineMarketings);
        (data.getMachineMarketings).map((value) => {
            let _serialId = value.gameSerialId;
            let _seat = value.seatNumeric;
            if (!(_serialId in _formatObject)) {
                _formatObject[_serialId] = {};
            }
            if (!(_seat in _formatObject[_serialId])) {
                _formatObject[_serialId][_seat] = [];
            }
            _formatObject[_serialId][_seat].push(value);
        })
        //console.log(_formatObject)
        physicalMachineMarketings = _formatObject;
        hasComplete = true;
    }

    return data;
}
//取得實體積台所有營銷紀錄 End

let initialState = {
    search: '',
    gameSerialId: '',
    seat: '',
    gamePageInfo: 1,
    seatPageInfo: 1,
    recordPageInfo: 1,
    actionScene: '',
    mainScene: ''
};

export const ParentContext = createContext(initialState)

const reducer = (state, action) => {
    switch (action.type) {
        case "PUT_SEARCH":
            return { ...state, search: action.payload };
        case "PUT_GAMESERIALID":
            return { ...state, gameSerialId: action.payload };
        case "PUT_SEAT":
            return { ...state, seat: action.payload };
        case "PUT_GAMEPAGEINFO":
            return { ...state, gamePageInfo: action.payload };
        case "PUT_SEATPAGEINFO":
            return { ...state, seatPageInfo: action.payload };
        case "PUT_RECORDPAGEINFO":
            return { ...state, recordPageInfo: action.payload };
        case "PUT_ACTIONSCENE":
            return { ...state, actionScene: action.payload };
        case "PUT_MAINSCENE":
            return { ...state, mainScene: action.payload };
        default:
            throw new Error();
    }
};

export const MachineIncomeLayout = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //取得實體積台所有營銷紀錄
    GetPhysicalMachineMarketing({
        "params": {
            
        }
    });
    //取得實體積台所有營銷紀錄 End

    return (
        <ParentContext.Provider value={[state, dispatch]}>
            <MachineIncome />
        </ParentContext.Provider>
    );
};



