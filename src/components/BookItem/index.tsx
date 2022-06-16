import React from 'react'
import { BookType } from '../../dtos/BooksDTO'
import * as S from './styles'

type BookItemType = {
  book: BookType;
}

function BookItem({ book }: BookItemType) {
  const getAuthors = () => book.authors.map((author) => <S.BookAuthor key={author}>{author}</S.BookAuthor>)

  return (
    <S.Container>
      <S.ImageBook src={book.imageUrl} />
      <S.BookInfo>
        <S.BookHeaderInfo>
          <S.BookTitle>{book.title}</S.BookTitle>
          <S.BookAuthor>{getAuthors()}</S.BookAuthor>
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

export default BookItem
