/** @format */

import axios from 'axios';
import { AUTH_API, KEY } from 'services/api';

const createAuthAxiosInstance = (mode) => {
    let status;
    if (mode === 'SIGNUP') {
        status = 'signupNewUser';
    } else if (mode === 'SIGNIN') {
        status = 'verifyPassword';
    }
    return axios.create({ baseURL: `${AUTH_API}${status}?key=${KEY}` });
};
export default createAuthAxiosInstance;
