import React, { lazy } from 'react';
import { Loadable } from '../components/MainComponent/helpers';
import MinimalComponent from '../components/MinimalComponent';
const NotFound = Loadable(lazy(() => import('../pages/Notfound')));

const AuthLogin = Loadable(lazy(() => import('../pages/Authentication/Login')))

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalComponent />,
  children: [
    {
      path: '/login',
      element: <AuthLogin />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
};

export default AuthenticationRoutes;
