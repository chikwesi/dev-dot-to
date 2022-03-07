import Aside from '../Aside';
import { AsideListItem } from '../List';

export const AsideList = ({ header, items, footer }) => {
    const props = {...header, footer}
    return (
        <Aside {...props}>
            {items?.map((item, i) => <AsideListItem key={i} {...item}></AsideListItem>)}
        </Aside>
    );
}

