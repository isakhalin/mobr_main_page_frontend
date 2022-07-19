import React from 'react';
import {useSelector} from "react-redux";

/** MUI Material Comps */
import { Button } from "@mui/material"

export const ProfilePage = () => {
    const {
        firstName,
        lastName,
        middleName,
        dept,
        org,
        phoneNumber,
        phoneNumberMobile
    } = useSelector((state) => state.profile.form)

    return (
        <div>
            Мои личные данные:
            {/*TODO Перенести стили*/}
            <div style={{border: "solid 1px black", borderRadius: "5px", padding: "5px", margin: "5px", textAlign: "left"}}>
                <div><span>Фамилия: </span><span>{lastName}</span></div>
                <div><span>Имя: </span><span>{firstName}</span></div>
                <div><span>Отчество: </span><span>{middleName}</span></div>
                <div><span>Организация: </span><span>{org}</span></div>
                <div><span>Отдел: </span><span>{dept}</span></div>
                <div><span>Рабочий телефон: </span><span>{phoneNumber ? phoneNumber : "Не указано"}</span></div>
                <div><span>Мобильный телефон: </span><span>{phoneNumberMobile ? phoneNumberMobile : "Не указано"}</span></div>
            </div>
            <Button variant="outlined">Редактировать</Button>
        </div>
    );
};

        // firstName: "",
        // lastName: "",
        // middleName: "",
        // dept: "",
        // avatar: "",
        // isAdmin: false,
        // org: "",
        // phoneNumber: "",
        // phoneNumberMobile: ""