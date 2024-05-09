// import axios from "axios";

// export const TOKEN_KEY = "TOKEN";
// export const authApi = axios.create({
//   // baseURL: "http://18.118.141.232:8000/",
//   // baseURL: "http://0.0.0.0:8000",
//   baseURL: "https://64.23.227.224",
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`,
//     'Acces-Control-Allow-Origin':'*',
//   },
// });

// export const setToken = (token) => {
//   localStorage.setItem(TOKEN_KEY, token);
// };

// export const getToken = () => {
//   return localStorage.getItem(TOKEN_KEY);
// };

// export const deleteToken = () => {
//   localStorage.removeItem(TOKEN_KEY);
// };
import axios from "axios";

export const TOKEN_KEY = "TOKEN";
const token = localStorage.getItem(TOKEN_KEY);

export const authApi = axios.create({
  baseURL: "https://64.23.227.224/",
  headers: {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  },
  withCredentials: true, // Asegura el envío de cookies entre dominios
});

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const deleteToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};