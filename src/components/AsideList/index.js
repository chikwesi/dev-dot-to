import styled from 'styled-components';
import Aside from '../Aside';
import { AsideListItem } from '../List';

export const AsideList = ({ header, items, footer }) => {
    return (
        <Aside {...header}>
            {items?.map((item, i) => <AsideListItem key={i} {...item}></AsideListItem>)}
        </Aside>
    );
}

