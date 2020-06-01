import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../types';
export const AuthState = (props) => {
  const initialState = {
    isAuthenticated: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = () => {
    try {
      dispatch({
        type: LOGIN_SUCCESS
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
        login,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
