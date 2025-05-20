import axios from "axios";

console.log(import.meta.env.VITE_BACKEND_URL);
console.log(import.meta.env);

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});
