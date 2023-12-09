import axios from 'axios';
// import { REACT_APP_HOST } from 'react-native-dotenv';

const api = axios.create({
    // baseURL: 'http://localhost:3001/'
    baseURL: 'http://10.0.2.2:3001/'
    // baseURL: '192.168.100.9/'


});

export default api;