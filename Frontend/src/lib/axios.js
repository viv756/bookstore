import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:import.meta.env.MODE === "development"
      ? "http://localhost:4001"
      : import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});
