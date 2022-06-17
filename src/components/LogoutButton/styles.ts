import styled, { css } from 'styled-components'

export const Container = styled.button`
    ${({ theme }) => css`
        width: 32px;
        height: 32px;
        border: 1px solid ${theme.colors.borders.opacityDark};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${theme.typography.sizes.lg};
        color: ${theme.colors.texts.primary};
    `}
`
