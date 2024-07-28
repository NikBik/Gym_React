import { createContext, useState } from "react";

const defaultUser = {
  id: null,
  username: "Default",
  firstName: null,
  lastName: null,
  password: null,
  lastLogin: null,
};

// Create context with default values
const UserContext = createContext({
  user: defaultUser,
  setUser: () => {}, // Placeholder function
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
