import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserStore = ({children}) =>{

    const [comprar,setComprar] = useState(false)
    return(
        <UserContext.Provider value={{comprar,setComprar}}>
           {children}
        </UserContext.Provider>
    )
}