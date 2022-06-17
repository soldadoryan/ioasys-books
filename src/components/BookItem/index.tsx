import React, { useContext } from 'react'
import { BookContext } from '../../contexts/BookContext'
import { BookType } from '../../dtos/BooksDTO'
import * as S from './styles'

type BookItemType = {
  book: BookType;
}

function BookItem({ book }: BookItemType) {
  const { setBook } = useContext(BookContext)

  const formatAuthors = () => book.authors.map((author) => (
    <S.BookAuthor
      key={author}
    >
      {author}
    </S.BookAuthor>
  ))

  return (
    <S.Container onClick={() => setBook(book)}>
      <S.ImageBook src={book.imageUrl} />
      <S.BookInfo>
        <S.BookHeaderInfo>
          <S.BookTitle>{book.title}</S.BookTitle>
          <S.BookAuthor>{formatAuthors()}</S.BookAuthor>
        </S.BookHeaderInfo>
        <S.BookDescription>
          {book.pageCount}
          {' '}
          páginas
          <br />
          Editora
          {' '}
          {book.publisher}
          {' '}
          <br />
          Publicado em
          {' '}
          {book.published}
        </S.BookDescription>
      </S.BookInfo>
    </S.Container>
  )
}

export default React.memo(BookItem)
