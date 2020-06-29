import axios from 'axios';

import {AsyncStorage} from 'react-native';

const api = axios.create({
    baseURL:'http://192.168.100.133:3333',
});


export default api;
