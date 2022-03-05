import styled from 'styled-components';
import Aside from '../Aside';
import { ListItem } from '../List';

export const AsideList = ({ header, items, footer }) => {
    return (
        <Aside {...header}>
            {items?.map((item, i) => <ListItem key={i} {...item}></ListItem>)}
        </Aside>
    );
}

