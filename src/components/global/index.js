import styled from 'styled-components';

export const H2 = styled.h2`
    font-size: var(--h2-size);
    color: #000;
`

export const AvatarStyle = styled.img`
    border-radius: 50%;
    width: var(--image-width, 50px);
`

export const Avatar = ({ url, width, alt }) => {
    return (
        <AvatarStyle
            src={url} alt={alt || 'avatar'}
            style={{ "--image-wdth": width }}
        />
    )
}