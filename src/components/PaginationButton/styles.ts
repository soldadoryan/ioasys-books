import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
        background-color: transparent;
        width: 32px;
        height: 32px;
        border: 1px solid ${theme.colors.borders.opacityDark};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 8px; 
        color: ${theme.colors.texts.primary};

        &:disabled {
            color: ${theme.colors.texts.mutedPrimary};
            cursor: no-drop;
        }
    `}
`;
