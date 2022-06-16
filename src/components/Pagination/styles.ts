import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    min-width: 100px;
`;

export const PaginationDescription = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.texts.primary};
        font-size: ${theme.typography.sizes.sm};
        margin-right: 8px;
    `}
`;
