import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

/** MUI Material Comps */
import {Box, Button, TextField, Typography} from '@mui/material';

/** Include Thunks */
import {sendProfile} from '../store/profile';

/** Компонент страницы профиля пользователя
 * @param session Принимает объект сессии из файрбейза
 * @returns {*}
 * @constructor
 */
export const ProfilePage = ({session}) => { // session не используется в данной имплементации
  const dispatch = useDispatch();

  const {
    id,
    date,
    firstName,
    lastName,
    middleName,
    dept,
    org,
    phoneNumber,
    phoneNumberMobile,
    position,
    room,
    email,
  } = useSelector((state) => state.profile.form);

  const [profile, setProfile] = useState({
    firstName: firstName,
    lastName: lastName,
    middleName: middleName,
    dept: dept,
    org: org,
    phoneNumber: phoneNumber,
    phoneNumberMobile: phoneNumberMobile,
    position: position,
    room: room,
    email: email,
  });

  /** Отправляет свойства профиля для изменения их в БД и глобальном стейте
   * @param id Идентификатор изменяемого профиля пользователя (MongoDB id пользователя)
   * @param profile Объект со свойствами профиля, которые будут внесены в профиль в БД и глобальный стейт
   */
  const postProfile = (id, profile) => {
    dispatch(sendProfile(id, profile));
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
    </Typography>
  );
}