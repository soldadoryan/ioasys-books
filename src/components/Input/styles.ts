import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.background.opacityDark};
        width: 100%;
        height: 60px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        padding: 0 10px;
    `}
`;

export const WrapInput = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;    
    gap: 4px;
`;

export const Label = styled.label`
    ${({ theme }) => css`
        color: ${theme.colors.texts.secondary};
        opacity: 0.5;
        font-size: ${theme.typography.sizes.sm};
        font-weight: ${theme.typography.weights.regular};
        cursor: pointer;
    `}
`;

export const Input = styled.input`
    ${({ theme }) => css`
        color: ${theme.colors.texts.secondary};
        font-weight: ${theme.typography.weights.regular};
        font-size: ${theme.typography.sizes.lg};
        width: 100%;
        background-color: transparent;
        border:0;
    `}
`;

export const WrapButton = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
