import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

/** React Router */
import {BrowserRouter, Routes, Route} from 'react-router-dom';

/** Include routes */
import {PublicRoute, PrivateRoute, AdminRoute} from './components/route';

/** Firebase */
import {auth} from './api';
import {onAuthStateChanged} from 'firebase/auth';

/** Custom comps */
import {Header} from './components';

/** Include Thunks */
import {clearProfile, getProfile} from './store/profile';

/** Pages */
import {
  ApplicationsPage,
  ContactsPage,
  GuidesPage,
  LinksPage,
  MainPage,
  LoginPage,
  SignUpPage,
  TicketsPage,
  ProfilePage,
  AdminPage,
} from './pages';

//Style
import './App.css';

export const App = () => {
  const dispatch = useDispatch();
  const [session, setSession] = useState(null);
  const isAuth = !!session;
  const {isAdmin} = useSelector(state => state.profile.form);

  useEffect(() => {
    const authListener = onAuthStateChanged(auth, (user) => {
      if (!!user) {
        setSession(user);
        dispatch(getProfile(user.uid));
      } else {
        setSession(null);
        dispatch(clearProfile());
      }
    });
    return () => authListener();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header user={session}/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/applications" element={<PublicRoute isAuth={isAuth}><ApplicationsPage/></PublicRoute>}/>
          <Route path="/guides" element={<GuidesPage/>}/>
          <Route path="/contacts" element={<PrivateRoute isAuth={isAuth}><ContactsPage/></PrivateRoute>}/>
          <Route path="/links" element={<PrivateRoute isAuth={isAuth}><LinksPage/></PrivateRoute>}/>
          <Route path="/login" element={<PublicRoute isAuth={isAuth}><LoginPage/></PublicRoute>}/>
          <Route path="/profile"
                 element={<PrivateRoute isAuth={isAuth}><ProfilePage session={session}/></PrivateRoute>}/>
          <Route path="/tickets"
                 element={<PrivateRoute isAuth={isAuth}><TicketsPage session={session}/></PrivateRoute>}/>
          <Route path="/admin"
                 element={<AdminRoute isAdmin={isAdmin}><AdminPage session={session} isAdmin={isAdmin}/></AdminRoute>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/*" element={<h1>404. Страница не найдена.</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}