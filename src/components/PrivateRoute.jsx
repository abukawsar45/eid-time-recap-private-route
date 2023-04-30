import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const { user,loading } = useContext(AuthContext);
  if (loading) {
    <progress className='progress progress-primary w-56'></progress>;
  }
  if (user)
  {
    return children;
  }
  return <Navigate to='/login'></Navigate>
}; 

export default PrivateRoute;