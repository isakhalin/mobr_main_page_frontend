import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

/** include Thunks */
import {getApplications} from '../../store/applications'

/** Include Custom Comps */
import {Application} from "./application";

export const Applications = () => {
    const dispatch = useDispatch();
    const {applications, status} = useSelector((state) => state.applications); // Получаем апликейшоны из глобального стейта
    const {profiles} = useSelector((state) => state.profile);       //Получам профили всех юзеров из глобального стейта

    useEffect(() => {
        dispatch(getApplications())
    }, [])

    return (
        <div>
            {
                status.pendingGet ?
                    <div>Загружаю...</div>
                    :
                    applications.map((el, idx) => (
                        <Application
                            key={el.date}
                            application={el}
                            complete={el.isComplete}
                        />
                    ))
            }
        </div>
    );
};