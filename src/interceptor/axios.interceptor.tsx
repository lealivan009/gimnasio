//npm i axios@latest
import axios, { InternalAxiosRequestConfig } from 'axios';
import { LocalStorageKeys } from '../utilities/local-storage-manager';

export const AxiosInterceptor = () => {

    axios.interceptors.request.use((request) => {
        console.log(request.url);
        if (request.url?.includes('api')) {
            return updateHeader(request);
        } else {
            return request;
        }
    }, (error) => {
        // Maneja cualquier error en la configuración de la solicitud
        if (axios.isCancel(error)) {
            console.log('Request canceled:', error.message);
        }
        return Promise.reject(error);
    }
    );

    /*
    Actualizar encabezado de peticiones
    */
    const updateHeader = (request: InternalAxiosRequestConfig): InternalAxiosRequestConfig | Promise<never> => {

        const token = localStorage.getItem(LocalStorageKeys.TOKEN);

        if (!token) {
            // Muestra una alerta si el token no está presente en localStorage
            alert("Token not found!");
            console.log("Token not found");

            // Cancela la solicitud
            return Promise.reject(new axios.Cancel('Token is missing'));
        } else {
            // Usar el método set para asignar los encabezados
            request.headers.set('Authorization', `Bearer ${token}`);
            request.headers.set('Content-Type', 'application/json');
        }

        return request;
    };
};
