import styled from 'styled-components'
import Aside from '../Aside'
import { PrimaryButton, PrimaryOutlineButton, TransparentButton, TransparentPrimaryButton } from '../Button'
import { A, Link } from '../Global'
import { FlexCol, FlexRow } from '../Layout'

export const MainBanner = () => {

    return (
        <MainBannerStyle>
            <FlexCol align="center" gap="20px">
                <FlexRow gap="20px">
                    <img src='/logo.png' alt='logo' />
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
                    <PrimaryButton
                        link="https://dev.to/enter?state=new-user"
                        >
                        Create Account
                    </PrimaryButton>
                    <TransparentPrimaryButton
                        link="https://dev.to/enter"
                        >Login
                    </TransparentPrimaryButton>
                </FlexCol>
            </FlexCol>
        </MainBannerStyle>
    )

}
export const DevCommunityBanner = () => {

    return (
        <Aside padding="1rem">
            <FlexCol gap="10px">
                <h3>
                    <Link>DEV Community</Link> is a community of 824,861 amazing developers
                </h3>
                <p>
                    We're a place where coders share, stay up-to-date and grow their careers.
                </p>
                <FlexCol gap="5px">
                    <PrimaryOutlineButton
                        link="https://dev.to/enter?state=new-user"
                    >Create Account
                    </PrimaryOutlineButton>
                    <TransparentButton
                        link="https://dev.to/enter">Login
                    </TransparentButton>
                </FlexCol>
            </FlexCol>
        </Aside>
    )

}
export const ContributeBanner = () => {

    return (
        <Aside padding="1rem">

            <FlexCol gap="20px">
                <div>
                    <h4>
                        DEV runs on 100% open source code known as <A>Forem.</A>
                    </h4>
                    <h4>Contribute to the codebase or host your own!</h4>
                    <h4><strong>Check these out! 👇</strong>
                    </h4>
                </div>
                <ul>
                    <li>
                        <A>
                            <h4>Main Forem Repo</h4>
                        </A>
                    </li>
                    <li>
                        <A>
                            <h4>Self-Host Instructions</h4>
                        </A>
                    </li>
                </ul>
            </FlexCol>
        </Aside>
    )

}

export const StickerBanner = () => {

    return (
        <Aside padding="1rem">
            <FlexCol gap="20px">
                <StickerImage src='/stickers.jpeg' alt='stickers' />
                <A>
                    <h2>Get your Stickers!</h2>
                </A>
            </FlexCol>
        </Aside >
    )

}

const StickerImage = styled.img`
    border-radius: var(--default-border-radius);
`

const MainBannerStyle = styled.div`
    padding: 40px 30px;
    h1{
        line-height: 1.25;
    }
    img{
        transform: rotate(-10deg);
    };
`