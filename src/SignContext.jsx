import { useContext, useState } from "react";
import { createContext } from "react";

const SignContext = createContext();

export const SignContextProvider = props => {
    const { children } = props;
    const [signBool, setSignBool] = useState(false);
    return (
        <SignContext.Provider value={{ signBool, setSignBool }}>
            {children}
        </SignContext.Provider>
    )
}

export const useSignContext = () => useContext(SignContext);