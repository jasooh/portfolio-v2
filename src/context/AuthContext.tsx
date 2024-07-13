import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface AuthProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Auth = createContext({} as AuthProps);

function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Auth.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </Auth.Provider>
  );
}

function useAuthContext() {
  const AuthContext = useContext(Auth);
  return AuthContext;
}

export { AuthProvider, useAuthContext };
