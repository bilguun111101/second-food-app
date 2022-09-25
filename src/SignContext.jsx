import { createContext, useContext, useState } from "react";

const SignContext = createContext();

export const SignContextProvider = props => {
    const { children } = props;
    const [signBool, setSignBool] = useState(false);
    const [userImformation, setUserImformation] = useState({})
    return(
        <SignContext.Provider value={{ signBool, setSignBool, userImformation, setUserImformation }}>
            {children}
        </SignContext.Provider>
    )
}

export const useSignContext = () => useContext(SignContext)