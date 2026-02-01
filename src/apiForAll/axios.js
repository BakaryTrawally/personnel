import axios from "axios";

const api = axios.create({
  baseURL: "https://personnel-5a8o.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
