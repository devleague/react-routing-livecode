/**
 * ACTIONS
 */
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REDIRECT = 'REDIRECT';

/**
 * Action Creators
 */
export function login(username) {
  return {
    type: LOGIN,
    payload: username,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function redirect(url) {
  return {
    type: REDIRECT,
    payload: url,
  };
}
