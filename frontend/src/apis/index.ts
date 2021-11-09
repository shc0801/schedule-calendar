import axios from "axios";

const baseUrl = "http://test.itsw.info:10001";

const Api = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    'Accept': 'application/json'
  },
});

export default Api;
