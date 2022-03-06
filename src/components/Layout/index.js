import styled from 'styled-components';

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FlexRow = styled.div`
    display: flex;
    gap: ${({ gap }) => gap || "10px"};
    align-items: center;
`

export const FlexCol = styled.div`
    display: flex;
    flex-direction:column;
    align-items: ${(({ align }) => align || 'stretch')};
    gap: ${({ gap }) => gap || "0px"};
`
export const MainGrid = styled.div`
    display: grid;
    grid-template-columns: 2.2fr 6fr 3fr;
    grid-column-gap: 20px;
    padding: 0 20px;
`