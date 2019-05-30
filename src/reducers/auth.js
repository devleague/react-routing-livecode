import { LOGIN, LOGOUT, REDIRECT } from '../actions';

const userString = window.localStorage.getItem('user');
let user = {};
try {
  user = JSON.parse(userString) || {};
} catch (err) {
  console.log('User not found');
}

const initialState = {
  username: user.username || '',
  loggedIn: user.loggedIn || false,
  redirectUrl: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      const newLoginState = Object.assign({}, state, { loggedIn: true, username: action.payload });
      const loginUser = { username: newLoginState.username, loggedIn: newLoginState.loggedIn };
      window.localStorage.setItem('user', JSON.stringify(loginUser));
      return newLoginState;
    case LOGOUT:
      const newLogoutState = Object.assign({}, state, { loggedIn: false });
      const logoutUser = { username: newLogoutState.username, loggedIn: newLogoutState.loggedIn };
      window.localStorage.setItem('user', JSON.stringify(logoutUser));
      return newLogoutState;
    case REDIRECT:
      return Object.assign({}, state, { redirectUrl: action.payload });
    default:
      return state;
  }
};

export default authReducer;
