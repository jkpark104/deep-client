import axios from 'axios';

const SERVER = 'http://127.0.0.1:5001';
const headers = {
  'Content-Type': 'application/json',
  Authorization: 'JWT fefege...',
};

export const joinApi = async (payload) => {
  try {
    const response = await axios.post(`${SERVER}/user/join`, payload, { headers });

    return response.data;
  } catch (err) {
    return err;
  }
};

export const loginApi = async (payload) => {
  try {
    const response = await axios.post(`${SERVER}/user/login`, payload, { headers });
    const loginUser = JSON.stringify(response.data);

    localStorage.setItem('loginUser', loginUser);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const logoutApi = async () => {
  try {
    const response = await axios.get(`${SERVER}/user/logout`, { headers });

    return response.data;
  } catch (err) {
    return err;
  }
};
