import React, { useContext } from 'react'
import { ThemeContext } from './Context'

export const UseTheme = () => {
 const context = useContext(ThemeContext);
 
 if(!context){
    throw new Error("useTheme must be used within a ThemeProvider");
 }

 return context;
}

