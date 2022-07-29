//TODO Страница отображает формы для отправки заявок

import React, {useEffect, useState} from 'react';

import {styled} from '@mui/material/styles';

/** MUI Material */
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import {Box, Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import {light} from "@mui/material/styles/createPalette";

import {setApplicationToFirebaseApi} from '../api'

const Accordion = styled((props) => (<MuiAccordion disableGutters elevation={0} square {...props} />))
(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export const ApplicationsPage = () => {
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    // Форма для отправки
    const [form, setForm] = useState({
        date: null,         // Дата
        isComplete: false,  // Флаг выполнения заявки
        lastName: '',       // Фамилия
        firstName: '',      // Имя
        middleName: '',     // Отчество
        prevOrg: '',        // Предыдущее место работы
        org: '',            // Организация
        dept: '',           // Отдел
        position: '',       // Должность
        room: '',           // Кабинет
        phoneNumber: '',    // Рабочий номер телефона
        isMinobr: null      // Принадлежность к Минобр
    })

    // const [form3, setForm3] = useState({});
    //
    // const [form4, setForm4] = useState();

    //Логика радио кнопок
    // const [valueRadio, setValueRadio] = React.useState('');
    const handleChangeRadio = (event) => {
        if (event.target.value === "true") {
            setForm({...form, org: "Министерство образования Сахалинской области", isMinobr: true})
        } else {
            setForm({...form, org: "", isMinobr: false})
        }
    };

    const sendApplicationForm = async () => {
        await setApplicationToFirebaseApi({...form, date: new Date().getTime()});
        setForm({
            date: null,
            lastName: '',
            firstName: '',
            middleName: '',
            prevOrg: '',
            org: '',
            dept: '',
            position: '',
            room: '',
            phone: '',
            isMinobr: null
        });
    };

    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        if (form.firstName && form.lastName && form.middleName && form.prevOrg && form.org && form.dept && form.position && (form.isMinobr !== null) && form.phoneNumber && form.room) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [form])

    return (
        <div>
            <h3>Страница с формами заявок</h3>

            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Место официального трудоустройства:</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={form.isMinobr}
                    onChange={handleChangeRadio}
                >
                    <FormControlLabel value="true" control={<Radio/>} label="Министерство образования"/>
                    <FormControlLabel value="false" control={<Radio/>} label="Подведомственная организация"/>
                </RadioGroup>
            </FormControl>

            <div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Форма идентификации личности</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': {m: 1, width: '25ch'},
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    <TextField
                                        id="standard-basic-lastName"
                                        required={true}
                                        sx={{width: '400px'}}
                                        label="Фамилия"
                                        variant="standard"
                                        value={form.lastName}
                                        onChange={(e) => setForm({...form, lastName: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-basic-firstName"
                                        required={true}
                                        sx={{width: '400px'}}
                                        label="Имя"
                                        variant="standard"
                                        value={form.firstName}
                                        onChange={(e) => setForm({...form, firstName: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-basic-middleName"
                                        required={true}
                                        sx={{width: '400px'}}
                                        label="Отчество"
                                        variant="standard"
                                        value={form.middleName}
                                        onChange={(e) => setForm({...form, middleName: e.target.value})}
                                    />
                                </div>
                                {/*<Button variant="outlined">Сохранить</Button>*/}
                            </Box>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>Форма идентификации сотрудника</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': {m: 1, width: '25ch'},
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    <TextField
                                        id="standard-basic-prevOrg"
                                        required={true}
                                        sx={{width: '400px'}}
                                        label="Предыдущее место работы"
                                        variant="standard"
                                        value={form.prevOrg}
                                        onChange={(e) => setForm({...form, prevOrg: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-basic-org"
                                        required={true}
                                        sx={{width: '400px'}}
                                        label="Место текущего официального трудоустройства"
                                        variant="standard"
                                        value={form.org}
                                        onChange={(e) => setForm({...form, org: e.target.value})}
                                    />
                                </div>

                                <div>
                                    <TextField
                                        id="standard-basic-dept"
                                        required={true}
                                        sx={{width: '400px'}}
                                        label="Отдел (текущее трудоустройство)"
                                        variant="standard"
                                        value={form.dept}
                                        onChange={(e) => setForm({...form, dept: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-basic-position"
                                        required={true}
                                        sx={{width: '400px'}}
                                        label="Должность (текущее трудоустройство)"
                                        variant="standard"
                                        value={form.position}
                                        onChange={(e) => setForm({...form, position: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-basic-room"
                                        required={true}
                                        sx={{width: '400px'}}
                                        label="Кабинет (текущее трудоустройство)"
                                        variant="standard"
                                        value={form.room}
                                        onChange={(e) => setForm({...form, room: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-basic-phone"
                                        required={true}
                                        sx={{width: '400px'}}
                                        label="Рабочий телефон (текущее трудоустройство)"
                                        variant="standard"
                                        value={form.phoneNumber}
                                        onChange={(e) => setForm({...form, phoneNumber: e.target.value})}
                                    />
                                </div>
                                {/*<Button variant="outlined">Сохранить</Button>*/}
                            </Box>

                        </Typography>
                    </AccordionDetails>
                </Accordion>
                {/*<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>*/}
                {/*    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">*/}
                {/*        <Typography>Форма доступа в СЭД</Typography>*/}
                {/*    </AccordionSummary>*/}
                {/*    <AccordionDetails>*/}
                {/*        <Typography>*/}
                {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse*/}
                {/*            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor*/}
                {/*            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,*/}
                {/*            sit amet blandit leo lobortis eget.*/}
                {/*        </Typography>*/}
                {/*    </AccordionDetails>*/}
                {/*</Accordion>*/}
                <Button variant="outlined" onClick={sendApplicationForm} disabled={isDisabled}>Отправить</Button>
            </div>


        </div>
    );
};
