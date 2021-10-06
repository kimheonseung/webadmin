import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'css/theme-common.css';
import 'css/theme-dark.css';
import logo from 'images/devh.PNG';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Component } from 'react';
import { setToken } from 'scripts/common/AuthUtil';

function LoginPage({location, props}) {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const loginUrl = 'http://localhost:8080/api/auth/login';

    const handleClick = () => {
        axios
        .post(loginUrl, {userId: userId, password: password})
        .then((rs) => {
            console.log(rs);
            const status = rs.data.status;
            if(status === 200) {
                setToken(rs.data.token);
                history.push("/dashboard");
            }
            else 
                alert('아이디 또는 비밀번호를 확인해주세요.');
        })
        .catch((e) => {
            console.log('catch !');
            console.log(e);
        })
        .finally(() => {
            console.log('finally !');
        });
    }

    return (
        <>
        <div className="t-login-container">
            <div className="t-login-logo">
                <img id="login-logo" src={logo} alt="LOGO" />
            </div>
            <div className="t-login-form form-signin">
                {/* <form className="form-signin" method="post" action="/login"> */}
                <label htmlFor="userId" className="sr-only">User Id</label>
                <input 
                    type="text" 
                    id="userId" 
                    name="userId" 
                    className="form-control" 
                    placeholder="ID" 
                    required 
                    autoFocus 
                    autoComplete="off" 
                    value={userId} 
                    onChange={({target: {value}}) => setUserId(value)}
                />
                <div className="p-1"></div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    className="form-control" 
                    placeholder="PASSWORD" 
                    required 
                    autoComplete="off" 
                    value={password} 
                    onChange={({target: {value}}) => setPassword(value)}
                />
                <input name="_csrf" type="hidden" value="dd2f29a7-9025-4051-a405-8422eb6ed7c2" />
                <div className="p-1"></div>
                <button 
                    id="login-submit" 
                    className="btn btn-lg btn-secondary btn-block"
                    onClick={handleClick}
                >
                    <FontAwesomeIcon id="login-icon" icon={faSignInAlt} />
                </button>
                {/* </form> */}
            </div>
        </div>
        </>
    );
}

export default LoginPage;