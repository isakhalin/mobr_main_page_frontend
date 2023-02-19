import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

/** include Thunks */
import {getApplications} from '../../store/applications'

/** Include Custom Comps */
import {Application} from './application';

export const Applications = () => {
  const dispatch = useDispatch();
  const {applications, status} = useSelector((state) => state.applications);

  useEffect(() => {
    dispatch(getApplications());
  }, []);

  return (
    <div>
      {
        status.pendingGet
          ?
          <div>Загружаю...</div>
          :
          applications.map((el) => (
            <Application
              key={el.date}
              application={el}
              complete={el.isComplete}
            />
          ))
      }
    </div>
  );
};