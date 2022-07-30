import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTickets} from "../../store/tickets/";
import {Ticket} from "./ticket";
import {AdminTicketForm} from "./adminTiketForm";

export const TicketList = ({session, isAdmin = false, worklist = false}) => {

    const dispatch = useDispatch();
    const {firstName, lastName, middleName} = useSelector((state) => state.profile.form);

    const {tickets, status, ticketsInWork} = useSelector((state) => state.tickets);
    console.log('tickets', tickets)
    console.log('ticketsInWork', ticketsInWork)


    useEffect(() => {
        dispatch(getTickets(session.uid, isAdmin));
        // dispatch(getTickets(session.uid, isAdmin))
    }, []);
    return (
        // !worklist ?
        <>
            {isAdmin && !worklist ? <AdminTicketForm session ={session} isAdmin={isAdmin}/> : <></>}

            <div>
                {
                    status.pendingGet ?
                        <span>Загружаю...</span>
                        :
                        tickets.map((el) => {
                            //Проверям отрисовывается ли TicketList на вкладке My Task, если false то отрисовываем Ticket()
                            // для вкладки Tickets
                            if (!worklist) {
                                return (
                                    <Ticket el={el} isAdmin={isAdmin} fio={`${firstName} ${lastName} ${middleName}`}
                                            uid={session.uid}/>
                                )
                            } else {
                                //проверяем соответсвует ли Исполнитель текущему пользователю, если true вернем Ticket
                                /**
                                 * Метод split() разбивает объект String на массив строк путём разделения строки
                                 * указанной подстрокой
                                 * Метод slice() возвращает новый массив, содержащий копию части
                                 * исходного массива  arr.slice([begin[, end]])
                                 * begin Необязательный Индекс (счёт начинается с нуля), по которому
                                 * начинать извлечение. end Необязательный Индекс (счёт начинается с нуля), по которому
                                 * заканчивать извлечение. Метод slice() извлекает элементы с индексом меньше end
                                 * в данном примере извелкуться 0 и 1
                                 * Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
                                 * arr.join([separator])
                                 * separator Необязательный
                                 * Определяет строку, разделяющую элементы массива. В случае необходимости тип разделителя
                                 * приводится к типу Строка. Если он не задан, элементы массива разделяются запятой ','.
                                 * Если разделитель - пустая строка, элементы массива ничем не разделяются в возвращаемой строке.
                                 */
                                // debugger
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
