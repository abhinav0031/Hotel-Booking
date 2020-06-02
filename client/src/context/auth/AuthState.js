import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../types';
export const AuthState = (props) => {
  const initialState = {
    email: null,
    isAuthenticated: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (email) => {
    try {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: email
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };
  const logout = () => {
    try {
      dispatch({
        type: LOGOUT
      });
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: state.isAuthenticated,
        email: state.email,
        login,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
