import { createContext, useState } from "react";
import React, { ReactNode } from "react";

const AuthContext= createContext({})
export type Props = {
  children: ReactNode;

};
export const AuthProvider = (props: Props) => {
  const [auth, setAuth] = useState({});
  const { children} = props;
  
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};