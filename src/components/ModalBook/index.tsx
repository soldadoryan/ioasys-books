import { useContext } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import * as S from './styles'
import { BookContext } from '../../contexts/BookContext'
import { BookType } from '../../dtos/BooksDTO'

function ModalBook() {
  const { book, setBook } = useContext(BookContext)

  const formatAuthors = () => book.authors.map(
    (author, index) => `${author}${(index !== book.authors.length - 1) && ', '}`
  )

  if (!book.id) return <></>

  return (
    <S.Container>
      <S.ModalDrop onClick={() => { setBook({} as BookType) }}>
        <S.ModalCloseButton><RiCloseLine /></S.ModalCloseButton>
      </S.ModalDrop>
      <S.ModalContent>
        <S.BookImage src={book.imageUrl} />
        <S.BookDetails>
          <S.BookDetailsBlock>
            <S.BookTitle>{book.title}</S.BookTitle>
            <S.BookAuthors>{formatAuthors()}</S.BookAuthors>
          </S.BookDetailsBlock>
          <S.BookDetailsBlock>
            <S.BookDetailsTitle>Informações</S.BookDetailsTitle>
            <S.BookDetailsList>
              <S.BookDetailsItem>
                <S.BookDetailsLabel>Páginas</S.BookDetailsLabel>
                <S.BookDetailsContent>
                  {book.pageCount}
                  {' '}
                  páginas
                </S.BookDetailsContent>
              </S.BookDetailsItem>
              <S.BookDetailsItem>
                <S.BookDetailsLabel>Editora</S.BookDetailsLabel>
                <S.BookDetailsContent>{book.publisher}</S.BookDetailsContent>
              </S.BookDetailsItem>
              <S.BookDetailsItem>
                <S.BookDetailsLabel>Publicação</S.BookDetailsLabel>
                <S.BookDetailsContent>{book.published}</S.BookDetailsContent>
              </S.BookDetailsItem>
              <S.BookDetailsItem>
                <S.BookDetailsLabel>Idioma</S.BookDetailsLabel>
                <S.BookDetailsContent>{book.language}</S.BookDetailsContent>
              </S.BookDetailsItem>
              <S.BookDetailsItem>
                <S.BookDetailsLabel>Título Original</S.BookDetailsLabel>
                <S.BookDetailsContent>{book.title}</S.BookDetailsContent>
              </S.BookDetailsItem>
              <S.BookDetailsItem>
                <S.BookDetailsLabel>ISBN-10</S.BookDetailsLabel>
                <S.BookDetailsContent>{book.isbn10}</S.BookDetailsContent>
              </S.BookDetailsItem>
              <S.BookDetailsItem>
                <S.BookDetailsLabel>ISBN-13</S.BookDetailsLabel>
                <S.BookDetailsContent>{book.isbn13}</S.BookDetailsContent>
              </S.BookDetailsItem>
            </S.BookDetailsList>
          </S.BookDetailsBlock>
          <S.BookDetailsBlock>
            <S.BookDetailsTitle>Resenha da editora</S.BookDetailsTitle>
            <S.BookDetailsDescription>{book.description}</S.BookDetailsDescription>
          </S.BookDetailsBlock>
        </S.BookDetails>
      </S.ModalContent>
    </S.Container>
  )
}

export default ModalBook
