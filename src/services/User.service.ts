import axios from "axios";
import { User } from "../models/User";
import { TokenInfo } from "../models/TokenInfo";

//const API_URL = 'http://192.168.1.114:8080';
const API_URL = 'http://192.168.1.114:8080';

export const deleteUser = async (id: string): Promise<void> => {
    try {
        const response = await axios.delete(`${API_URL}/api/admin/users/${id}`);
        console.log("user deleted succesfully", response.data)
    } catch (error) {
        console.log("Error deleting user: ", error);
        throw error;
    }
}

export const getAllUsers = async (): Promise<User[]> => {
    const response = await axios.get(`${API_URL}/api/users`);
    return response.data as User[];
}

export const getOneUser = async (id: string): Promise<User> => {
    try {
        const response = await axios.get(`${API_URL}/api/users/${id}`);
        return response.data as User;
    } catch (error) {
        // Aquí puedes manejar el error, por ejemplo, lanzar una excepción personalizada o manejar el error de otro modo
        console.error(`Failed to fetch user with ID: ${id}`, error);
        throw new Error('Failed to fetch user');
    }
}

export const updateUser = async (id: string, updatedUser: Partial<User>): Promise<User> => {
    try {
        const response = await axios.put(`${API_URL}/api/users/${id}`, updatedUser);
        return response.data as User;
    } catch (error) {
        console.error(`Failed to update user with ID: ${id}`, error);
        throw new Error('Failed to update user');
    }
};

export const getToken = async (email: string, password: string): Promise<TokenInfo> => {
    try {
        // Realiza la petición con encabezado adicional para evitar caché
        const response = await axios.post<TokenInfo>(`${API_URL}/auth/login`, {
            email: email,
            password: password
        }, {
            headers: {
                'Cache-Control': 'no-cache'
            }
        });

        return response.data;
    } catch (error) {
        console.error(`Failed login: ${error}`);
        throw new Error('Failed login');
    }
};