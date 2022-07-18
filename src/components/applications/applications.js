import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

/** include Thunks */
import {getApplications} from '../../store/applications'

export const Applications = () => {
    const dispatch = useDispatch();
    const {applications, status} = useSelector((state) => state.applications); // Получаем апликейшоны из глобального стейта

    console.log("applications", applications)

    useEffect(() => {
        dispatch(getApplications())
    }, [])

    return (
        <div>
            {
                status.pendingGet ?
                    <div>Loading...</div>
                    :
                    applications.map((el) => (
                        <div key={el.date} style={{border: "solid 1px black", borderRadius: "5px", marginBottom: "5px", padding: "5px", textAlign: "left"}}>
                            <div><span>Дата заявки: </span><span>{el.date}</span></div>
                            <div><span>ФИО: </span><span>{el.lastName} {el.firstName} {el.middleName}</span></div>
                            <div><span>Место предыдущей работы: </span><span>{el.prevOrg}</span></div>
                            <div><span>Место текущего трудоустройства: </span><span>{el.org}</span></div>
                            <div><span>Отдел: </span><span>{el.dept}</span></div>
                            <div><span>Должность: </span><span>{el.position}</span></div>
                            <div><span>т.: </span><span>{el.phone}</span></div>
                            <div><span>Кабинет: </span><span>{el.room}</span></div>
                        </div>
                    ))
            }
        </div>
    );
};