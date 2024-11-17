import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);
   const [user,setUser] = useState(null);
   const [loading,setLoading] = useState(true)
//    console.log(loading,user)
    // user sign in
   const createUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    
   }

//    user login
   const userLogin = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

//    userLogOut
   const logOut = () =>{
    setLoading(true)
    return signOut(auth)
   }

//    update profile
   const updateUserProfile = (updateData) =>{
    return updateProfile(auth.currentUser, updateData)
   }

    const authInfo = {
        user,
        setUser,
        createUser,
        userLogin,
        logOut,
        loading,
        updateUserProfile
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;