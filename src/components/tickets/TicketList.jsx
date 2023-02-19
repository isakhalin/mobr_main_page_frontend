import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getTickets} from '../../store/tickets/';
import {Ticket} from './ticket';
import {AdminTicketForm} from './adminTiketForm';

export const TicketList = ({session, isAdmin = false, worklist = false}) => {
  const dispatch = useDispatch();
  const {firstName, lastName, middleName} = useSelector((state) => state.profile.form);
  const {tickets, status, ticketsInWork} = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(getTickets(session.uid, isAdmin));
  }, []);

  return (
    <>
      {isAdmin && !worklist ? <AdminTicketForm session={session} isAdmin={isAdmin}/> : <></>}

      <div>
        {
          status.pendingGet
            ?
            <span>Загружаю...</span>
            :
            tickets.map((el) => {
              if (!worklist) {
                return (
                  <Ticket el={el} isAdmin={isAdmin} fio={`${firstName} ${lastName} ${middleName}`}
                          uid={session.uid}/>
                )
              } else {
                if (el.ticketExecutor?.split(' ').slice(0, 2).join(' ') === `${firstName} ${lastName}`) {
                  return (
                    <Ticket el={el} isAdmin={isAdmin}
                            fio={`${firstName} ${lastName} ${middleName}`}/>
                  )
                }
              }
            })
        }
      </div>
    </>
  );
};
