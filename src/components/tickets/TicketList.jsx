import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTickets} from "../../store/tickets/";
import {Ticket} from "./ticket";

export const TicketList = ({session, isAdmin = false}) => {

    const dispatch = useDispatch();
    const {tickets, status} = useSelector((state) => state.tickets);

    useEffect(() => {
        dispatch(getTickets(session.uid, isAdmin));
    }, []);

    return (
        <div>
            {
                !status.pendingGet ?
                    tickets.map(el => (
                        <Ticket el={el} isAdmin={isAdmin}/>
                    ))
                    : <span>Loading...</span>
            }
        </div>
    );
};

