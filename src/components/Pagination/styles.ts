import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-areas: 'description arrowPrev arrowNext';
    align-items: center;
    min-width: 100px;
    margin-bottom: 15px;
    grid-gap: 10px;
    
    @media screen and (max-width: 425px) {
      grid-template-areas: 'arrowPrev description arrowNext';
    }
`

export const PaginationDescription = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.texts.primary};
        font-size: ${theme.typography.sizes.sm};
    `}
`
