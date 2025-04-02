// import React, { createContext, useState, useEffect, useContext } from 'react';

// interface ThemeContextType {
//   theme: string;
//   setTheme: (theme: string) => void;
// }

// const ThemeContext = createContext<ThemeContextType>({
//   theme: 'light', // Default theme
//   setTheme: () => {}, // Placeholder function
// });

// export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

//   useEffect(() => {
//     document.documentElement.setAttribute('data-theme', theme);
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);