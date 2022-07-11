import React, {useState} from 'react';

import {
    Box,
    TextField,
    Button
} from '@mui/material'

export const TiketsPage = () => {
    const [form, setForm] = useState()

    const setFormFromTextField = (event) => {
        setForm(event.target.value)
    };

    const sandClickHandler = () => {

    };

    return (
        <div>
            <h3>Здесть можно оставить заявку на решение проблемы</h3>
            <div style={{display: "flex"}}>
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
                        rows={4}
                        defaultValue=""
                        // variant="filled"
                        onChange={setFormFromTextField}
                    />
                    <div>
                        <Button
                            variant="outlined"
                            onClick={sandClickHandler}
                        >
                            Отправить
                        </Button>
                    </div>
                </Box>
                <div>
                    <div>Все активные задачи:</div>
                    <div>Задачи, отправленные мной:</div>
                </div>
            </div>
        </div>
    );
};