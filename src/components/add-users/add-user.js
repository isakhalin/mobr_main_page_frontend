import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

/** Firebase */
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from "../../api";

/** Include Api */
import {
    setProfileToFirebaseApi,
    updateApplicationToFirebaseApi,
    setProfileToMongoDBApi,
} from "../../api";

/** Include Thunks */
import { updateFlagIsCompleteInApplication } from '../../store/applications'

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
        //date: application.date, //В логике с Mongo не нужно передавать дату   // Дата апликейшена. Возможно сохранять в профиль не нужно
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
        //isAdmin: false, //В логике с Mongo передавать не нужно, флаг выставит бекенд самостоятельно
    });
    const [pass, setPass] = useState('');

    // const setMail = () => {
    //     let email = 'some@sakhalin.gov.ru';
    //     const name = newUser.firstName[0];
    //     console.log("Первая бква имени", name)
    //     return email
    // };


    const createNewUser = async () => {
        // Создаем нового юзверя в FB
        const newUserUid = await createUserWithEmailAndPassword(auth, newUser.email, pass).then(user => user.user.uid);
        // Вызываем api setProfileToFirebaseApi чтобы записать профиль в FB
        // await setProfileToFirebaseApi(newUserUid, newUser); // Логика для FB
        await setProfileToMongoDBApi({...newUser, idFirebase: newUserUid});
        // Вызываем санк updateFlagIsCompleteInApplication для обновления флага isComplete в апликейшене,
        // который отвечает за параметр "выполнено" и "не выполнено", передаем в него свойство, которое будем менять
        dispatch(updateFlagIsCompleteInApplication({_id: application._id, isComplete: true}));
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

