import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

// Definir como luce o que informacion tendre aqui
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined,
};

// Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  logOut: () => void;
}

// Crear contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);
  const signIn = () => {
    dispatch({type: 'signIn'});
  };
  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };
  const logOut = () => {
    dispatch({type: 'logOut'})
  };
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logOut,
        changeFavoriteIcon,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
