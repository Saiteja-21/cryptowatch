import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import './auth.css'
const LoginPage = () => {

  const [credentials, setCredentials] = useState({ email: '', password: ''})

  const history = useHistory()
  //console.log('aaa');
  //console.log(history.location);

  const handleLogin = (e) => {
    e.preventDefault();
    let loginEmail=localStorage.getItem('email');
    let loginPassword=localStorage.getItem('password');
    if(loginEmail===credentials.email && loginPassword===credentials.password){
      history.push('/homepage');
    }
    else{
      window.alert('Credentials are not valid');
    }
    }
    

    
    // get the user data from the localStorage if matches take the user to Home page

  
  const handleChange = (e) => {
    e.preventDefault();
    setCredentials({...credentials ,[e.target.name]: e.target.value })
  }

  return (
    <div className='container'>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input email-input">
          <input type="email" placeholder='Enter you email..' required value={credentials.email} name="email" onChange={handleChange} />
        </div>
        <div className="input password-input">
          <input type="password" placeholder='Enter you password' required value={credentials.password} name="password" onChange={handleChange} />
        </div>
        <button type='submit'>Login</button>
        <div className="account">
          <span>Don't have an account?</span>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginPage