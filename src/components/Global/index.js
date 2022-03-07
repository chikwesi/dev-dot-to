import styled from 'styled-components';

export const H2 = styled.h2`
    font-size: var(--h2-size);
    color: #000;
`

export const AvatarStyle = styled.img`
    border-radius: 50%;
    width: 100%;
`

export const Avatar = ({ url, alt }) => {
    return (
        <AvatarStyle
            src={url} alt={alt || 'avatar'}
        />
    )
}

export const Link = styled.a`
    color: var(--accent-color);
    &:hover{
        text-decoration: underline;
        color: var(--accent-color-dark);
        cursor: pointer;
    }`


export const A = styled.a`
    color: var(--accent-color);
    &:hover{
        text-decoration: none;
        cursor: pointer;
}
`