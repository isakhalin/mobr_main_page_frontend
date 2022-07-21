import React, {useState} from 'react';
import {Box} from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export const AddUser = ({userApplication}) => {
    const [user, setUser] = useState({
        // firstName: userApplication.firstName,
        // lastName: "",
        // middleName: "",
        // dept: "",
        // avatar: "",
        // isAdmin: false,
        // isMinobr: "",
        // org: "",
        // phoneNumber: "",
        // phoneNumberMobile: "",
        // userPass: "",
        // userLogin: ""
    });

    return (
        <div>
            Это юзер аппликэйшон
            {/*<Typography>*/}
            {/*    <Box*/}
            {/*        component="form"*/}
            {/*        sx={{*/}
            {/*            '& > :not(style)': {m: 1, width: '25ch'},*/}
            {/*        }}*/}
            {/*        noValidate*/}
            {/*        autoComplete="off"*/}
            {/*    >*/}
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
            {/*        <div>*/}
            {/*            <TextField*/}
            {/*                id="standard-basic"*/}
            {/*                required={true}*/}
            {/*                sx={{width: '400px'}}*/}
            {/*                label="Имя"*/}
            {/*                variant="standard"*/}
            {/*                value={form.firstName}*/}
            {/*                onChange={(e) => setForm({...form, firstName: e.target.value})}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <TextField*/}
            {/*                id="standard-basic"*/}
            {/*                required={true}*/}
            {/*                sx={{width: '400px'}}*/}
            {/*                label="Отчество"*/}
            {/*                variant="standard"*/}
            {/*                value={form.middleName}*/}
            {/*                onChange={(e) => setForm({...form, middleName: e.target.value})}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*        /!*<Button variant="outlined">Сохранить</Button>*!/*/}
            {/*    </Box>*/}
            {/*</Typography>*/}
        </div>
    );
};

