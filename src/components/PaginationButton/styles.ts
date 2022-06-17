import styled, { css } from 'styled-components'

type ContainerProps = {
  gridArea: string;
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, gridArea }) => css`
        background-color: transparent;
        grid-area: ${gridArea};
        width: 32px;
        height: 32px;
        border: 1px solid ${theme.colors.borders.opacityDark};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${theme.colors.texts.primary};

        &:disabled {
            color: ${theme.colors.texts.mutedPrimary};
            cursor: no-drop;
        }
    `}
`
