import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL ?? 'https://restful-booker.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});