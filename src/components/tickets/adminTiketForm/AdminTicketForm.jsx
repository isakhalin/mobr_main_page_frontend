import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {sendTicket} from '../../../store/tickets';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@mui/material';

export const AdminTicketForm = ({session, isAdmin}) => {
  const dispatch = useDispatch();
  const {
    id,
    firstName,
    lastName
  } = useSelector((state) => state.profile.form);
  const [form, setForm] = useState('');
  const [importance, setImportance] = useState("low");
  const isForm = !(!!form);

  const setFormFromTextField = (event) => {
    setForm(event.target.value);
  };

  const sandClickHandler = async () => {
    const ticket = {
      ticketAuthorFirstName: firstName,
      ticketAuthorLastName: lastName,
      ticketImportance: importance,
      ticketStatus: "Отправлено",
      ticketExecutor: "Не назначен",
      userCompleted: false,
      ticketText: form,
    };
    await dispatch(sendTicket(ticket, id));
    setForm('');
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {m: 1, width: '25ch'},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-multiline-static"
          label="Опишите проблему"
          multiline
          style={{width: "99%"}}
          rows={4}
          defaultValue=""
          value={form}
          onChange={setFormFromTextField}
        />
        <div>
          <FormControl sx={{m: 1, minWidth: 200}} size="small">
            <InputLabel id="demo-select-small">Срочность</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={importance}
              label="Срочность"
              onChange={(e) => setImportance(e.target.value)}
            >
              <MenuItem value="low">Не срочно</MenuItem>
              <MenuItem value="normal">В порядке очереди</MenuItem>
              <MenuItem value="high">Срочно</MenuItem>
            </Select>
          </FormControl>
          <Button
            style={{marginTop: "8px", padding: "5.5px 14px", lineHeight: "2"}}
            variant="outlined"
            onClick={sandClickHandler}
            disabled={isForm}
          >
            Отправить
          </Button>
        </div>
      </Box>
    </div>
  );
};

