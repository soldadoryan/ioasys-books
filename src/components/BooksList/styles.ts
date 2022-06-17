import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;

    @media screen and (max-width: 940px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 478px) {
        grid-template-columns: 1fr;
    }
`

export const WrapPagination = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;

    @media screen and (max-width: 425px) {
      justify-content: center;
    }
`
