import { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

export const SettingsContextProvider = props => {
    const { children } = props;
    const [colorChange, setColorChange] = useState(false);
    return(
        <SettingsContext.Provider value={{ colorChange, setColorChange }}>
            {children}
        </SettingsContext.Provider>
    )
}

export const useSettingsContext = () => useContext(SettingsContext);