import React, { useCallback, useState } from 'react';
import { BookType } from '../../dtos/BooksDTO';
import * as S from './styles';
import { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';

const ModalBook = () => {
    const { book } = useContext(BookContext);

    if (book) return <></>

    return (
        <S.Container>

        </S.Container>
    );
}

export default ModalBook;