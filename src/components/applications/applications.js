import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

/** include Thunks */
import {getApplications} from '../../store/applications'

/** MUI Material */
import {IconButton, MenuItem, Menu} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

/** Include Custom Comps */
// import {SamplesButton} from "../excel/SamplesButton";
// import {AddUser} from '../add-users'
import {Application} from "./application";

export const Applications = () => {
    const dispatch = useDispatch();
    const {applications, status} = useSelector((state) => state.applications); // Получаем апликейшоны из глобального стейта





    useEffect(() => {
        dispatch(getApplications())
    }, [])

    return (
        <div>
            {/*{*/}
            {/*    addUserVisibility*/}
            {/*        ? <AddUser/>*/}
            {/*        : <></>*/}
            {/*}*/}
            {
                status.pendingGet ?
                    <div>Loading...</div>
                    :
                    applications.map((el, idx) => (
                        <Application key={el.date} application={el}/>
                    ))
            }
        </div>
    );
};