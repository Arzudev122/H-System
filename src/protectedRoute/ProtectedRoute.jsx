import React from 'react'
import { useAuth } from '../hooks/context/authcontext'
import { Navigate } from 'react-router-dom'

const protectedRoute = ({children}) => {
  const {user,token}=useAuth();

  if(!user || !token){
    return <Navigate to="/login" replace />
  }

    return children;
};

export default protectedRoute