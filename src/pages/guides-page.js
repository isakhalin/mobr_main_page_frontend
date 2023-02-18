import React from 'react';
import {Button, ButtonGroup} from '@mui/material';

export const GuidesPage = () => {
  const guidesLinks = [
    {
      title: "Инструкция по созданию Учетной записи ЕСК(AD)",
      to: "/files/run-work.pdf",
    },
    {
      title: "Инструкция для получения сертификата УФК (ЭЦП)",
      to: "/files/ufc-cert.pdf",
    },
    {
      title: "Инструкция по настройке Системы электронного документа\n" +
        "оборота (СЭД) через Web браузер",
      to: "/files/remote-sed.pdf",
    },
    {
      title: "Инструкция по настройке электронной почты",
      to: "/files/remote-mail.pdf",
    },
    {
      title: "Настройка почты\n" +
        "На мобильном телефоне iPhone",
      to: "/files/prezent-iphone.pdf",
    },
    {
      title: "Настройка почты\n" +
        "На мобильном телефоне Samsung",
      to: "/files/prezent-Samsung.pdf",
    },
  ];

  return (
    <div>
      <h3>Инструкции и руководства для пользователей</h3>
      <p>Для получения учётной записи ПК, доступа в СЭД, почтового ящика, заполните формы во кладке "Регистрация"
        и ожидайте ответа.</p>
      <p>
        По всем техническим вопросам Вы можете обращаться к администраторам системы:
        <div>Степанов Роман Викторович. т.46-59-59 (внутренний 59-59).</div>
        <div>Сидоров Михаил Борисович. т.46-59-92 (внутренний 59-92).</div>
        <div>Или лично в кабинет 31.</div>
        <br/>
        <ButtonGroup
          orientation='vertical'
          variant="outlined"
        >
          {
            guidesLinks.map((element) => (
                <Button
                  key={element.to}
                  href={element.to}
                  target={"_blank"}
                >
                  {element.title}
                </Button>
              )
            )
          }
        </ButtonGroup>
      </p>
    </div>
  );
};