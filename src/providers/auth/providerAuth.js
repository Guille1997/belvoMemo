import { espinaNegraApi } from "../../api";
import { authApi } from "./configAuth";


export const loginWithEmailAndPassword = async ({
  email_usuario,
  password,
}) => {
  try {
    const { data } = await authApi.post("login", {
      email: email_usuario,
      password: password,
    });
    return {
      ok: true,
      token: data.access_token,
      user: data.user,
      errors: "",
    };
  } catch (error) {
    return { ok: false, error: error.response.data.message };
  }
};
export const registerWithEmailAndPassword = async ({
  email_usuario,
  password,
  username
}) => {
  try {
    const { data } = await authApi.post("register", {
      email: email_usuario,
      password: password,
      username
    });
    return {
      ok: true,
      message: data.message,
      errors: data.message,
    };
  } catch (error) {
    console.log("///", error.response ? error.response.data.detail : error.message);
    return {
      ok: false,
      error: error.response ? error.response.data.detail : "Error al registrar el usuario.",
    };
  }
};
export const getDataWithToken = async () => {
  try {
    const { data } = await authApi.get("users/me");
    return {
      ok: true,
      token: data.token,
      user: data.user,
      errors: "",
    };
  } catch (error) {
    return { ok: false, error: error.response.data.message };
  }
};

export const logoutAccount = async () => {
  try {
    const { data } = await authApi.post("logout");
    return { ok: true };
  } catch (error) {
    return { ok: false };
  }
};
