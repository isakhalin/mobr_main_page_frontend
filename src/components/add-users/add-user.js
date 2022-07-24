import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

/** Firebase */
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "../../api";

/** Include Api */
import { setProfileToFirebaseApi, updateApplicationToFirebaseApi } from "../../api";

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
    const dispatch = useDispatch();

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

        email: '@sakhalin.gov.ru',
        avatar: "",                                 //+ Данные в профиле
        isAdmin: false,
    });
    const [pass, setPass] = useState('');

    // const setMail = () => {
    //     let email = 'some@sakhalin.gov.ru';
    //     const name = newUser.firstName[0];
    //     console.log("Первая бква имени", name)
    //     return email
    // };


    const createNewUser = async () => {
        const newUserUid = await createUserWithEmailAndPassword(auth, newUser.email, pass).then(user => user.user.uid); //Создаем нового юзверя в FB
        await setProfileToFirebaseApi(newUserUid, newUser);     // Вызываем api setProfileToFirebaseApi чтобы записать профиль в FB
        await updateApplicationToFirebaseApi({date: application.date, isComplete: true})       // Вызываем санк для изменения флага isComplete в апликейшене глобального стейта и FB
        await signOut(auth);        // Выходим из учётки, т.к. выполняется авторизация под новым пользователем
    };

    // useEffect(() => {
    //     setMail()
    // }, [])

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
                            id="standard-basic-mail"
                            required={true}
                            sx={{width: '250px'}}
                            label="Логин"
                            type="email"
                            variant="standard"
                            value={newUser.email}
                            onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-basic-pass"
                            required={true}
                            sx={{width: '250px'}}
                            label="Пароль (минимум 6 символов)"
                            type="password"
                            variant="standard"
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
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

