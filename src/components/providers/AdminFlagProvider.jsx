import { createContext } from "react";

export const AdmimFlagContext = createContext({});

export const AdminFlagProvider = props => {
  const { children } = props;

  const sampleObj = { sampleValue: "test" };

  return (
    <AdmimFlagContext.Provider value={sampleObj}>
      {children}
    </AdmimFlagContext.Provider>
  );
};
