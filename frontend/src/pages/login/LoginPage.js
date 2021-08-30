import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/theme-common.css';
import '../../css/theme-dark.css';
import logo from '../../images/devh.PNG';

function LoginPage() {
    return (
        <>
        <div className="t-login-container">
            <div className="t-login-logo">
                <img id="login-logo" src={logo} alt="LOGO" />
            </div>
            <div className="t-login-form">
                <form className="form-signin" method="post" action="/login">
                    <label htmlFor="username" className="sr-only">Username</label>
                    <input type="text" id="username" name="username" className="form-control" placeholder="ID" required autoFocus autoComplete="off"></input>
                    <div className="p-1"></div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" id="password" name="password" className="form-control" placeholder="PASSWORD" required autoComplete="off"></input>
                    <input name="_csrf" type="hidden" value="dd2f29a7-9025-4051-a405-8422eb6ed7c2" />
                    <div className="p-1"></div>
                    <a href="/" id="login-submit" className="btn btn-lg btn-secondary btn-block" type="submit"><FontAwesomeIcon id="login-icon" icon={faSignInAlt} /></a>
                </form>
            </div>
        </div>
        </>
    );
}

export default LoginPage;