import { LOGIN, LOGOUT, REDIRECT } from '../actions';

const initialState = {
  username: '',
  loggedIn: false,
  redirectUrl: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, { loggedIn: true, username: action.payload });
    case LOGOUT:
      return Object.assign({}, state, { loggedIn: false });
    case REDIRECT:
      return Object.assign({}, state, { redirectUrl: action.payload });
    default:
      return state;
  }
};

export default authReducer;
