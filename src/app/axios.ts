import axios from 'axios';

export default axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
