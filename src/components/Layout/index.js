import styled from 'styled-components';
import { MEDIA_QUERY_BREAKPOINTS } from '../../utils/constants';

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FlexRow = styled.div`
    display: flex;
    padding: 0px;
    gap: ${({ gap }) => gap || "10px"};
    align-items: center;
`

export const FlexCol = styled.div`
    display: flex;
    padding: 0px;
    flex-direction:column;
    align-items: ${(({ align }) => align || 'stretch')};
    gap: ${({ gap }) => gap || "0px"};
`
export const MainGrid = styled.div`
    display: grid;
    grid-template-columns: 2.2fr 6fr 3fr;
    grid-column-gap: 20px;
    padding: 0 20px;

    @media(max-width: ${MEDIA_QUERY_BREAKPOINTS.tablet}){
        grid-template-columns: 2fr 6fr;
    }
    
    @media(max-width: ${MEDIA_QUERY_BREAKPOINTS.mobile}){
        & > div:first-child{
            display: none;
        }
        padding: 0;
        grid-template-columns: 1fr;
    }

`