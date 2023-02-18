import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

/** Firebase */
import {createUserWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from '../../api';

/** Include Api */
import {setProfileToMongoDBApi} from '../../api';

/** Include Thunks */
import {updateFlagIsCompleteInApplication} from '../../store/applications'

/** MUI Material Comps */
import {
  Box,
  Button,
  TextField,
  Typography,
} from '@mui/material';

export const AddUser = ({application}) => {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
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
    avatar: "",
  });
  const [pass, setPass] = useState('');

  const createNewUser = async () => {
    const newUserUid = await createUserWithEmailAndPassword(auth, newUser.email, pass).then(user => user.user.uid);
    await setProfileToMongoDBApi({...newUser, idFirebase: newUserUid});
    dispatch(updateFlagIsCompleteInApplication({_id: application._id, isComplete: true}));
    await signOut(auth);
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
      </Typography>
    </div>
  );
};

