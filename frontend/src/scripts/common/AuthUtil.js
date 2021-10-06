import jwt from 'jsonwebtoken';

export const checkLogin = () => {
    return localStorage.getItem(process.env.REACT_APP_TOKEN_KEY) ? true : false;
}

export const getToken = () => {
    return localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
}

export const setToken = (token) => {
    localStorage.setItem(process.env.REACT_APP_TOKEN_KEY, token);
}

export const printAuthInfo = () => {
    const key = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
    if(key)
        console.log(jwt.verify(key, process.env.REACT_APP_JWT_SECRET_KEY));
    else
        console.log('token not exist');
}