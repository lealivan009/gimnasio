import axios from "axios";
import { User } from "../models/User";

const API_URL = 'http://192.168.1.117:8080';

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


export const getToken = async (email: string, password: string): Promise<string> => {
    try {
        // Envía el cuerpo de la solicitud como un objeto JSON
        const response = await axios.post<string>(`${API_URL}/auth/login`, {
            email: email,   // Se asigna el valor del parámetro 'email' al campo 'email' en el cuerpo
            password: password // Se asigna el valor del parámetro 'password' al campo 'password' en el cuerpo
        });
        return response.data; // Asumiendo que la API devuelve el token directamente como un string
    } catch (error) {
        console.error(`Failed login: ${error}`);
        throw new Error('Failed login');
    }
};
