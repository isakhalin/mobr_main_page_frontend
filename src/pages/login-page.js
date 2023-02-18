import React, {useState} from 'react';

/** Firebase */
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../api';

/** Custom Comps */
import {LoginPassForm} from '../components';

/** MUI Material */
import {Button} from '@mui/material';

export const LoginPage = () => {
  const [form, setForm] = useState();

  const getForm = (form) => {
    setForm(form);
  };

  const onLogin = () => {
    return signInWithEmailAndPassword(auth, form.login, form.pass);
  };

  return (
    <div>
      <h4>Страница входа</h4>
      <LoginPassForm getForm={getForm}/>
      <Button variant="contained" onClick={onLogin}>Войти</Button>
    </div>
  );
};