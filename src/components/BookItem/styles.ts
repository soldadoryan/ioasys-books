import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.background.secondary};
        width: 100%;
        height: 170px;
        padding: 16px;
        display: flex;
        align-items: center;
        border-radius: ${theme.shapes.radius.sm};
        cursor: pointer;

        @media screen and (max-width: 1330px) {
            height: auto;
        }
    `}
`;

export const ImageBook = styled.img`
    width: 80px;
    margin-right: 16px;
`;

export const BookInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

export const BookHeaderInfo = styled.div``;

export const BookTitle = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.texts.primary};
        font-size: ${theme.typography.sizes.md};
        font-weight: ${theme.typography.weights.medium};
    `}
`;

export const BookAuthor = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.primary};
        font-size: ${theme.typography.sizes.sm};
        font-weight: ${theme.typography.weights.regular};
    `}
`;
export const BookDescription = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.texts.mutedPrimary};
        font-size: ${theme.typography.sizes.sm};
        font-weight: ${theme.typography.weights.regular};
    `}
`;