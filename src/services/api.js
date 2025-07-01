import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${token}`, // se usar token manual
  },
  withCredentials: false, // pode ser true se backend precisar de cookies
});
