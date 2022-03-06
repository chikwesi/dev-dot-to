import styled from 'styled-components';
import { FlexCol } from '../Layout';
import { PrimaryLinkListItem, SecondaryLinkListItem } from '../List';

export const BuildListGroup = (ListItem, { title, links = [] }, { padding } = {}) => {
    return (
        <ListGroupStyle style={{ "--list-group-padding": padding }}>
            <FlexCol gap="10px">
                {title && <h3>{title}</h3>}
                <ul>
                    {
                        links.map((link, i) => <ListItem key={i} {...link}></ListItem>
                        )
                    }
                </ul>
            </FlexCol>
        </ListGroupStyle>
    );
}

const ListGroupStyle = styled.aside`
    padding: var(--list-group-padding, 0);
`
export const PrimaryListGroup = (props) => BuildListGroup(PrimaryLinkListItem, props)

export const SecondaryListGroup = (props) => BuildListGroup(SecondaryLinkListItem, props, { padding: "10px" })
