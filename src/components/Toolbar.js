import styled from 'styled-components'
import { FlexRow } from './Layout';


const Wrapper = styled.div`
    background-color: var(--primary-bg-color);
    padding: 5px 10px;
`

const Toolbar = ({ children }) => {
    return (
        <Wrapper>
            <FlexRow>
                {children}
            </FlexRow>
        </Wrapper>);
}

export default Toolbar;