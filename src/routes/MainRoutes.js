import React, { lazy } from 'react';
import { MainComponent } from '../components/MainComponent';
import { Loadable } from '../components/MainComponent/helpers';
import PrivateRoutes from '../pages/Admin/helpers/PrivateRoutes';

const Home = Loadable(lazy(() => import('../pages/Home')));
const Congratulation = Loadable(lazy(() => import('../pages/Congratulation')));
const Recommendation = Loadable(lazy(() => import('../pages/Recommendation')));
const RequestForm = Loadable(lazy(() => import('../pages/RequestForm')));
const CertificateHonor = Loadable(lazy(() => import('../pages/CertificateHonor')));
const Profile = Loadable(lazy(() => import('../pages/Profile/')));
const Admin = Loadable(lazy(() => import('../pages/Admin/Admin')));
const NotFound = Loadable(lazy(() => import('../pages/Notfound')));

const MainRoutes = {
  path: '/',
  element: <MainComponent />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/request_form',
      element: <RequestForm />,
    },
    {
      path: '/congratulation',
      element: <Congratulation />,
    },
    {
      path: "/nug_recommendation",
      element: <Recommendation />,
    },
    {
      path: "/certificate_honor",
      element: <CertificateHonor />,
    },
    {
      path: "/profile/:getUserId",
      element: <Profile />,
    },
    {
      path: "/admin/:adminId",
      element: <PrivateRoutes redirectTo="/"><Admin /></PrivateRoutes>,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default MainRoutes;
