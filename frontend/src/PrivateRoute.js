import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { checkLogin } from 'scripts/common/AuthUtil';

function PrivateRoute( { component: Component, ...rest } ) {
    useEffect(() => {
    })
    return (
        <Route
            {...rest}
            render = { (props) =>
                checkLogin() ? (
                    <Component {...props} />
                ) : (
                    <Redirect 
                        to={  { pathname: '/login', state: {from: props.location} }  } 
                    />
                )
            }
        />
    );
}

export default PrivateRoute;