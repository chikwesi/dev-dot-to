import styled from 'styled-components'
import { PrimaryOutlineButton, TransparentButton } from '../Button';
import { Flex, FlexRow } from '../Layout';



const Toolbar = () => {
    return (
        <Wrapper>
            <Flex>
                <FlexRow>
                    <img height="50px" src='/logo.png' alt='logo' />
                    <InputGroupStyle>
                        <InputStyle placeholder='Search...' />
                        <TransparentButton>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path></svg>
                        </TransparentButton>
                    </InputGroupStyle>
                </FlexRow>
                <FlexRow>
                    <TransparentButton size="lg">Log in</TransparentButton>
                    <PrimaryOutlineButton size="lg">Create account</PrimaryOutlineButton>
                </FlexRow>
            </Flex>

        </Wrapper>);
}

const Wrapper = styled.div`
    background-color: var(--primary-bg-color);
    padding: 5px 20px;
    border-bottom: 1px solid var(--border-color-grey);
`

const InputStyle = styled.input`
    border-radius: 0.3rem;
    padding: 10px;
    width: 100%;
    outline: none;
    border: 1px solid var(--border-color-grey);

`

export const InputGroupStyle = styled(FlexRow)`
    position: relative;
    width: 400px
`
export default Toolbar;