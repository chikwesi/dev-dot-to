import styled from 'styled-components';


const buildButton = (Component) => {
    return function ({ children }) {
        return (
            <Component>
                {children}
            </Component>
        )
    }
}

const baseButtonStyle = styled.button`
    background-color: var(--primary-button-bg-color);
    padding: 10px 20px;
    outline: none;
    border: green;
    border-radius: 0.5rem;
    &:hover{
        cursor: pointer;
    }
`

const defaultButtonStyle = styled(baseButtonStyle)`
    border: var(--accent-color) 1px solid;
    color: var(--accent-color);
`

const secondaryButtonStyle = styled(baseButtonStyle)`
    background-color: var(--secondary-button-color);
    padding: 10px 20px;
`

export const PrimaryButton = buildButton(defaultButtonStyle)


export const SecondaryButton = buildButton(secondaryButtonStyle)

