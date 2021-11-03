import React, { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

//definir la información
export interface AuthState {
  isLoggedIn: boolean;
  rol?: string;
  id?: string;
}

//estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  rol: undefined,
  id: undefined,
};

//lo que luce y expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: (rol: string, id: string) => void;
  checkLogin: (rol: string) => void;
  signOut: () => void;
}

//crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//componente proveedor
export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  //dispatch signIn
  const signIn = (rol: string, id: string) => {
    dispatch({ type: "signIn", payload: rol, id });
  };

  //dispatch signOut
  const signOut = () => {
    dispatch({ type: "signOut" });
  };

  //dispatch login
  const checkLogin = (rol: string) => {
    dispatch({ type: "checkLogin", payload: rol });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        signOut,
        checkLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
