import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css';

const Login = () => {
    const {user,signInUsingGoogle} = useFirebase();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = e => {
       
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            e.preventDefault();
    }
    return (
        <div className="login-width mx-auto mt-4">
          <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <p>---------------------------- or ---------------------------- </p>
            <div className="mb-3 form-check">
                <button className="btn btn-outline-info" onClick={handleGoogleLogin}>Login with Google</button>
                <br />
                <br />
                <Link to="/register" className="ms-3">New User</Link>
                <Link to="/register" className="ms-3">Forget Password?</Link>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};
export default Login;