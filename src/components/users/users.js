import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

/** include Thunks */
import {getAllProfiles} from '../../store/profile'

export const Users = () => {
    const dispatch = useDispatch();
    const {profiles, status} = useSelector((state) => state.profile);

    console.log("PROFILES", profiles)

    useEffect(() => {
        dispatch(getAllProfiles())
    }, [])

    return (
        <div>
            {
                status.pendingAllGet ?
                    <div>Loading...</div>
                    :
                    profiles.map((el, idx) => (
                        <div key={el.uid} style={{
                            border: "solid 1px #00000040",
                            backgroundColor: "#05050008",
                            borderRadius: "5px",
                            padding: "5px",
                            marginBottom: "5px",
                            display: "flex",
                            textAlign: "left"
                        }}>
                            <div style={{paddingRight: "5px"}}>
                                {idx + 1}
                            </div>
                            <div>
                                <div><span></span><span>{el.lastName}</span></div>
                                <div><span></span><span>{el.middleName}</span></div>
                                <div><span></span><span>{el.firstName}</span></div>
                                <div><span></span><span>{el.org}</span></div>
                                <div><span></span><span>{el.phoneNumber}</span></div>
                                <div><span></span><span>{el.phoneNumberMobile}</span></div>
                            </div>
                        </div>
                    ))
            }
        </div>
    );
};

// avatar: "anonimus.jpg"
// dept: "Реализации проектов и программ"
// firstName: "Роман"
// isAdmin: true
// isMinobr: false
// lastName: "Степанов"
// middleName: "Викторович"
// org: "ГКУ Централизованная бухгалтерия образования"
// phoneNumber: "465959"
// phoneNumberMobile: "89241888266"