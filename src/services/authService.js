import axios from "axios";

const API_URL = "http://localhost:30083/back1/api/auth"; // corrected URL

export const signup = async (username, email, password) => {
  const response = await axios.post(`${API_URL}/signup`, { username, email, password });
  return response.data;
};

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};
