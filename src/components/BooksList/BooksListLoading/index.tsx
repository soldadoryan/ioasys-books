import Skeleton from 'react-loading-skeleton'
import * as S from './styles'

type BooksListLoadingProps = {
  countLines: number;
  countItems: number;
};

function BooksListLoading({ countLines, countItems }: BooksListLoadingProps) {
  const renderLoading = () => {
    const items = []
    for (let i = 0; i < countItems; i++) {
      items.push(
        (
          <S.LoadItem key={`item${i}`}>
            <Skeleton count={countLines} />
          </S.LoadItem>
        )
      )
    }

    return items
  }

  return <S.Container>{renderLoading().map((item) => item)}</S.Container>
}

export default BooksListLoading
