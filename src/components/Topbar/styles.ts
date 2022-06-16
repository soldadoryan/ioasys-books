import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
`;

export const UserOptions = styled.div`
    display: flex;
    align-items: center;
`;

export const UserMessage = styled.span`
    ${({ theme }) => css`
        color: ${theme.colors.texts.primary};
        font-size: ${theme.typography.sizes.sm};
        margin-right: 16px;

        @media screen and (max-width: 478px) {
            display: none;
        }
    `}
`;
