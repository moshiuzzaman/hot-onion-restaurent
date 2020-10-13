
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivetRoute = ({ children, ...rest }) => {
    const [loginUser,setLoginUser]=useContext(UserContext)
    return (
        <Route
        {...rest}
        render={({ location }) =>
          loginUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivetRoute;