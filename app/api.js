// api.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:3001/api'; // Replace with your server URL

// Set the JWT token for authenticated requests
const setAuthToken = async (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await AsyncStorage.setItem('token', token);
    } else {
        delete axios.defaults.headers.common['Authorization'];
        await AsyncStorage.removeItem('token');
    }
};

// Sign Up
export const signUp = async (userData) => {
    const response = await axios.post(`${API_URL}/signup`, userData);
    if (response.data.token) {
        await setAuthToken(response.data.token);
        await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
};

// Login
export const login = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    if (response.data.token) {
        await setAuthToken(response.data.token);
        await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
};

// Recover Password
export const recoverPassword = async (email) => {
    const response = await axios.post(`${API_URL}/recover-password`, { email });
    return response.data;
};

// Get User Details
export const getUserDetails = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        setAuthToken(token);
        const response = await axios.get(`${API_URL}/me`);
        return response.data;
    }
    return null;
};

// Logout
export const logout = async () => {
    await setAuthToken(null);
    await AsyncStorage.removeItem('user');
};
