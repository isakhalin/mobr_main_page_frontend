import React, {useState} from 'react';

/** MUI Material Comps */
import {
    Box,
    Button,
    TextField,
    Checkbox,
    Typography,
    FormControlLabel,
} from "@mui/material";

export const AddUser = ({application}) => {
    const [newUser, setNewUser] = useState({
            date: application.date,                 //Данные в апликейшене
            firstName: application.firstName,
            lastName: application.lastName,
            middleName: application.middleName,
            dept: application.dept,
            isMinobr: application.isMinobr,
            org: application.org,
            prevOrg: application.prevOrg,
            phoneNumber: application.phoneNumber ?? '',
            phoneNumberMobile: application.phoneNumberMobile ?? '',
            position: application.position,
            room: application.room,

        avatar: "",                                 //+ Данные в профиле
        isAdmin: false,
    });
    const [loginPass, setLoginPass] = useState({
        login: '',
        pass: ''
    });

    const sendNewProfile = () => {
        console.log("NEW USER", newUser)
    };

    const createNewUser = () => {
        sendNewProfile();
    };

    return (
        <div>
            Это форма создания учётки
            <Typography>
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
                            id="standard-basic"
                            required={true}
                            sx={{width: '250px'}}
                            label="Логин"
                            variant="standard"
                            value={loginPass.login}
                            onChange={(e) => setLoginPass({...loginPass, login: e.target.value})}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-basic"
                            required={true}
                            sx={{width: '250px'}}
                            label="Пароль"
                            variant="standard"
                            value={loginPass.pass}
                            onChange={(e) => setLoginPass({...loginPass, pass: e.target.value})}
                        />
                    </div>
                </Box>
                <Box sx={{'& > :not(style)': {m: 0.2, fontSize: 12}}}>
                    <FormControlLabel sx={{'& .MuiFormControlLabel-label': {fontSize: 12}}} control={<Checkbox />} label="Сотрудник министерства" />
                    <Button variant="outlined" onClick={createNewUser}>Сформировать</Button>
                </Box>
            </Typography>
        </div>
    );
};

