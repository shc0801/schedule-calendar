import axios from "axios";

const baseUrl = "http://localhost:3002";

const Api = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default Api;
