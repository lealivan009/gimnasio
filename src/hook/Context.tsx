import React, { createContext, useState, ReactNode } from 'react';

// Definimos el tipo de los valores que se van a compartir
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

// Creamos el contexto con un valor inicial
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Aquí usamos React.FC para que incluya el `children` automáticamente
const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<string>('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
