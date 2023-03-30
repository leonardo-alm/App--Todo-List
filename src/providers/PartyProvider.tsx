import { createContext, ReactNode } from "react";
import { IPartyContext } from "../interfaces/IPartyContext";
import useToggle from "../hooks/useToggle";

export const PartyContext = createContext<IPartyContext>({
  animationsEnabled: true,
  toggleAnimationsEnabled: () => { }
});

const PartyProvider = ({ children }: { children: ReactNode }) => {
  const [animationsEnabled, toggleAnimationsEnabled] = useToggle(true);

  return (
    <PartyContext.Provider
      value={{
        animationsEnabled: animationsEnabled,
        toggleAnimationsEnabled: toggleAnimationsEnabled,
      }}
    >
      {children}
    </PartyContext.Provider>
  );
};

export default PartyProvider;
