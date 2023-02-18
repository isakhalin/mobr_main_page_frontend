import React from 'react';
import {useNavigate} from 'react-router-dom';

/** Style */
import classes from './links-page.module.css';

import {Button} from '@mui/material';

export const LinksPage = () => {

  const linksOut = [
    {
      title: "Сайт министерства образования Сахалинской области",
      to: "https://obrazovanie.admsakhalin.ru",
    },
    {
      title: "Система электронного документооборота",
      to: "https://sed.admsakhalin.ru/",
    },
    {
      title: "Почта",
      to: "https://mail.sakhalin.gov.ru/",
    },
    {
      title: "ГИС Региональное образование",
      to: "https://detsad.admsakhalin.ru",
    },
  ];

  const linksInner = [
    {
      title: "АИС Контингент",
      to: "http://contingent_web",
    },
    {
      title: "АИС Е-Услуги (Ведомственная)",
      to: "http://es_web:8282",
    },
    {
      title: "АИС Сетевой город. Образование",
      to: "http://ns-web-collective/about.html",
    },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <h3>Все необходимые ссылки</h3>
      <h4>Внешние ресурсы:</h4>
      {linksOut.map((link) => (<div key={link.title}><Button className={classes.btn_link} variant="outlined"
                                                             href={link.to}>{link.title}</Button></div>))}
      <h4>Внутренние ресурсы (Доступны только в туннеле):</h4>
      {linksInner.map((link) => (
        <div key={link.title}><Button className={classes.btn_link} variant="outlined"
                                      href={link.to}>{link.title}</Button></div>))}
    </div>
  );
};