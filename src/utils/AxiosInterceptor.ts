import axios, { AxiosRequestConfig } from "axios";
import Cookies from "universal-cookie";

const token = new Cookies().get("TOKEN");

// Set config defaults when creating the instance
export const fetchService = axios.create({
  timeout: 20000, // request timeout
});

// Alter defaults after instance has been created
if (token) {
  fetchService.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
