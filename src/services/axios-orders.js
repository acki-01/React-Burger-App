/** @format */

import axios from 'axios';
import { DB_API } from './api';

const instance = axios.create({
    baseURL: `${DB_API}`,
});

export default instance;
