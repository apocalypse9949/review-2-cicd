import axios from 'axios';

const API_URL = 'http://backend:8080/api/auth/';

const signup = (username, email, password) => {
    return axios.post(API_URL + 'signup', {
        username,
        email,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + 'signin', {
            username,
            password,
        })
        .then(() => {
            const user = {
                username,
                password
            };
            localStorage.setItem('user', JSON.stringify(user));
        });
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const authHeader = () => {
    const user = getCurrentUser();
    if (user && user.username && user.password) {
        return { Authorization: 'Basic ' + btoa(user.username + ':' + user.password) };
    }
    return {};
}

export default {
    signup,
    login,
    logout,
    getCurrentUser,
    authHeader
};
