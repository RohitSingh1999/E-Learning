import axios from 'axios';

const API_URL = 'http://localhost:5000/auth/';

const Registration = (formData) => {
    return axios.post(API_URL + 'Registration', formData);
};

const Login = (data) => {
    return axios.post(API_URL + 'Login', data);
};

export default {
    Registration,
    Login
};
