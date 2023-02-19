import React from 'react';
import {useDispatch} from 'react-redux';

//MUI
import {Button, ButtonGroup} from '@mui/material';

/** Include Thunks */
import {changeTicketStatus} from '../../../store/tickets';

/** Include Styles */
import './ticket.module.css';

export const Ticket = ({el, isAdmin = false, fio = null, uid}) => {
  const dispatch = useDispatch();

  /**
   * Функция изменения статуса тикета
   * @param ticket {Object} тикет
   * @param ticketStatus {String} статус тикета
   * @param userCompleted {Boolean} Подтверждение закрытия тикета
   * @returns {Promise<void>}
   */
  const changeTicketHandler = (ticket, ticketStatus, userCompleted = false) => {
    el.ticketStatus = ticketStatus;
    el.userCompleted = userCompleted;

    if (isAdmin) {
      el.ticketExecutor = fio;
    }

    dispatch(changeTicketStatus(ticket, uid, isAdmin));
  }

  return (
    <div style={{
      border: "solid 1px grey",
      borderRadius: "5px",
      backgroundColor: "#05050008",
      marginBottom: "5px",
      padding: "5px",
      textAlign: "left",
      color: el.userCompleted ? 'rgba(0,0,0,0.17)' : ''
    }}>
      <div><span>Дата: </span><span>{el.ticketDate}</span></div>
      <div>
        <span>Отправитель: </span><span>{el.ticketAuthorLastName} {el.ticketAuthorFirstName}</span>
      </div>
      <div>
        <span>Срочность: </span><span>{el.ticketImportance === 'low' ? "Не срочно" : el.ticketImportance === 'normal' ? "В порядке очереди" : "Срочно"}</span>
      </div>
      <div>
        <span>Статус: </span><span>{el.ticketStatus}</span>
        <br/>
        <span>Исполнитель:</span><span>{el.ticketExecutor ?? " не назначен"}</span>
      </div>
      {isAdmin ? <div>
        <span>Подтверждение закрытия пользователем: </span><span>{el.userCompleted === true ? 'Подтверждено' : 'Не подтверждено'}</span>
      </div> : <></>
      }
      <div><span>Описание проблемы:</span></div>
      <div><span><span>{el.ticketText}</span></span></div>
      {
        isAdmin
          ?
          <ButtonGroup
            variant="outlined"
            size='ticketButtonSize'
            aria-label="outlined button group"
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Button
              disabled={el.ticketStatus === 'В работе'}
              onClick={() => changeTicketHandler(el, 'В работе')}
            >
              В работу
            </Button>
            <Button
              disabled={el.userCompleted}
              onClick={() => changeTicketHandler(el, 'Готово')}
            >
              Завершить
            </Button>
            <Button
              disabled={el.userCompleted}
              onClick={() => changeTicketHandler(el, 'Заявка закрыта', true)}
            >
              Закрыть задачу
            </Button>
          </ButtonGroup>
          :
          !el.userCompleted
            ?
            <Button
              variant="outlined"
              onClick={() => changeTicketHandler(el, 'Заявка закрыта', true)}
            >
              Закрыть задачу
            </Button>
            :
            <Button
              variant="outlined"
              onClick={() => changeTicketHandler(el, 'В работе', false)}
            >
              Вернуть в работу
            </Button>
      }
    </div>
  );
};