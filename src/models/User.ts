export interface Weight {
    id: number;
    created: string;  // Fecha en formato string
    weight: number;
}

export interface User {
    id: number;
    name: string;
    lastName: string;
    photo: string;
    description: string;
    birthDate: string;
    username: string;
    email: string;
    password: string;
    phone: string;
    province: string,
    departament: string,
    address: string,
    dni: string;
    height: number;
    lastWeight: number;
    lastConnection: string;
    created: string;
    weights: Weight[];
    roles: string[];
}
