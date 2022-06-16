import styled, { css } from 'styled-components';
import { darken } from 'polished';
import * as GS from '../../styles/global';

type ButtonProps = {
    disabled: boolean
}

export const Container = styled.button`
    ${({ theme, disabled }) => css`
        background-color: ${theme.colors.background.secondary};
        color: ${theme.colors.primary};
        font-weight: ${theme.typography.weights.medium};
        font-size: ${theme.typography.sizes.lg};
        padding: 0 20px;
        height: 36px;
        border:0;
        border-radius: 18px;
        transition: all .2s;
        display: flex;
        justify-content: center;
        align-items: center;

        ${disabled && css`cursor: not-allowed;`}

        &:hover {
            background-color: ${darken(.1, theme.colors.background.secondary)};
        }
    `}
`;

export const Loading = styled(GS.Loading)`
    font-size: 25px;
`;