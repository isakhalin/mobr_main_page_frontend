import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

/** MUI Material Comps */
import {Box, Button, TextField, Typography} from "@mui/material"

/** Include Thunks */
import { sendProfile } from '../store/profile';

/** Компонент страницы профиля пользователя
 * @param session Принимает объект сессии из файрбейза
 * @returns {*}
 * @constructor
 */
export const ProfilePage = ({session}) => { // session не используется в текущей имплементации
    const dispatch = useDispatch();

    const {
        id,
        date,
        firstName,
        lastName,
        middleName,
        dept,
        isMinobr,
        isAdmin,
        org,
        prevOrg,
        phoneNumber,
        phoneNumberMobile,
        position,
        room,
        email,
        avatar,
    } = useSelector((state) => state.profile.form)

    const [profile, setProfile] = useState({
        //date: date,           // Не редактируется в этом компоненте (Генерится автоматически при создании профиля)
        firstName: firstName,   // Обязательное для заполнения в заявке
        lastName: lastName,     // Обязательное для заполнения в заявке
        middleName: middleName, // Обязательное для заполнения в заявке
        dept: dept,             // Обязательное для заполнения в заявке
        //isMinobr: isMinobr,   // Не редактируется в этом компоненте
        //isAdmin: isAdmin,     // Не редактируется в этом компоненте
        org: org,               // Обязательное для заполнения в заявке
        //prevOrg: prevOrg,
        phoneNumber: phoneNumber,               // Обязательное для заполнения в заявке
        phoneNumberMobile: phoneNumberMobile,   // Обязательное для заполнения в заявке
        position: position,                     // Не редактируется в этом компоненте (Обязательное для заполнения в заявке)
        room: room,             // Обязательное для заполнения в заявке
        email: email,           // Обязательное для заполнения в заявке
        //avatar: avatar,       // Не редактируется в этом компоненте
    });

    /** Отправляет свойства профиля для изменения их в БД и глобальном стейте
     * @param id Идентификатор изменяемого профиля пользователя (MongoDB id пользователя)
     * @param profile Объект со свойствами профиля, которые будут внесены в профиль в БД и глобальный стейт
     */
    const postProfile = (id, profile) => {
        dispatch(sendProfile(id, profile)); // Вызываем санк для отправки части профиля в БД и глобальный стейт
    };

    return (
        <Typography>
            <h4>Профиль сотрудника:</h4>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 0.3, width: '25ch', fontSize: 12},
                    display: "flex",
                    flexDirection: "column"
                }}
                noValidate
                autoComplete="off"

            >
                <TextField
                    id="standard-basic-date"
                    required={false}
                    sx={{maxWidth: '500px', minWidth: '300px'}}
                    label="Дата регистрации"
                    type="text"
                    variant="standard"
                    value={date}
                    disabled
                    // onChange={(e) => setProfile({...profile, date: e.target.value})}
                />
                <TextField
                    id="standard-basic-lastName"
                    required={true}
                    sx={{maxWidth: '500px', minWidth: '300px'}}
                    label="Фамилия"
                    type="text"
                    variant="standard"
                    value={profile.lastName}
                    onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                />
                <TextField
                    id="standard-basic-firstName"
                    required={true}
                    sx={{maxWidth: '500px', minWidth: '300px'}}
                    label="Имя"
                    type="text"
                    variant="standard"
                    value={profile.firstName}
                    onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                />
                <TextField
                    id="standard-basic-middleName"
                    required={true}
                    sx={{maxWidth: '500px', minWidth: '300px'}}
                    label="Отчество"
                    type="text"
                    variant="standard"
                    value={profile.middleName}
                    onChange={(e) => setProfile({...profile, middleName: e.target.value})}
                />
                <TextField
                    id="standard-basic-org"
                    required={true}
                    sx={{maxWidth: '500px', minWidth: '300px'}}
                    label="Организация"
                    type="text"
                    variant="standard"
                    value={profile.org}
                    onChange={(e) => setProfile({...profile, org: e.target.value})}
                />
                <TextField
                    id="standard-basic-dept"
                    required={true}
                    sx={{maxWidth: '500px', minWidth: '300px'}}
                    label="Отдел"
                    type="text"
                    variant="standard"
                    value={profile.dept}
                    onChange={(e) => setProfile({...profile, dept: e.target.value})}
                />
                <TextField
                    id="standard-basic-phoneNumber"
                    required={true}
                    sx={{maxWidth: '500px', minWidth: '300px'}}
                    label="Телефон"
                    type="text"
                    variant="standard"
                    value={profile.phoneNumber}
                    onChange={(e) => setProfile({...profile, phoneNumber: e.target.value})}
                />
                <TextField
                    id="standard-basic-phoneNumberMobile"
                    required={true}
                    sx={{maxWidth: '500px', minWidth: '300px'}}
                    label="Мобильный телефон"
                    type="text"
                    variant="standard"
                    value={profile.phoneNumberMobile}
                    onChange={(e) => setProfile({...profile, phoneNumberMobile: e.target.value})}
                />
                <TextField
                    id="standard-basic-position"
                    required={true}
                    sx={{maxWidth: '500px', minWidth: '300px'}}
                    label="Должность"
                    type="text"
                    variant="standard"
                    value={profile.position}
                    onChange={(e) => setProfile({...profile, position: e.target.value})}
                />
                <TextField
                    id="standard-basic-room"
                    required={true}
                    sx={{maxWidth: '500px', minWidth: '300px'}}
                    label="Кабинет"
                    type="text"
                    variant="standard"
                    value={profile.room}
                    onChange={(e) => setProfile({...profile, room: e.target.value})}
                />
                <TextField
                    id="standard-basic-email"
                    required={true}
                    sx={{maxWidth: '500px', minWidth: '300px'}}
                    label="Электронная почта"
                    type="text"
                    variant="standard"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                />
                <Button
                    variant="outlined"
                    onClick={() => postProfile(id, profile)}
                    size="small"
                    sx={{
                        fontSize: 12,
                    }}
                >
                    Сохранить
                </Button>
            </Box>
            {/*<Box sx={{'& > :not(style)': {m: 0.2, fontSize: 12}}}>*/}
            {/*    /!*<FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: 12}}} control={<Checkbox />} label="Сотрудник министерства" />*!/*/}
            {/*    <Button variant="outlined" onClick={createNewUser}>Сформировать</Button>*/}
            {/*</Box>*/}
        </Typography>
    );
}