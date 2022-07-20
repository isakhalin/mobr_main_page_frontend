// Для роутера component/Router/router.js. (component/Router/router.js, component/Router/routes.js, component/utils/consts.js)

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

