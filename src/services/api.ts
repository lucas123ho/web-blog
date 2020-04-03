import axios from 'axios';

import { url } from '../api.config';

const api = axios.create({
    baseURL: url
});

export default api;