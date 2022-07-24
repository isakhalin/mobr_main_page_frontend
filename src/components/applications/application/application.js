import React, {useState} from 'react';

/** MUI Material */
import {IconButton, Menu, MenuItem} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

/** Include Custom Comps */
import {AddUser} from "../../add-users";


const iconsOptions = [
    'Add user',
    'Delete'
]

export const Application = ({application, complete}) => {
    const [addUserVisibility, setAddUserVisibility] = useState(false);

    // Логика работы меню три точки в карточке апликейшона
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const iconHandleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const iconHandleClose = (option) => {
        if (option === "Add user") {
            addUser();
        }
        setAnchorEl(null);
    };
    const addUser = () => {
        setAddUserVisibility(!addUserVisibility);
    };

    return (
        <div>
            {
                addUserVisibility
                    ? <AddUser application={application}/>
                    : <></>
            }
            <div
                style={{
                    border: "solid 1px #00000040",
                    backgroundColor: "#05050008",
                    borderRadius: "5px",
                    marginBottom: "5px",
                    padding: "5px",
                    textAlign: "left",
                    display: "flex",
                    color: complete ? 'rgba(0,0,0,0.17)' : ''
                }}
            >
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
                            iconsOptions.map((option) => (
                                    <MenuItem key={option} selected={option === "fgdfgd"}
                                              onClick={() => iconHandleClose(option)}>
                                        {option}
                                    </MenuItem>
                                )
                            )
                        }
                    </Menu>
                </div>

                <div>
                    <div><span>Дата заявки: </span><span>{application.date}</span></div>
                    <div>
                        <span>ФИО: </span><span>{application.lastName} {application.firstName} {application.middleName}</span>
                    </div>
                    <div><span>Место предыдущей работы: </span><span>{application.prevOrg}</span></div>
                    <div><span>Место текущего трудоустройства: </span><span>{application.org}</span></div>
                    <div><span>Отдел: </span><span>{application.dept}</span></div>
                    <div><span>Должность: </span><span>{application.position}</span></div>
                    <div><span>т.: </span><span>{application.phone}</span></div>
                    <div><span>Кабинет: </span><span>{application.room}</span></div>
                    {/*<SamplesButton profileData={el} />*/}
                </div>
            </div>
        </div>
    );
};