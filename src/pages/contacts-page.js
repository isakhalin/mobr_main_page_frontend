//TODO Страница отображает телефонный справочник минобра

import React from 'react';
import {Button} from '@mui/material'

const api = "http://netcity.admsakhalin.ru/phonebook/"

export const ContactsPage = () => {
    return (
        <div>
            <h1>Телефонный справочник Минобра</h1>
            <div><Button href={`${api}phone_minobr.pdf`}>Телефонный справочник сотрудников Министерства</Button></div>
            <div><Button href={`${api}phone_mo.pdf`}>Телефонный справочник сотрудников подведомственных организаций</Button></div>
            <div><Button href="https://phonebook.sakhalin.gov.ru/">Телефонный справочник ПСО</Button></div>
        </div>
    );
};