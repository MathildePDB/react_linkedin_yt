import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase'
import { useDispatch } from 'react-redux';
import login from './features/userSlice.js'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const logginToApp = (e) => {
    e.preventDefault();
  };

  const register = () => {
    if (!name) {
      return alert('Please enter a full name!');
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
            }))
        });
    }).catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <img
        src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itokwg_lR0Vks'
        alt='Logo linkedIn'
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full name (required if registering'
          type='text'
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder='Profile pic URL (optional)'
          type='text'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          type='email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          type='password'
        />
        <button type='submit' onClick={logginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member ?{' '}
        <span className='login__register' onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;
