import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const Image = styled.img`
    margin-right: 16px;
`

type TitleProps = {
  layout: 'dark' | 'light';
}

export const Title = styled.div<TitleProps>`
    ${({ theme, layout }) => css`
        ${layout === 'dark' ? css`
            color: ${theme.colors.texts.primary};
        ` : css`
            color: ${theme.colors.texts.secondary};
        `}

        font-weight: ${theme.typography.weights.light};
        font-size: ${theme.typography.sizes.xl};
    `}
`
