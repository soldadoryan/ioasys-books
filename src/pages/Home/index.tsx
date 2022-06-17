import React from 'react'
import BooksList from '../../components/BooksList'
import ModalBook from '../../components/ModalBook'
import Topbar from '../../components/Topbar'
import BookProvider from '../../contexts/BookContext'
import * as S from './styles'

function Home() {
  return (
    <BookProvider>
      <ModalBook />
      <S.Container>
        <S.Wrap>
          <Topbar />
          <BooksList />
        </S.Wrap>
      </S.Container>
    </BookProvider>
  )
}

export default Home
