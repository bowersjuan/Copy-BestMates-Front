import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export function useContextAuthProvider() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [userCity, setUserCity] = useState(null);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState(null);
  const [user, setUser] = useState(null);
  const [prefs, setPrefs] = useState(null);
  const [users, setUsers] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [zipcode, setZipcode] = useState("");
  console.log(user);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        prefs,
        setPrefs,
        users,
        setUsers,
        profilePhotoUrl,
        setProfilePhotoUrl,
        firstName,
        setFirstName,
        zipcode,
        setZipcode,
        userCity,
        setUserCity,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
