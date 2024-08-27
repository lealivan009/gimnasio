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
    dni: string;
    height: number;
    lastWeight: number;
    lastConnection: string;
    weights: Weight[];
    roles: string[];
}
