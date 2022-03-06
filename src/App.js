
import { PrimaryButton, TransparentButton } from './components/Button';
import Card from './components/card';
import Toolbar from './components/Toolbar';
import GlobalStyle from "./presets"
import { MainGrid, FlexCol, FlexRow } from './components/Layout'
import { AsideList } from './components/AsideList';
import { LISTING_DATA, HElP_DATA, DISCUSS_DATA, CHALLENGE_DATA, BLOG_DATA, LINKS, POLICY_LINKS, POPULAR_TAGS, TRENDING_LINKS } from './mock';
import Aside from './components/Aside';
import { TabLinkListItem } from './components/List';
import { PrimaryListGroup, SecondaryListGroup } from './components/ListGroup';

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
                <h3>
                  DEV Community is a community of 824,861 amazing developers
                </h3>
                <p>
                  We're a place where coders share, stay up-to-date and grow their careers.
                </p>
                <FlexCol gap="5px">
                  <PrimaryButton>Create Account</PrimaryButton>
                  <TransparentButton>Login</TransparentButton>
                </FlexCol>
              </FlexCol>
            </Aside>
            <PrimaryListGroup links={LINKS}></PrimaryListGroup>
            <PrimaryListGroup links={POLICY_LINKS} title="Other"></PrimaryListGroup>
            <PrimaryListGroup links={POPULAR_TAGS} title="Popular Tags"></PrimaryListGroup>
          </FlexCol>

          <FlexCol gap="7px">
            <FlexRow as="ul" gap="0">
              {Tabs.map((item, index) => <TabLinkListItem key={index} {...item}></TabLinkListItem>)}
            </FlexRow>
            {BLOG_DATA.map((item, index) => <Card key={index} {...item}></Card>)}
          </FlexCol>

          <FlexCol gap="20px">
            <AsideList {...LISTING_DATA}></AsideList>
            <AsideList {...HElP_DATA}></AsideList>
            <AsideList {...DISCUSS_DATA}></AsideList>
            <AsideList {...CHALLENGE_DATA}></AsideList>
            <SecondaryListGroup links={TRENDING_LINKS} title="trending guides/resources"></SecondaryListGroup>
          </FlexCol>
        </MainGrid>
      </FlexCol>
    </div>
  );
}

export default App;
