import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

/** MUI Material Comps */
import {Box, Button, TextField, Typography} from "@mui/material"

/** Include Thunks */
import { sendProfile } from '../store/profile';

export const ProfilePage = ({session}) => {
    const dispatch = useDispatch();

    const {
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
        date: date, //*
        firstName: firstName, //*
        lastName: lastName, //*
        middleName: middleName, //*
        dept: dept, //*
        isMinobr: isMinobr,
        isAdmin: isAdmin,
        org: org, //*
        prevOrg: prevOrg,
            phoneNumber: phoneNumber, //*
        phoneNumberMobile: phoneNumberMobile, //*
        position: position, //*
        room: room, //*
        email: email, //*
        avatar: avatar,
    });

    const postProfile = () => {
        console.log(session.uid)
        dispatch(sendProfile(session.uid, profile));
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
                    value={profile.date}
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
                    onClick={postProfile}
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

// {/*/!*TODO Перенести стили*!/*/
// }
// {/*<div style={{*/
// }
// {/*    border: "solid 1px black",*/
// }
// {/*    borderRadius: "5px",*/
// }
// {/*    padding: "5px",*/
// }
// {/*    margin: "5px",*/
// }
// {/*    textAlign: "left"*/
// }
// {/*}}>*/
// }
// {/*    <div><span>Фамилия: </span><span>{lastName}</span></div>*/
// }
// {/*    <div><span>Имя: </span><span>{firstName}</span></div>*/
// }
// {/*    <div><span>Отчество: </span><span>{middleName}</span></div>*/
// }
// {/*    <div><span>Организация: </span><span>{org}</span></div>*/
// }
// {/*    <div><span>Отдел: </span><span>{dept}</span></div>*/
// }
// {/*    <div><span>Рабочий телефон: </span><span>{phoneNumber ? phoneNumber : "Не указано"}</span></div>*/
// }
// {/*    <div><span>Мобильный телефон: </span><span>{phoneNumberMobile ? phoneNumberMobile : "Не указано"}</span>*/
// }
// {/*    </div>*/
// }
// {/*</div>*/
// }
// {/*<Button variant="outlined">Редактировать</Button>*/
// }
// )
//     ;
// };

// firstName: "",
// lastName: "",
// middleName: "",
// dept: "",
// avatar: "",
// isAdmin: false,
// org: "",
// phoneNumber: "",
// phoneNumberMobile: ""