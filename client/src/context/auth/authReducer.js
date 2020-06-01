import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../types';
export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false
      };
    case LOGOUT:
      console.log('logout');
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false
      };
  }
};
