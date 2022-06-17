import React, { useCallback, useEffect, useState } from 'react'
import BooksDTO from '../../dtos/BooksDTO'
import useBooks from '../../hooks/useBooks'
import BookItem from '../BookItem'
import Pagination from '../Pagination'
import * as S from './styles'
import BooksListLoading from './BooksListLoading'

function BooksList() {
  const { getBooks } = useBooks()
  const [currentPage, setCurrentPage] = useState(1)
  const [books, setBooks] = useState<BooksDTO>({} as BooksDTO)
  const [loading, setLoading] = useState(false)

  const loadBooks = useCallback(async () => {
    setLoading(true)
    setBooks(await getBooks(currentPage))
    setLoading(false)
  }, [currentPage, getBooks])

  useEffect(() => {
    loadBooks()
  }, [loadBooks])

  if (loading) return <BooksListLoading countLines={6} countItems={12} />

  return (
    <>
      <S.Container>
        {books.data && books.data?.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </S.Container>
      <S.WrapPagination>
        <Pagination
          page={currentPage}
          total={Math.round(books.totalPages ?? 0)}
          setCurrentPage={setCurrentPage}
          loading={loading}
        />
      </S.WrapPagination>
    </>
  )
}

export default BooksList
