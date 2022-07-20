/** Include Utils */
import {
    MAIN_ROUTE,             // Both route
    GUIDES_ROUTE,           // Both route
    SIGNUP_ROUTE,           // Both route
    APPLICATIONS_ROUTE,     // Public route
    LOGIN_ROUTE,            // Public route
    PROFILE_ROUTE,          // Private route
    LINKS_ROUTE,            // Private route
    CONTACTS_ROUTE,         // Private route
    TICKETS_ROUTE,          // Private route
    ADMIN_ROUTE,            // Admin route
} from '../utils'

/** Include Page Comps */
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
} from "../../pages";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        component: MainPage,
    },
    {
        path: APPLICATIONS_ROUTE,
        component: ApplicationsPage,
    },
    {
        path: LOGIN_ROUTE,
        component: LoginPage,
    }
]

export const privateRoutes = [
    {
        path: PROFILE_ROUTE,
        component: ProfilePage,
    },
    {
        path: LINKS_ROUTE,
        component: LinksPage,
    },
    {
        path: CONTACTS_ROUTE,
        component: ContactsPage,
    },
    {
        path: TICKETS_ROUTE,
        component: TicketsPage
    },
]

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        component: AdminPage,
    },
]
// <Route path="/" element={<MainPage/>}/>
// <Route path="/applications" element={<PublicRoute isAuth={isAuth}><ApplicationsPage/></PublicRoute>}/>
// <Route path="/guides" element={<GuidesPage/>}/>
// <Route path="/contacts" element={<PrivateRoute isAuth={isAuth}><ContactsPage/></PrivateRoute>}/>
// <Route path="/links" element={<PrivateRoute isAuth={isAuth}><LinksPage/></PrivateRoute>}/>
// <Route path="/login" element={<PublicRoute isAuth={isAuth}><LoginPage/></PublicRoute>}/>
// <Route path="/profile" element={<PrivateRoute isAuth={isAuth}><ProfilePage/></PrivateRoute>}/>
// <Route path="/tickets" element={<PrivateRoute isAuth={isAuth}><TiketsPage session={session} isAdmin={isAdmin}/></PrivateRoute>}/>
// <Route path="/admin" element={<AdminRoute isAdmin={isAdmin}><AdminPage/></AdminRoute>}/>
// <Route path="/signup" element={<SignUpPage/>}/>
// <Route path="/*" element={<h1>404. Страница не найдена.</h1>}/>
