import styled from 'styled-components';
import { PrimaryButton } from '../Button';
import { H1 } from '../global';
import { Flex } from '../Layout';

const Aside = ({ title, action, children, padding }) => {
    return (
        <Container style={{ "--aside-padding": padding }}>
            <Header>
                <Flex gap="20px">
                    <H1>{title}</H1>
                    {action && <PrimaryButton type='Link'>{action}</PrimaryButton>}
                </Flex>
            </Header>
            {children}
        </Container>)
        ;
}


export const Container = styled.div`
    padding: var( --aside-padding , 1rem 0rem 0);
    border-radius: var(--default-border-radius);
    border: var(--border-color-grey) 1px solid;
    background-color: var(--secondary-card-color);
`
const Header = styled.div`
    padding: 0 1rem
`

export default Aside;



