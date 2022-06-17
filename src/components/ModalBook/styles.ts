import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;

    @media screen and (max-width: 824px) {
      justify-content: flex-end;
    }
  `}
`

export const ModalDrop = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background.opacityDark};
    width: 100vw;
    height: 100vh;
  `}
`
export const ModalCloseButton = styled.button`
  ${({ theme }) => css`
    width: 32px;
    height: 32px;
    border: 0;
    background-color: ${theme.colors.background.secondary};
    border-radius: ${theme.shapes.radius.rounded};
    display: flex;
    justify-content: center;
    align-items: center;
    top: 24px;
    right: 24px;
    position: absolute;
  `}
`

export const ModalContent = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.background.secondary};
    padding: 50px 4px 50px 50px;
    position: absolute;
    border-radius: ${theme.shapes.radius.sm};
    border: 0;
    width: 770px;
    height: 600px;
    display: flex;
    align-items: center;
    gap: 50px;

    @media screen and (max-width: 824px) {
      flex-direction: column;
      align-items: center;
      width: calc(100vw - 40px);
      height: calc(90vh - 20px);
      max-height: calc(90vh - 20px);
      margin-bottom: 20px;
      padding: 50px 20px;
      overflow-x: hidden;
      overflow-y: auto;
    }
  `}
`

export const BookImage = styled.img`
  width: 50%;
  height: 100%;

  @media screen and (max-width: 824px) {
    width: auto;  
    height: 300px;
  }
`

export const BookDetails = styled.div`
  width: 50%;
  max-height: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding-right: 40px;

  @media screen and (max-width: 824px) {
    width: 100%;
    height: fit-content;
    overflow: unset;
    padding-right: 10px;
  }
`

export const BookDetailsBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-bottom: 40px;

  &:last-child  {
    margin-bottom: 0;
  }
`

export const BookTitle = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.typography.weights.medium};
    font-size: ${theme.typography.sizes.xl};
    color: ${theme.colors.texts.primary};
    line-height: ${theme.typography.lineHeights.xl};
  `}
`

export const BookAuthors = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.typography.weights.regular};
    font-size: ${theme.typography.sizes.sm};
    color: ${theme.colors.primary};
  `}
`

export const BookDetailsTitle = styled.strong`
  ${({ theme }) => css`
    font-weight: ${theme.typography.weights.medium};
    font-size: ${theme.typography.sizes.sm};
    color: ${theme.colors.texts.primary};
    text-transform: uppercase;
    margin-bottom: 25px;
  `}
`

export const BookDetailsList = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
`

export const BookDetailsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
`

export const BookDetailsLabel = styled.strong`
  ${({ theme }) => css`
    font-weight: ${theme.typography.weights.medium};
    font-size: ${theme.typography.sizes.sm};
    color: ${theme.colors.texts.primary};
  `}
`

export const BookDetailsContent = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.typography.weights.regular};
    font-size: ${theme.typography.sizes.sm};
    color: ${theme.colors.texts.mutedPrimary};
  `}
`

export const BookDetailsDescription = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.typography.weights.regular};
    font-size: ${theme.typography.sizes.sm};
    color: ${theme.colors.texts.mutedPrimary};
  `}
`
