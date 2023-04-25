import { createContext , useState, useContext, useEffect } from "react";


const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const LOCAL_STORAGE_AUTH_KEY= "authState";


const AuthProvider = ({ children })=>{
    const [state, setState]= useState(false);
    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || false;
        setState(userData)
    },[])

    // useEffect(()=>{
    //     const data = JSON.stringify(state)
    //     localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, data);
    // },[state])
    

    return(
        <AuthContext.Provider value={state}>
            <AuthContextDispatcher.Provider value={setState}>
                {children}
            </AuthContextDispatcher.Provider>
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export const useAuth= () => useContext(AuthContext);
export const useAuthActions= () => useContext(AuthContextDispatcher);