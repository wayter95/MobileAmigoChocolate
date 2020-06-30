import axios from 'axios';

import {AsyncStorage} from 'react-native';

const TOKEN_KEY = AsyncStorage.getItem('@AmigoChocolate:token');

const api = axios.create({
    baseURL:'http://192.168.100.133:3333',
});

api.interceptors.request.use(
    async config => {
    const token = await TOKEN_KEY;
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    return config;
})

export default api;
