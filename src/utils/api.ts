import axios from "axios";

export const api = axios.create({
  // baseURL: 'http://192.168.15.6:3333',
  baseURL: 'http://10.0.0.100:3333',
});
