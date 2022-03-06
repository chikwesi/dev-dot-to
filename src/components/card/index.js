import styled from 'styled-components';
import { MEDIA_QUERY_BREAKPOINTS } from '../../utils/constants';
import { SecondaryButton } from '../Button';
import { Avatar, H2 } from '../global';
import { Flex, FlexCol, FlexRow } from '../Layout';
import Tag from '../Tag';

const Card = ({
    author: { name, dateCreated, imgUrl } = {},
    blog: { title, tags, noOfReactions, noOfComments, estimatedReadTime, isFeatured,
        headerImage } = {} }) => {
    return (
        <CardWrapper>
            {isFeatured && <CardImage src={`/${headerImage}`} alt={title} />}
            <CardHeader gap="20px">
                <Avatar url={`/avatar/${imgUrl}`} width="5%" alt='blog author' />
                <div>
                    <p>{name}</p>
                    <p>{dateCreated}</p>
                </div>
            </CardHeader>
            <CardBody gap="20px">
                <span></span>
                <FlexCol>
                    <H2>{title}</H2>
                    <FlexRow gap="0">
                        {tags?.map((name, i) => <Tag key={i} name={name}></Tag>)}
                    </FlexRow>
                    <Flex>
                        <FlexRow gap="0">
                            <Reaction>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="abfm3re5fq1wppx1qj8xyy80516e16bs" ><title id="abfm3re5fq1wppx1qj8xyy80516e16bs">Reactions</title><path d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"></path></svg>
                                {noOfReactions} <span>reactions</span> </Reaction>
                            <Reaction>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ai7mfetidqzs4e8wtcorgozdot0vvvde"><title id="ai7mfetidqzs4e8wtcorgozdot0vvvde">Comments</title><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>

                                {noOfComments} <span>comments</span>
                            </Reaction>
                        </FlexRow>
                        <FlexRow>
                            <span>{estimatedReadTime} min read</span>
                            <SecondaryButton>Save</SecondaryButton>
                        </FlexRow>
                    </Flex>
                </FlexCol>
            </CardBody>
        </CardWrapper>);
}

const Reaction = ({ children }) => {
    return (
        <ReactionStyle>
            {children}
        </ReactionStyle>
    );
}

const ReactionStyle = styled.div`
    display: flex;
    align-items: center;
    gap: .2rem;
    padding: 5px 10px;
    &:hover{
        background-color: var(--grey-color-light-hover);
        border-radius: var(--default-border-radius);
        cursor: pointer;
    }
    @media(max-width: ${MEDIA_QUERY_BREAKPOINTS.mobile}){
        span{
            display: none;
        }
    }
`

const CardWrapper = styled.div`
    border-radius: var(--default-border-radius);
    border: var(--border-color-grey) 1px solid;
    background-color: #fff;
`

const CardGrid = styled.div`
    padding: 0rem 1.3rem;
    display: grid;
    grid-template-columns: .05fr 1fr;
    font-size: var(--font-szie-sm);
    grid-gap: ${({ gap }) => gap || "10px"};
`

const CardImage = styled.img`
    border-top-left-radius: var(--default-border-radius);
    border-top-right-radius: var(--default-border-radius);
`

const CardHeader = styled(CardGrid)`
    padding-top: 1.3rem;
    `

const CardBody = styled(CardGrid)`
    padding-bottom: 1.3rem;
    @media(max-width: ${MEDIA_QUERY_BREAKPOINTS.mobile}){
        grid-template-columns: 1fr;
    }
`
export default Card;