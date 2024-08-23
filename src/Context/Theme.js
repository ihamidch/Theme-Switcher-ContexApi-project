import { useContext } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext({
    ThemeMode : 'light',
    darkTheme : () => {},
    lightTheme : () => {},
});
export const ThemeProvider = ThemeContext.Provider; 
export default function userTheme() {
    return (
        useContext(ThemeContext)
    )
}