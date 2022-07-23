import React, {useState} from 'react';
import {useSelector} from "react-redux";

/** MUI Material Comps */
import {Box, Button, TextField, Typography} from "@mui/material"

export const ProfilePage = () => {
    const {
        date,                   // Дата апликейшена. Возможно сохранять в профиль не нужно
        firstName,
        lastName,
        middleName,
        dept,
        isMinobr,
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
        date: date ?? '', //*
        firstName: firstName, //*
        lastName: lastName, //*
        middleName: middleName, //*
        dept: dept, //*
        isMinobr: isMinobr,
        org: org, //*
        prevOrg: prevOrg,
        phoneNumber: phoneNumber ?? '', //*
        phoneNumberMobile: phoneNumberMobile ?? '', //*
        position: position, //*
        room: room, //*
        email: '@sakhalin.gov.ru', //*
        avatar: "",
    });

    return (
        <Typography>
            Мои личные данные:
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 0.3, width: '25ch', fontSize: 12},
                }}
                noValidate
                autoComplete="off"
            >
                {/*        <div>*/}
                {/*            <TextField*/}
                {/*                id="standard-basic"*/}
                {/*                required={true}*/}
                {/*                sx={{width: '400px'}}*/}
                {/*                label="Фамилия"*/}
                {/*                variant="standard"*/}
                {/*                value={}*/}
                {/*                onChange={(e) => setForm({...form, lastName: e.target.value})}*/}
                {/*            />*/}
                {/*        </div>*/}
                <div>
                    <TextField
                        id="standard-basic-mail"
                        required={true}
                        sx={{width: '250px'}}
                        label="Дата регистрации"
                        type="email"
                        variant="standard"
                        value={profile.}
                        onChange={(e) => setProfile({...newUser, email: e.target.value})}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-basic-mail"
                        required={true}
                        sx={{width: '250px'}}
                        label="Фамилия"
                        type="email"
                        variant="standard"
                        value={profile.}
                        onChange={(e) => setProfile({...newUser, email: e.target.value})}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-basic-pass"
                        required={true}
                        sx={{width: '250px'}}
                        label="Имя"
                        type="password"
                        variant="standard"
                        value={profile.}
                        onChange={(e) => setProfile(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-basic-mail"
                        required={true}
                        sx={{width: '250px'}}
                        label="Отчество"
                        type="email"
                        variant="standard"
                        value={profile.}
                        onChange={(e) => setProfile({...newUser, email: e.target.value})}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-basic-pass"
                        required={true}
                        sx={{width: '250px'}}
                        label="Организация"
                        type="password"
                        variant="standard"
                        value={profile.}
                        onChange={(e) => setProfile(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-basic-mail"
                        required={true}
                        sx={{width: '250px'}}
                        label="Отдел"
                        type="email"
                        variant="standard"
                        value={profile.}
                        onChange={(e) => setProfile({...newUser, email: e.target.value})}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-basic-pass"
                        required={true}
                        sx={{width: '250px'}}
                        label="Телефон"
                        type="password"
                        variant="standard"
                        value={profile.}
                        onChange={(e) => setProfile(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-basic-mail"
                        required={true}
                        sx={{width: '250px'}}
                        label="Мобильный телефон"
                        type="email"
                        variant="standard"
                        value={profile.}
                        onChange={(e) => setProfile({...newUser, email: e.target.value})}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-basic-pass"
                        required={true}
                        sx={{width: '250px'}}
                        label="Должность"
                        type="password"
                        variant="standard"
                        value={profile.}
                        onChange={(e) => setProfile(e.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-basic-mail"
                        required={true}
                        sx={{width: '250px'}}
                        label="Кабинет"
                        type="text"
                        variant="standard"
                        value={profile.room}
                        onChange={(e) => setProfile({...profile, room: e.target.value})}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-basic-pass"
                        required={true}
                        sx={{width: '250px'}}
                        label="Электронная почта"
                        type="text"
                        variant="standard"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                    />
                </div>
                <div>
                    <Button
                        variant="outlined"
                        onClick={createNewUser}
                        size="small"
                        sx={{
                            fontSize: 12,
                        }}
                    >
                        Сформировать
                    </Button>
                </div>
            </Box>
            {/*<Box sx={{'& > :not(style)': {m: 0.2, fontSize: 12}}}>*/}
            {/*    /!*<FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: 12}}} control={<Checkbox />} label="Сотрудник министерства" />*!/*/}
            {/*    <Button variant="outlined" onClick={createNewUser}>Сформировать</Button>*/}
            {/*</Box>*/}
        </Typography>


    {/*/!*TODO Перенести стили*!/*/
    }
    {/*<div style={{*/
    }
    {/*    border: "solid 1px black",*/
    }
    {/*    borderRadius: "5px",*/
    }
    {/*    padding: "5px",*/
    }
    {/*    margin: "5px",*/
    }
    {/*    textAlign: "left"*/
    }
    {/*}}>*/
    }
    {/*    <div><span>Фамилия: </span><span>{lastName}</span></div>*/
    }
    {/*    <div><span>Имя: </span><span>{firstName}</span></div>*/
    }
    {/*    <div><span>Отчество: </span><span>{middleName}</span></div>*/
    }
    {/*    <div><span>Организация: </span><span>{org}</span></div>*/
    }
    {/*    <div><span>Отдел: </span><span>{dept}</span></div>*/
    }
    {/*    <div><span>Рабочий телефон: </span><span>{phoneNumber ? phoneNumber : "Не указано"}</span></div>*/
    }
    {/*    <div><span>Мобильный телефон: </span><span>{phoneNumberMobile ? phoneNumberMobile : "Не указано"}</span>*/
    }
    {/*    </div>*/
    }
    {/*</div>*/
    }
    {/*<Button variant="outlined">Редактировать</Button>*/
    }
)
    ;
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