import { useEffect, useState } from "react";
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";



 export const AuthContext = createContext(null)
 const auth = getAuth(app);


const AuthProvider = ({children}) => {
    
   const [user, setUser]= useState(null)
   const [loading, setLoading]= useState(true)
   const googleProvider = new GoogleAuthProvider()
   const axiosPublic = UseAxiosPublic() 

   const createUser = (email, password) =>{
    setLoading(true)
     return createUserWithEmailAndPassword(auth, email, password)
}

// singIn
const signIn = ( email, password )=>{
setLoading(true)
return signInWithEmailAndPassword(auth,email, password)
}

//  logout
const logOut = ()=>{
setLoading(true)
return signOut (auth)

}

// google login
const googleSingIn = ()=>{
  setLoading(true)
  return signInWithPopup(auth, googleProvider)
}

   // updateUserProfile
   const   updateUserProfile = (name, photo)=>{
    return   updateProfile(auth. currentUser,{
            displayName: name, photoURL:photo
      });
  } 


    useEffect(()=> {

    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
              setUser(currentUser)
              if(currentUser){
                  // get token and store client
                  const userInfo = {email: currentUser.email}
                  axiosPublic.post('/jwt', userInfo )
                  .then(res=>{
                    if (res.data.token){
                       localStorage.setItem('access-token', res.data.token)
                       setLoading(false)
                    }
                  })
              }
              else{
                //  do something
                localStorage.removeItem('access-token')
                setLoading(false)
              }
              
         });
          return () =>{
            return unSubscribe
            
          }

    },[axiosPublic])

    const authInfo = {
         user,
         loading,
         createUser,
         signIn,
         logOut,
         googleSingIn,
         updateUserProfile

    }

    return (
        <AuthContext.Provider value={authInfo} >
            
         {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;