import React, { useState,useEffect } from 'react';
import loginImg from '../assets/log.svg';
import registerImg from '../assets/register.svg';
import { Link, useParams } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import { auth } from '../firebase';
import LoggedIn from './LoggedIn';


function Signup() {


  let { url } = useParams();

  // form management
  const [confirmPass, setConfirmPass] = useState('f');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [passMatch,setPassMatch] = useState(false)

  // // user state change
  const [user, setUser] = useState({});
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Detach the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // user login function
  const login = async (e) => {
    e.preventDefault();

    try {
      const login = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setPassMatch(true)
    }
  };

  // user register function
  const register = async (e) => {
    e.preventDefault();
    email == "" && password == "" && confirmPass == "" && setError(true)
    try {
      const register = !error && await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const provider = new GoogleAuthProvider
  const handleSignInwithGoogle = async ()=>{
    signInWithPopup(auth,provider);
  }

  return (
    <div className={`container ${url === 'signup' ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className={`signin-signup ${user && 'loggedIn'}`}>
           <form action="#" className={`sign-in-form ${user && 'dNone'}`}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" value="Login" className="btn solid" onClick={login} />
            {passMatch && <p style={{ color: 'red' }} >Something went wrong</p>}

          </form> 
          {user && <LoggedIn email={user.email}/>}


          

          <form action="#" className={`sign-up-form ${user && 'dNone'}`}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="confirm password" onChange={(e) => setConfirmPass(e.target.value)} />
            </div>
            <input type="submit" className="btn" value="signup" onClick={register} />
            {error && <p style={{ color: 'red' }} >Something went wrong</p>}

            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" onClick={handleSignInwithGoogle}className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!
            </p>
             <Link to="/signup" >
              <button className='btn transparent' >Sign up</button>
            </Link>
           
            
          </div>
          <img src={loginImg} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.
            </p>
            <Link to="/signin" >
              <button className='btn transparent' >Sign in</button>
            </Link>              
            
          </div>
          <img src={registerImg} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
