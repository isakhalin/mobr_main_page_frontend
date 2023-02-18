import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {IconButton, Menu, MenuItem} from "@mui/material";

/** Include Thunks */
import {removeUserTickets} from '../../../store/tickets'

import {removeApplication} from "../../../store/applications";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {removeUserProfile} from "../../../store/profile";

const menuIconButtons = [
    "Удалить"
];

export const User = ({profile, isAdmin}) => {
    const dispatch = useDispatch();
    // id MongoDB пользователя
    const {id} = useSelector((state) => state.profile.form);
    const {_id, lastName, middleName, firstName, org, phoneNumber, phoneNumberMobile} = profile;

    // Логика работы меню три точки в карточке пользователя
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const iconHandleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const iconHandleClose = (option) => {
        if (option === "Удалить") {
            // id - id пользователя, от имени которого выполняется запрос
            // _id - id пользователя, тикеты которого нужно удалить
            dispatch(removeUserTickets(id, _id));
            dispatch(removeUserProfile(_id));
            // dispatch(removeUserTickets(profile.uid, isAdmin)); // Логика для работы с FB
        }
        setAnchorEl(null);
    };

    return (
        <div>
            <div>
                <div style={{display: "flex"}}>
                    <div>
                        <span>Фамилия: </span><span>{lastName}</span>
                    </div>
                    <div>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={iconHandleClick}
                            style={{padding: "2px"}}
                        >
                            <MoreVertIcon/>
                        </IconButton>

                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={iconHandleClose}
                            PaperProps={{
                                style: {
                                    maxHeight: 48 * 4.5,
                                    width: '20ch',
                                },
                            }}
                        >
                            {
                                menuIconButtons.map((option) => (
                                    <MenuItem key={option} selected={option === "fgdfgd"}
                                              onClick={() => iconHandleClose(option)}>
                                        {option}
                                    </MenuItem>
                                ))
                            }
                        </Menu>
                    </div>
                </div>
                <div><span>Имя: </span><span>{firstName}</span></div>
                <div><span>Отчество: </span><span>{middleName}</span></div>
                <div><span>Организация: </span><span>{org}</span></div>
                <div><span>Рабочий телефон: </span><span>{phoneNumber}</span></div>
                <div><span>Мобильный телефон: </span><span>{phoneNumberMobile}</span></div>
            </div>

        </div>
    );
};