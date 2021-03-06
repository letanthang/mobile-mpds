import {
  USERID_CHANGED, PASSWORD_CHANGED, REMEMBER_ME_CHANGED, LOGIN_USER,
  LOGOUT_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_USERT62,
  AUTO_LOGIN_SUCCESS,
} from './types';

export const userIDChanged = (text) => {
  return {
    type: USERID_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const rememberMeChanged = () => {
  return {
    type: REMEMBER_ME_CHANGED,
  };
};

export const loginUser = (userid, password, rememberMe) => {
  return { type: LOGIN_USER, payload: { userid, password, rememberMe } };
}

export const loginUserT62 = (t62) => {
  return { type: LOGIN_USERT62, payload: { t62 } };
};

export const loginUserSucess = (response, rememberMe) => {
  const { userInfo, session } = response.data[0];
  return {
    type: LOGIN_USER_SUCCESS,
    payload: { userInfo, session, rememberMe },
  };
};

export const autoLoginSuccess = () => {
  return { type: AUTO_LOGIN_SUCCESS };
};

export const loginUserFail = (error) => {
  return {
    type: LOGIN_USER_FAIL,
    payload: { error },
  };
};

export const logoutUser = (message) => {
  return {
    type: LOGOUT_USER,
    payload: { message },
  };
};
