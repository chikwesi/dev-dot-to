import styled from 'styled-components';


const buildButton = (Component, { children, type }) => {
    if (type === 'Link') {
        return (
            <A>
                {children}
            </A>
        )
    }

    return (
        <Component>
            {children}
        </Component>
    )
}

const BaseButtonStyle = styled.button`
    background-color: var(--primary-button-bg-color);
    padding: 10px 20px;
    text-align: center;
    outline: none;
    border: green;
    border-radius: var(--default-border-radius);
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`

const DefaultButtonStyle = styled(BaseButtonStyle)`
    border: var(--accent-color) 1px solid;
    color: var(--accent-color);
    &:hover{
        background-color: var(--accent-color);
        color: var(--primary-color);
    }
`

const SecondaryButtonStyle = styled(BaseButtonStyle)`
    background-color: var(--secondary-button-bg-color);
    padding: 10px 20px;
    &:hover{
        background-color: var(--secondary-button-bg-hover);
    }
`

const TransparentButtonStyle = styled(BaseButtonStyle)`
    background-color: var(--primary-button-bg-color);
    &:hover{
        background-color: var(--accent-color-light);
        color: var(--accent-color);
    }
`

const BadgeStyle = styled.a`
    padding: 0.3rem 0.5rem;
    width: auto;
    color: var(--badge-font-color);
    background-color: var(--badge-bg-color) ;
    border-radius: var(--default-border-radius);
    &:hover{
        cursor: pointer;
    }
`

export const A = styled.a`
    padding: 10px 20px;
    color: var(--accent-color);
    font-weight: bolder;
    text-align: center;
    &:hover{
        cursor: pointer;
    }
`
export const PrimaryButton = (props) => buildButton(DefaultButtonStyle, props)


export const SecondaryButton = (props) => buildButton(SecondaryButtonStyle, props)

export const PrimaryBadge = (props) => buildButton(BadgeStyle, props)

export const TransparentButton = (props) => buildButton(TransparentButtonStyle, props)


