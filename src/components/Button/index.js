import styled from 'styled-components';
import { InputGroupStyle } from '../Toolbar';


const buildButton = (Component, { children, link, size }) => {
    return (
        <Component href={link} style={
            { "--font-size": size === "lg" && "var(--button-lg-font-size)" }}>
            {children}
        </Component>
    )
}

const BaseButtonStyle = styled.a`
    background-color: var(--primary-button-bg-color);
    padding: 10px 20px;
    text-align: center;
    font-size:  var(--font-size, var(--button-font-size));
    text-decoration: none;
    color: var(--default-font-color);
    outline: none;
    border: green;
    border-radius: var(--default-border-radius);
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }

    ${InputGroupStyle} &{
        position: absolute;
        right: 0;
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
const PrimaryButtonStyle = styled(BaseButtonStyle)`
    background-color: var(--accent-color);
    color: var(--primary-color);
    padding: 10px 20px;
    &:hover{
        background-color: var(--accent-color-dark);
        text-decoration: none;
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
const TransparentPrimaryButtonStyle = styled(BaseButtonStyle)`
    background-color: var(--primary-button-bg-color);
    color: var(--accent-color);
    &:hover{
        background-color: var(--grey-color-light-hover);
        text-decoration: none;
        color: var(--accent-color-dark);
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
export const PrimaryOutlineButton = (props) => buildButton(DefaultButtonStyle, props)
export const PrimaryButton = (props) => buildButton(PrimaryButtonStyle, props)
export const SecondaryButton = (props) => buildButton(SecondaryButtonStyle, props)
export const PrimaryBadge = (props) => buildButton(BadgeStyle, props)
export const TransparentButton = (props) => buildButton(TransparentButtonStyle, props)
export const TransparentPrimaryButton = (props) => buildButton(TransparentPrimaryButtonStyle, props)

