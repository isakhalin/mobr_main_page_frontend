/** Include Utils */
import {
  MAIN_ROUTE,
  APPLICATIONS_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  LINKS_ROUTE,
  CONTACTS_ROUTE,
  TICKETS_ROUTE,
  ADMIN_ROUTE,
} from '../utils';

/** Include Page Comps */
import {
  ApplicationsPage,
  ContactsPage,
  LinksPage,
  MainPage,
  LoginPage,
  TicketsPage,
  ProfilePage,
  AdminPage,
} from '../../pages';

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
];

export const adminRoutes = [
  {
    path: ADMIN_ROUTE,
    component: AdminPage,
  },
];

