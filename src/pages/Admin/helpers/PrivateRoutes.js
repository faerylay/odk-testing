import React from 'react';
import { Navigate } from 'react-router-dom';
import { authAccess } from '../../../auth'

const PrivateRoutes = ({ children, redirectTo }) => {
  return authAccess()?.role !== 'Admin' ? <Navigate to={redirectTo} /> : children;
}

export default PrivateRoutes