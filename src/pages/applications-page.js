//TODO Страница отображает формы для отправки заявок

import React, {useState} from 'react';

import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import {Box, Button} from '@mui/material';
import TextField from '@mui/material/TextField';

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
    const [form1, setForm1] = useState({
        lastName: '',
        firstName: '',
        middleName: '',
    });
    const [form2, setForm2] = useState({
        org: '',
        dept: '',
        position: '',
        room: '',
        phone: ''
    });
    const [form3, setForm3] = useState();
    const [form4, setForm4] = useState();

    return (
        <div>
            <h3>Страница с формами заявок</h3>
            <div>Я официально устроен в: </div> <span>Министерство образования </span><span>Подведомственная организация</span>
            <div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Форма идентификации</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                Если Вы не знаете есть ли у вас учётная запись в сети ПСО (в ЕСК), вы можете уточнить
                                эту информацию у системного администратора на пердыдущем месте работы.
                            </p>
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
                                        id="standard-basic"
                                        required={true}
                                        sx={{width: '400px'}}
                                        label="Фамилия"
                                        variant="standard"
                                        value={form1.lastName}
                                        onChange={(e) => setForm1({...form1, lastName: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-basic"
                                        required={true}
                                        sx={{width: '400px'}}
                                        label="Имя"
                                        variant="standard"
                                        value={form1.firstName}
                                        onChange={(e) => setForm1({...form1, firstName: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-basic"
                                        required={true}
                                        sx={{width: '400px'}}
                                        label="Отчество"
                                        variant="standard"
                                        value={form1.middleName}
                                        onChange={(e) => setForm1({...form1, middleName: e.target.value})}
                                    />
                                </div>
                                {/*<div>*/}
                                {/*    <TextField*/}
                                {/*        id="standard-basic"*/}
                                {/*        required={true}*/}
                                {/*        sx={{width: '400px'}}*/}
                                {/*        label="Отдел"*/}
                                {/*        variant="standard"*/}
                                {/*        value={form1.dept}*/}
                                {/*        onChange={(e) => setForm1({...form1, dept: e.target.value})}*/}
                                {/*    />*/}
                                {/*</div>*/}
                                {/*<div>*/}
                                {/*    <TextField*/}
                                {/*        id="standard-basic"*/}
                                {/*        required={true}*/}
                                {/*        sx={{width: '400px'}}*/}
                                {/*        label="Должность"*/}
                                {/*        variant="standard"*/}
                                {/*        value={form1.position}*/}
                                {/*        onChange={(e) => setForm1({...form1, position: e.target.value})}*/}
                                {/*    />*/}
                                {/*</div>*/}
                                {/*<div>*/}
                                {/*    <TextField*/}
                                {/*        id="standard-basic"*/}
                                {/*        required={true}*/}
                                {/*        sx={{width: '400px'}}*/}
                                {/*        label="Кабинет"*/}
                                {/*        variant="standard"*/}
                                {/*        value={form1.room}*/}
                                {/*        onChange={(e) => setForm1({...form1, room: e.target.value})}*/}
                                {/*    />*/}
                                {/*</div>*/}
                                {/*<div>*/}
                                {/*    <TextField*/}
                                {/*        id="standard-basic"*/}
                                {/*        required={true}*/}
                                {/*        sx={{width: '400px'}}*/}
                                {/*        label="Рабочий телефон"*/}
                                {/*        variant="standard"*/}
                                {/*        value={form1.phone}*/}
                                {/*        onChange={(e) => setForm1({...form1, phone: e.target.value})}*/}
                                {/*    />*/}
                                {/*</div>*/}
                                <Button variant="outlined">Сохранить</Button>
                            </Box>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>Я уже работал/работала в госучреждении и имею учётную запись в сети ПСО</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                Если Вы не знаете есть ли у вас учётная запись в сети ПСО (в ЕСК), вы можете уточнить
                                эту информацию у системного администратора на пердыдущем месте работы.
                            </p>
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
                                        id="standard-basic"
                                        required={true}
                                        sx={{width: '400px'}}
                                        label="Место официального трудоустройства"
                                        variant="standard"
                                        value={form2.org}
                                        onChange={(e) => setForm2({...form2, org: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-basic"
                                        required={true}
                                        sx={{width: '400px'}}
                                        label="Отдел (Фактического трудоустройства)"
                                        variant="standard"
                                        value={form2.dept}
                                        onChange={(e) => setForm2({...form2, dept: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-basic"
                                        required={true}
                                        sx={{width: '400px'}}
                                        label="Должность (Официального трудоустройства)"
                                        variant="standard"
                                        value={form2.position}
                                        onChange={(e) => setForm2({...form2, position: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-basic"
                                        required={true}
                                        sx={{width: '400px'}}
                                        label="Кабинет (фактическое место работы)"
                                        variant="standard"
                                        value={form2.room}
                                        onChange={(e) => setForm2({...form2, room: e.target.value})}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="standard-basic"
                                        required={true}
                                        sx={{width: '400px'}}
                                        label="Рабочий телефон (фактическое место работы)"
                                        variant="standard"
                                        value={form2.phone}
                                        onChange={(e) => setForm2({...form2, phone: e.target.value})}
                                    />
                                </div>
                                <Button variant="outlined">Сохранить</Button>
                            </Box>

                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>Я ранее не работал/работала в госучреждении и не имею учётную запись в сети
                            ПСО</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                        <Typography>Форма доступа в СЭД</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>


        </div>
    );
};
