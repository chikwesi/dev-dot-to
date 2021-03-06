import styled from 'styled-components';
import { A } from '../Global';
import { Flex } from '../Layout';

const Aside = ({ title, action, children, padding, footer }) => {
    return (
        <Container style={{ "--aside-padding": padding }}>
            <Header>
                <Flex gap="20px">
                    <h3>{title}</h3>
                    {action && <A type='Link'>{action}</A>}
                </Flex>
            </Header>
            {children}
            {
                footer &&
                <Footer>
                    {footer.action}
                </Footer>
            }
        </Container>)
        ;
}


export const Container = styled.aside`
    padding: var( --aside-padding , 1rem 0rem 0);
    border-radius: var(--default-border-radius);
    border: var(--border-color-grey) 1px solid;
    background-color: var(--secondary-card-color);
`

const Header = styled.div`
    padding: 0 1rem;
`

const Footer = styled.div`
    text-align: center;
    padding: 1rem;
    &:hover{
        color: var(--accent-color);
        cursor: pointer;
    }
`

export default Aside;



