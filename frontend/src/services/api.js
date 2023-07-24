import axios from 'axios';

const authToken = localStorage.getItem('gian-auth-token');
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
};
if (authToken)
    headers['Authorization'] = `Bearer ${authToken}`;

const api = axios.create({
    baseURL: 'http://localhost:3333/',
    headers: headers,
});

export default api;