
import { PrimaryButton, TransparentButton } from './components/Button';
import Card from './components/card';
import Toolbar from './components/Toolbar';
import GlobalStyle from "./presets"
import { MainGrid, FlexCol, FlexRow } from './components/Layout'
import { AsideList } from './components/AsideList';
import { LISTING_DATA, HElP_DATA, DISCUSS_DATA, CHALLENGE_DATA, BLOG_DATA, LINKS, POLICY_LINKS, POPULAR_TAGS } from './mock';
import Aside from './components/Aside';
import { PrimaryLinkListItem, SecondaryLinkListItem } from './components/List';
import ListGroup from './components/ListGroup';

function App() {
  const Tabs = [
    { name: "Relevant", weight: "bold" },
    { name: "Lastest" },
    { name: "Top" },
  ]
  return (
    <div>
      <GlobalStyle />
      <FlexCol gap="20px">
        <Toolbar />
        <MainGrid >
          <FlexCol gap="10px">
            <Aside padding="1rem">
              <FlexCol gap="10px">
                <h4>
                  Join Us
                </h4>
                <p>
                  We're a place where coders share, stay up-to-date and grow their careers.
                </p>
                <FlexCol gap="5px">
                  <PrimaryButton>Create Account</PrimaryButton>
                  <TransparentButton>Login</TransparentButton>
                </FlexCol>
              </FlexCol>
            </Aside>
            <ListGroup links={LINKS}></ListGroup>
            <ListGroup links={POLICY_LINKS} title="Other"></ListGroup>
            <ListGroup links={POPULAR_TAGS} title="Popular Tags"></ListGroup>
          </FlexCol>

          <FlexCol gap="7px">
            <FlexRow as="ul" gap="0">
              {Tabs.map((item) => <SecondaryLinkListItem {...item}></SecondaryLinkListItem>)}
            </FlexRow>
            {BLOG_DATA.map((item, index) => <Card key={index} {...item}></Card>)}
          </FlexCol>

          <FlexCol gap="20px">
            <AsideList {...LISTING_DATA}></AsideList>
            <AsideList {...HElP_DATA}></AsideList>
            <AsideList {...DISCUSS_DATA}></AsideList>
            <AsideList {...CHALLENGE_DATA}></AsideList>
          </FlexCol>
        </MainGrid>
      </FlexCol>
    </div>
  );
}

export default App;
