import styled from 'styled-components';

const Tag = ({ name }) => {
    let color =  Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    return (
        <TagStlye style={{
            "--hash-color": `#${color}`,
            "--hover-bg": `#${color}0f`,
            "--hover-border": `#${color}29`
        }}
        >
            {name}
        </TagStlye>)
}

const TagStlye = styled.span`
    padding: 5px;
    border: 1px solid transparent;
    &::before{
       content: '#';
       color: var(--hash-color);
    }
    &:hover{
        background-color: var(--hover-bg);
        border: 1px solid var(--hover-border);
        border-radius: var(--default-border-radius);
        cursor: pointer;
    }
`
export default Tag;