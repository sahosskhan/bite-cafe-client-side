/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from './firebase.config';
import useAxiosPublic from '../hooks/useAxiosPublic';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitprovider = new GithubAuthProvider();
const fbprovider = new FacebookAuthProvider();
const AuthProvider = ({ children }) => {

const axiosPublic = useAxiosPublic();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    } 

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
      };

      const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitprovider );
      };

      const facebookLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, fbprovider );
      };


    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser);
          if (currentUser) {
              const userInfo = {
                email: currentUser.email,
              };
              axiosPublic.post("/jwt", userInfo).then((res) => {
                if (res.data.token) {
                  localStorage.setItem("access-token", res.data.token);
                }
              });
            } else {
              localStorage.removeItem("access-token");
            }
      
          // console.log('current user', currentUser);
          setLoading(false);
      });
      return () => {
          return unsubscribe();
      }
  }, [axiosPublic]);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleLogin,
        githubLogin,
        facebookLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;