// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { createContext, useEffect, useState } from 'react';
//
// const AuthContext = createContext();
//
// const auth = getAuth();
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       setUser(user);
//     });
//   }, []);
//
//   return (
//     <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
//   );
// };
