import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {
  const { user ,logOut} = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign out the current user
      })
      .catch(err => {
        console.error(err.message);
      });
  }
  return (
    //     <div >
    //   <a >daisyUI</a>
    // </div>
    <div className='navbar bg-primary text-primary-content'>
      <Link className='btn btn-ghost normal-case text-4xl mr-8' to='/'>
        City Job
      </Link>
      <Link className='btn btn-ghost normal-case text-xl' to='/'>
        home
      </Link>
      
      <Link className='btn btn-ghost normal-case text-xl' to='/register'>
        register
      </Link>
      
      {user && <Link className='btn btn-ghost normal-case text-xl' to='/profile'>
        profile
      </Link>}
      <Link className='btn btn-ghost normal-case text-xl' to='/about'>
        about
      </Link>
      <Link className='btn btn-ghost normal-case text-xl' to='/order'>
        order
      </Link>
      {user ?
        <>
          <span>{user.email}</span>
          <button onClick={handleLogout} className='ml-2 btn btn-error'>
            SignOut
          </button>
        </>
      : (
        <button>Login</button>
      )}
    </div>
  );
};

export default Header;