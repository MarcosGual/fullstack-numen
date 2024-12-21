import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [tema, setTema] = useState("claro");

  const cambiarTema = () => {
    //operador ternario
    setTema((prevState) => (prevState === "claro" ? "oscuro" : "claro"));
  };

  return (
    <ThemeContext.Provider value={{tema, cambiarTema}}>
        {children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;