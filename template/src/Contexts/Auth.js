import {
  createContext,
  useState,
  useMemo,
  useContext,
  // useCallback,
  useEffect,
} from 'react';
import { collection, addDoc } from 'firebase/firestore';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth, db } from 'Utils/firebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  console.log('current user (auth.currentUser):', auth.currentUser);
  console.log('current user:', user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
      } else {
        console.log('User is not authenticated');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signIn = async (email, password) => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const user = userCred.user;
      console.log('User signed in: ', user);
      setUser(user);
      setIsAuthenticated(true);
    } catch (error) {
      console.log('Error signing in');
      console.log(error);
      console.log(`${error.code}: ${error.message}`);
    }
  };
  // const signIn = useCallback(async (email, password) => {
  //   try {
  //     const userCred = await signInWithEmailAndPassword(auth, email, password);
  //     const user = userCred.user;
  //     console.log('User signed in: ', user);
  //     setUser(user);
  //     setIsAuthenticated(true);
  //   } catch (error) {
  //     console.log('Error signing in');
  //     console.log(error);
  //     console.log(`${error.code}: ${error.message}`);
  //   }
  // }, []);

  const signUp = async ({ email, password, name }) => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCred.user;
      console.log('User signed up: ', user);
      setUser(user);
      setIsAuthenticated(true);
      const docRef = await addDoc(collection(db, 'users'), {
        id: user.uid,
        email,
        name,
        user,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.log('Error signing up');
      console.log(error);
      console.log(`${error.code}: ${error.message}`);
    }
  };
  // const signUp = useCallback(async ({ email, password, name }) => {
  //   try {
  //     const userCred = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     const user = userCred.user;
  //     console.log('User signed up: ', user);
  //     setUser(user);
  //     setIsAuthenticated(true);
  //     const docRef = await addDoc(collection(db, 'users'), {
  //       id: user.uid,
  //       email,
  //       name,
  //       user,
  //     });
  //     console.log('Document written with ID: ', docRef.id);
  //   } catch (error) {
  //     console.log('Error signing up');
  //     console.log(error);
  //     console.log(`${error.code}: ${error.message}`);
  //   }
  // }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsAuthenticated(false);
      console.log('User signed out');
    } catch (error) {
      console.log('Error signing out');
      console.log(error);
      console.log(`${error.code}: ${error.message}`);
    }
  };
  // const logout = useCallback(async () => {
  //   try {
  //     await signOut(auth);
  //     setUser(null);
  //     setIsAuthenticated(false);
  //     console.log('User signed out');
  //   } catch (error) {
  //     console.log('Error signing out');
  //     console.log(error);
  //     console.log(`${error.code}: ${error.message}`);
  //   }
  // }, []);

  const value = useMemo(
    () => ({ user, isAuthenticated, signIn, signUp, logout }),
    [user, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
