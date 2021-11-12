import { useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithPopup,
    signInWithEmailAndPassword,
    updateProfile,
    createUserWithEmailAndPassword,
    getIdToken
} from "firebase/auth";

import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase =()=>{
    // all useState use
    const [user,setUser]=useState({})
    const [error,setError]=useState("");
    const [isLoading,setIsLoading]=useState(true);
     const [admin,setAdmin]=useState(false);
     const [token,setToken]=useState("")
    // auth use all sign in and sign up
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    // // sign in google
     const signInWithGoogle=(location,history)=>{
         setIsLoading(true);
        signInWithPopup(auth, googleProvider)
         .then((result) => {
            
             const user = result.user;
             saveUser(user.email,user.displayName,"PUT")
            setError("");
            const destination= location?.state?.from ||"/";
           history.push(destination);
             // ...
         }).catch((error) => {           
           setError(error.message)
           
         })
         .finally(()=>setIsLoading(false));
     }
    // // register user
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = {
                    email,
                    displayName: name
                };
                setUser(newUser);
                //   save user to database
                saveUser(email, name, "POST")
                //   upate user creation
                updateProfile(auth.currentUser, {
                    displayName: name

                }).then(() => {}).catch((error) => {});

                history.replace("/");

             })
            .catch((error) => {
                setError(error.message);

            })
            .finally(() => setIsLoading(false));

     }
    // // login user use
    const loginUser=(email,password,location,history)=>{
         setIsLoading(true)
         signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                 setError('');
              const destination=location?.state?.from ||"/";
              history.push(destination);
               
            
            })
            .catch((error) => {
                setError(error.message);
            })
              .finally(() => setIsLoading(false));

    }

    // // log out use
    const logOut =()=>{
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        .finally(()=>setIsLoading(false));
        
    }
   
        const saveUser=(email,displayName,method)=>{
         const user={email,displayName};
        fetch("http://localhost:5000/users", {
            method:method,
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data)
         })
         }
    // admin user
        useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res =>res.json())
        .then(data =>setAdmin(data.admin));
    },[user.email]) 
    // observ user state
    useEffect(()=>{
       const unsubscribed= onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                .then(idToken =>{
                    console.log(idToken)
                    setToken(idToken)
                })
            } else {
               setUser({})
            }
            setIsLoading(false)
        });
        return ()=> unsubscribed;
    },[auth])

    // observ user state
   
    return {
        signInWithGoogle,
        admin,
        user,
        token,
        error,
        logOut,
        isLoading,
        loginUser,
         registerUser,

    }
}
export default useFirebase ;