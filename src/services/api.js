import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8081/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const authApi = api;
export const careerApi = api;
export const adminApi = api;
export const progressApi = api;
export const resourceApi = api;
export const roadmapApi = api;
export const studentApi = api;

export default api;