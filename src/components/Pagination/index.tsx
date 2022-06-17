import React, { useCallback, useEffect, useState } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import Skeleton from 'react-loading-skeleton'
import * as S from './styles'
import PaginationButton from '../PaginationButton'

type PaginationProps = {
  page: number;
  total: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
}

function Pagination({
  page, total, setCurrentPage, loading
}: PaginationProps) {
  const [nextPageButton, setNextPageButton] = useState(false)
  const [prevPageButton, setPrevPageButton] = useState(false)

  const verifyPages = useCallback(() => {
    if (page === total) setNextPageButton(true)
    else setNextPageButton(false)

    if (page === 1) setPrevPageButton(true)
    else setPrevPageButton(false)
  }, [page, total])

  useEffect(() => {
    verifyPages()
  }, [page])

  return (
    <S.Container>
      {loading ? <Skeleton count={1} /> : (
        <>
          <S.PaginationDescription>
            Página
            {' '}
            <b>{page}</b>
            {' '}
            de
            {' '}
            <b>{total}</b>
          </S.PaginationDescription>
          <PaginationButton
            gridArea="arrowPrev"
            disabled={prevPageButton}
            icon={<RiArrowLeftSLine />}
            onClick={() => setCurrentPage((oldValue) => oldValue - 1)}
          />
          <PaginationButton
            gridArea="arrowNext"
            disabled={nextPageButton}
            icon={<RiArrowRightSLine />}
            onClick={() => setCurrentPage((oldValue) => oldValue + 1)}
          />
        </>
      )}
    </S.Container>
  )
}

export default Pagination
