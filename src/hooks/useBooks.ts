import { AxiosError } from 'axios'
import { useCallback, useContext } from 'react'
import AuthContext from '../contexts/AuthContext'
import api from '../services/api'

const useBooks = () => {
  const { user } = useContext(AuthContext)

  const getBooks = useCallback(async (page: number, amount = 12) => {
    if (user.token) {
      try {
        const { data } = await api.get(`/books?page=${page}&amount=${amount}`, {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })

        return data
      } catch (error) {
        console.error('API Error:', (error as AxiosError))
      }
    }
  }, [user])

  return {
    getBooks
  }
}

export default useBooks
