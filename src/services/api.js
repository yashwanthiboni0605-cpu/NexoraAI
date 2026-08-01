import axios from "axios";

const api = axios.create({
  baseURL: "https://nexoraai-jh86.onrender.com",
});

export default api;