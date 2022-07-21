import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

/** include Thunks */
import {getApplications} from '../../store/applications'

/** MUI Material */
import {IconButton, MenuItem, Menu} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

/** Include Custom Comps */
// import {SamplesButton} from "../excel/SamplesButton";
import {AddUser} from '../add-users'

const iconsOptions = [
    'Add user',
    'Delete'
]

export const Applications = () => {
    const dispatch = useDispatch();
    const {applications, status} = useSelector((state) => state.applications); // Получаем апликейшоны из глобального стейта

    const [addUserVisibility, setAddUserVisibility] = useState(false);

    // Логика работы меню три точки в карточке апликейшона
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const iconHandleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const iconHandleClose = (e, target) => {
        if (e.target.selected === "Add user") {
            setAddUserVisibility(true);

            // let art = document.getElementById('')

            // console.log("E", e.currentTarget)
            console.log("E", e);
            console.log("data", e.target.attributes.data.value)
            console.log("applications", applications)
        }
        setAnchorEl(null);
    };
    const addUser = () => {

    };

    useEffect(() => {
        dispatch(getApplications())
    }, [])

    return (
        <div>
            {
                addUserVisibility
                    ? <AddUser/>
                    : <></>
            }
            {
                status.pendingGet ?
                    <div>Loading...</div>
                    :
                    applications.map((el, idx) => (
                        <div key={el.date}
                             style={{
                                 border: "solid 1px #00000040",
                                 backgroundColor: "#05050008",
                                 borderRadius: "5px",
                                 marginBottom: "5px",
                                 padding: "5px",
                                 textAlign: "left",
                                 display: "flex"
                             }}
                        >
                            <div
                                onClick={() => {console.log(idx)}}
                            >
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
                                        iconsOptions.map((option) => (
                                                <MenuItem key={option} selected={option === "fgdfgd"}
                                                          onClick={(e) => iconHandleClose(e)}>
                                                    {option}
                                                </MenuItem>
                                            )
                                        )
                                    }
                                </Menu>
                            </div>

                            <div>
                                <div><span>Дата заявки: </span><span>{el.date}</span></div>
                                <div><span>ФИО: </span><span>{el.lastName} {el.firstName} {el.middleName}</span>
                                </div>
                                <div><span>Место предыдущей работы: </span><span>{el.prevOrg}</span></div>
                                <div><span>Место текущего трудоустройства: </span><span>{el.org}</span></div>
                                <div><span>Отдел: </span><span>{el.dept}</span></div>
                                <div><span>Должность: </span><span>{el.position}</span></div>
                                <div><span>т.: </span><span>{el.phone}</span></div>
                                <div><span>Кабинет: </span><span>{el.room}</span></div>
                                {/*<SamplesButton profileData={el} />*/}
                            </div>
                        </div>
                    ))
            }
        </div>
    );
};