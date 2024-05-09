import { setToken } from "../../providers/auth/configAuth";
import {
  getDataWithToken,
  loginWithEmailAndPassword,
  logoutAccount,
  registerWithEmailAndPassword
} from "../../providers/auth/providerAuth";
import { checkingCredentials, login, logout, onError } from "./authSlice";

export const checkingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startLoginWithEmailPassword = (values, navigate = () => {}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { ok, user, error, token } = await loginWithEmailAndPassword(values);
    
    if (ok) {
      dispatch(login({ token, user, error }));
      setToken(token);

      navigate();
    } else {
      dispatch(onError(error));
    }
  };
};

export const startRegisterWithEmailPassword = (values, navigate = () => {}) => {
  return async (dispatch) => {
   

    const { ok ,error} = await registerWithEmailAndPassword(values);
    
    if (ok) {
      const {  user, error, token } = await loginWithEmailAndPassword(values);
      dispatch(login({ token, user, error }));
      setToken(token);
      navigate();
    } else {
      dispatch(onError(error));
    }
  };
}

export const startGetDataWithToken = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, user, error, token } = await getDataWithToken();

    if (ok) {
      dispatch(login({ token, user, error }));
      setToken(token);
    } else {
      dispatch(onError(error));
    }
  };
};
