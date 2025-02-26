import axios from "axios";

// Create axios instance
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", 
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
// Add response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

// API Calls

// Function to handle user login
export const loginUser = async (credentials) => {
  try {
    const response = await apiClient.post("/login", credentials);

    if (response.data && response.data.token && response.data.payload.user) {
      localStorage.setItem("authToken", response.data.token);

      return { token: response.data.token, user: response.data.payload.user };
    } else {
      throw new Error("Invalid response data");
    }
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const RegisterUser = async (credentials) => {
  try {
    const response = await apiClient.post("/register", credentials);

    console.log("Registration Success:", response.data.user, "testing");

    return response.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.msg || "Registration failed. Please try again.");
  }
};

export default apiClient;
