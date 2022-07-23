import React, {useEffect, useState} from 'react';

/** Firebase */
import {createUserWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from "../../api";

/** MUI Material Comps */
import {
    Box,
    Button,
    TextField,
    Checkbox,
    Typography,
    FormControlLabel,
} from "@mui/material";

// const sendNewProfile = (email, pass) => {
//     return createUserWithEmailAndPassword(auth, email, pass).then(user => user.user.uid);
// };

export const AddUser = ({application}) => {
    const [newUser, setNewUser] = useState({
        //Данные в апликейшене
        date: application.date,                   // Дата апликейшена. Возможно сохранять в профиль не нужно
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

        email: '',
        avatar: "",                                 //+ Данные в профиле
        isAdmin: false,
    });
    const [loginPass, setLoginPass] = useState({
        login: '',
        pass: ''
    });

    const setMail = () => {
        let email = 'some@mail.ru';
        const name = newUser.firstName[0];
        console.log("Первая бква имени", name)
        return email
    };


    const createNewUser = async () => {
        const newUserUid = await createUserWithEmailAndPassword(auth, loginPass.login, loginPass.pass).then(user => user.user.uid);
        // const newUserUid = await sendNewProfile(loginPass.login, loginPass.pass);
        console.log("newUSER-Uid", newUserUid);
        await signOut(auth);
    };

    useEffect(() => {
        setMail()
    }, [])

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
        </div>
    );
};

