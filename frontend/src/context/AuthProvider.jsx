import React , { createContext , useState, useContext} from "react";

export const AuthContext = createContext();
export default function AuthProvider({children}) {
    let initialAuthUser = undefined;

    try {
        const storedUser = localStorage.getItem("user");
        initialAuthUser = storedUser ? JSON.parse(storedUser) : undefined;
    } catch (error) {
        console.error("Error parsing auth user from localStorage:", error);
        initialAuthUser = undefined;
    }

    const [authUser, setAuthUser] = useState(initialAuthUser);
    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);
