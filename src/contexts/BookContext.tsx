import { createContext, useState } from 'react'
import { BookType } from '../dtos/BooksDTO'

type BookContextType = {
  book: BookType,
  setBook: (book: BookType) => void;
}

export const BookContext = createContext<BookContextType>({} as BookContextType)

type BookProviderProps = {
  children: React.ReactNode
}

function BookProvider({ children }: BookProviderProps) {
  const [book, setBook] = useState<BookType>({} as BookType)

  return (
    <BookContext.Provider value={{ book, setBook }}>
      {children}
    </BookContext.Provider>
  )
}

export default BookProvider
