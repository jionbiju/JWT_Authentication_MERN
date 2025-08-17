import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'http://localhost:5000/api/users',
    withCredentials:true
})

const registerUser = async (userData) => {
    try {
        const response = await axiosInstance.post('/register',userData);
        return response.data;
    } catch (error) {
        console.log("Error in Registration:",error);
        throw error;
    }
}

const loginUser = async (userData) => {
    try {
        const response = await axiosInstance.post('/login',userData);
        return response.data;
    } catch (error) {
        console.log("Error in Login:",error);
        throw error;
    }
}

export const getUserById = async () => {
  try {
    const response = await axiosInstance.get('/profile');
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};


export {registerUser,loginUser};