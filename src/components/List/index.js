import styled from 'styled-components';
import { PrimaryBadge } from '../Button';
import { FlexCol, FlexRow } from '../Layout';

export const ListItem = ({ title, category, comments, badge }) => {
    return (
        <ListItemStyle>
            <FlexCol style={{ alignItems: "start" }} gap="5px">
                <h4>{title}</h4>
                <div>
                    <p>{category}</p>
                    {badge && <PrimaryBadge>{badge}</PrimaryBadge>}
                    {comments && <p> {comments} comment</p>}
                </div>

            </FlexCol>
        </ListItemStyle>);
}


const ListItemStyle = styled.div`
    padding: 0.65rem 1rem;
    border-bottom: 1px solid #f3f3f3;
    & p{
        color: var(--default-font-color-light)
    }
    &:hover{
        background-color: var(--primary-bg-color);
        cursor: pointer;
        & h4 {
            color: var(--accent-color);
        }
    }
    & h4{
        font-size: var(--h4-size);
        font-weight: normal;
    }
    &:last-child{
        border-bottom-left-radius: var(--default-border-radius);
        border-bottom-right-radius: var(--default-border-radius);
    }

`
export const LinkListItem = ({ icon, name }) => {
    return (
        <ListLinkStyle>
            <FlexRow as="a" style={{ alignItems: "start" }}>
                {icon}
                {name}
            </FlexRow>
        </ListLinkStyle>);
}


const ListLinkStyle = styled.li`
    border-radius: var(--default-border-radius);
    padding: 10px;
    list-style: none;
    &:hover{
        background-color: var(--accent-color-light);
        color: var(--accent-color);
        text-decoration: underline;
        cursor: pointer;

    }
`