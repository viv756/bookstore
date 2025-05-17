import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://bookstore-rpsf.onrender.com",
  withCredentials: true,
});

