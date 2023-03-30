import { createContext, ReactNode, useState } from "react";
import { IProfileContext } from "../interfaces/IProfileContext";

const DEFAULT_USER = {
  name: "Froggy",
  icon: "🐸",
};

export const ProfileContext = createContext<IProfileContext>({
  currentUser: DEFAULT_USER,
  setCurrentUser: () => { },
});

const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState(DEFAULT_USER);

  return (
    <ProfileContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
