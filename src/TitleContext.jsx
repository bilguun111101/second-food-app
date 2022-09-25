import { useContext, useState } from "react";
import { createContext } from "react";

const TitleContext = createContext();

export const TitleContextProvider = props => {
    const { children } = props;
    const [title, setTitle] = useState("Нэвтрэх");
    return(
        <TitleContext.Provider value={{ title, setTitle }} >
            {children}
        </TitleContext.Provider>
    )
}

export const useTitleContext = () => useContext(TitleContext);