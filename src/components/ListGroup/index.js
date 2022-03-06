import { PrimaryLinkListItem } from '../List';
export const ListGroup = ({ title, links = [] }) => {
    return (
        <div>
            {title && <h3>{title}</h3>}
            {
                links.map((link, i) => <PrimaryLinkListItem key={i} {...link}></PrimaryLinkListItem>
                )
            }

        </div>

    );
}

export default ListGroup