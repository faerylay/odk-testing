import React from 'react';
import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'

const PrivateRoutes = ({ children, redirectTo }) => {
  const token = localStorage.getItem('profile')
  let decoded;
  if (token) {
    decoded = jwt_decode(token);
  }
  return decoded?.role !== 'Admin' ? <Navigate to={redirectTo} /> : children;
}



export default PrivateRoutes