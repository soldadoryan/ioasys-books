import styled, { createGlobalStyle, css, keyframes } from 'styled-components'
import { RiRefreshLine } from 'react-icons/ri'

export default createGlobalStyle`
    ${({ theme }) => css`
        * {
            margin: 0;
            padding: 0;
            outline: 0;
            box-sizing: border-box;

            &::-webkit-scrollbar {
              width: 4px;
            }

            &::-webkit-scrollbar-track {
              background: transparent;
            }

            &::-webkit-scrollbar-thumb {
              background: ${theme.colors.primary}; 
              border: 0;
              border-radius: 30px;
            }

            &::-webkit-scrollbar-thumb:hover {
              background: ${theme.colors.background.secondary}; 
            }
        }

        body { background-color: ${theme.colors.background.primary} }

        body, input, select, textarea, button {
            font-family: ${theme.typography.primary};
        }

        button { cursor: pointer; }
    `}
`

export const Container = styled.div`
    width: 1128px;
    height: auto;
    display: flex;
`

const Rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

export const Loading = styled(RiRefreshLine)`
    animation: ${Rotate} 2s infinite;
`
