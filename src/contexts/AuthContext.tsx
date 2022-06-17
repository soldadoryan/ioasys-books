import React, {
  createContext, useCallback, useEffect, useState
} from 'react'
import UserDTO from '../dtos/UserDTO'
import useLocalStorage from '../hooks/useLocalStorage'

type AuthContextType = {
  user: UserDTO;
  setUser: React.Dispatch<React.SetStateAction<UserDTO>>;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const { getSession } = useLocalStorage()
  const [user, setUser] = useState<UserDTO>({} as UserDTO)

  const loadUserDataFromSession = useCallback(() => {
    setUser(getSession('@collection:user'))
  }, [getSession])

  useEffect(() => {
    loadUserDataFromSession()
  }, [loadUserDataFromSession])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
