import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';


const Login = () => {
const [success, setSuccess] = useState('')
const [error, setError] = useState('')

  const { loginUser } = useContext(AuthContext);
  console.log(loginUser);
  
  const handleRegister = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError('');
        setSuccess('Login successful');
        form.reset();
      })
      .catch(err => {
        setSuccess('')
        setError(err.message);
        console.error(err.message);
      });
  }


  return (
    <div className='w-6/12 mx-auto'>
      <form onSubmit={handleRegister} action=''>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Your Email</span>
          </label>
          <label className='input-group input-group-vertical'>
            {/* <span>Email</span> */}
            <input
              type='email'
              name='email'
              placeholder='abc@gmail.com'
              className='input input-bordered'
              required
            />
          </label>
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Your Password</span>
          </label>
          <label className='input-group input-group-vertical'>
            {/* <span>Email</span> */}
            <input
              type='text'
              name='password'
              placeholder='******'
              className='input input-bordered'
              required
            />
          </label>
        </div>
        <br />
        <p>{error} </p>
        <p>{success}</p>
        <div>
          <input type='submit' value='Login' className='btn btn-success' />
        </div>
      </form>
      <Link to='/register' className='label-text-alt link link-hover'>
        New to CityJob??Please Register
      </Link>
    </div>
  );
};

export default Login;