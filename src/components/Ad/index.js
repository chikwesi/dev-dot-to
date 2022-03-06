import styled from 'styled-components'
import { PrimaryButton, TransparentPrimaryButton } from '../Button'
import { Link } from '../Global'
import { FlexCol, FlexRow } from '../Layout'

export const MaindAd = () => {

    return (
        <MainAddStyle>
            <FlexCol align="center" gap="20px">
                <FlexRow gap="20px">
                    <img src='/logo.png' />
                    <div>
                        <h1>
                            <Link>DEV Community</Link> is a community of 824,861 amazing developers
                        </h1>
                        <p>
                            We're a place where coders share, stay up-to-date and grow their careers.
                        </p>
                    </div>
                </FlexRow>
                <FlexCol gap="5px">
                    <PrimaryButton size="lg">Create Account</PrimaryButton>
                    <TransparentPrimaryButton size="lg">Login</TransparentPrimaryButton>
                </FlexCol>
            </FlexCol>
        </MainAddStyle>
    )

}

const MainAddStyle = styled.div`
    padding: 40px 30px;
    h1{
        line-height: 1.25;
    }
    img{
        transform: rotate(-10deg);
    };
`