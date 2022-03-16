import styled from 'styled-components';
import Aside from '../Aside';
import { AsideListItem } from '../List';

export const AsideList = ({ header, items, footer }) => {
    const props = { ...header, footer }
    return (
        <Aside {...props}>
            {items && <AsideListStyle>
                {items?.map((item, i) => <AsideListItem key={i} {...item}></AsideListItem>)}
            </AsideListStyle>}
        </Aside>
    );
}

const AsideListStyle = styled.ul`
    padding: 0;
`

