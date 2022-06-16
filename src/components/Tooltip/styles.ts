import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        position: relative;
        width: fit-content;
        padding: 16px;
        color: ${theme.colors.texts.secondary};
        font-weight: ${theme.typography.weights.bold};
        display: flex;
        font-size: ${theme.typography.sizes.lg};
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.background.opacityLight};
        border-radius: 4px;
        
        &::before {
            content: '';
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 8px 8px 8px;
            border-color: transparent transparent ${theme.colors.background.opacityLight} transparent;
            position: absolute;
            top: -8px;
            left: 16px;
        }
    `}
`;
