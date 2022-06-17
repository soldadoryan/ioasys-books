import { useNavigate } from 'react-router-dom'
import { useCallback, useContext } from 'react'
import { AxiosError } from 'axios'
import api from '../services/api'
import { FormLoginData } from '../pages/Login'
import AuthContext from '../contexts/AuthContext'
import useLocalStorage from './useLocalStorage'

const useAuth = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(AuthContext)
  const { clearSession, getSession, setSession } = useLocalStorage()

  const isAuthenticated = useCallback(() => {
    const currentUser = getSession('@collection:user')
    return currentUser !== null
  }, [getSession])

  const handleLogin = async (
    data: FormLoginData,
    setMessage: React.Dispatch<React.SetStateAction<string>>
  ) => {
    try {
      const response = await api.post('/auth/sign-in', data)
      const authenticatedUser = { ...response.data, token: response.headers.authorization }
      setUser(authenticatedUser)
      setSession(authenticatedUser, '@collection:user')
      navigate('/books')
    } catch (error) {
      if ((error as AxiosError).response?.status === 401) {
        setMessage('Email e/ou senha incorretos.')
      }
    }
  }

  const logout = () => {
    clearSession()
    navigate('/')
  }

  return {
    handleLogin,
    isAuthenticated,
    logout,
  }
}

export default useAuth
