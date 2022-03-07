import styled from 'styled-components';
import { PrimaryBadge } from '../Button';
import { FlexCol, FlexRow } from '../Layout';

export const BuildStyledListItem = (Component, { icon, name, weight }) => {
    return (
        <Component style={weight === "bold" ? { '--font-weight': "bold" } : {}} >
            <FlexRow as="a" style={{ alignItems: "start" }}>
                {icon}
                {name}
            </FlexRow>
        </Component>
    );
}

export const PrimaryLinkListItem = (props) => BuildStyledListItem(PrimaryListLinkStyle, props)

export const TabLinkListItem = (props) => BuildStyledListItem(TabItemStyle, props)

export const SecondaryLinkListItem = (props) => BuildStyledListItem(SecondaryListLinkStyle, props)
export const AsideListItem = ({ title, category, comments, badge }) => {
    return (
        <ListItemStyle>
            <FlexCol style={{ alignItems: "start" }} gap="2px">
                <h4>{title}</h4>
                <div>
                    <p>{category}</p>
                    {badge && <PrimaryBadge>{badge}</PrimaryBadge>}
                    {comments && <p> {comments} comment</p>}
                </div>

            </FlexCol>
        </ListItemStyle>);
}

export const ListItemStyle = styled.div`
    padding: 1.3rem 1rem;
    border-bottom: 1px solid #f3f3f3;
    & p{
        color: var(--default-font-color-light);
        font-size: var(--font-szie-sm);
    }
    &:hover{
        background-color: var(--primary-bg-color);
        cursor: pointer;
        & h4 {
            color: var(--accent-color);
        }
    }
    &:last-child{
        border-bottom-left-radius: var(--default-border-radius);
        border-bottom-right-radius: var(--default-border-radius);
    }

`

export const PrimaryListLinkStyle = styled.li`
    border-radius: var(--default-border-radius);
    padding: 0.63rem 1rem;
    list-style: none;
    font-weight: var(--font-weight, normal);
    &:hover{
        background-color: var(--accent-color-light);
        color: var(--accent-color);
        text-decoration: underline;
        cursor: pointer;
    }
`

export const TabItemStyle = styled(PrimaryListLinkStyle)`
    &:hover{
        background-color: var(--primary-color);
        color: var(--accent-color);
    }
`
export const SecondaryListLinkStyle = styled(PrimaryListLinkStyle)`
    border-radius: 0;
    &:hover{
        background-color: var(--primary-color);
        color: var(--accent-color);
    }
`

