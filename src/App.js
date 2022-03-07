import Card from './components/Card';
import Toolbar from './components/Toolbar';
import GlobalStyle from "./presets";
import { MainGrid, FlexCol, FlexRow } from './components/Layout';
import { AsideList } from './components/AsideList';
import { LISTING_DATA, HElP_DATA, DISCUSS_DATA, CHALLENGE_DATA, LINKS, POLICY_LINKS, POPULAR_TAGS, TRENDING_LINKS, SOCIAL_LINKS, RECENTLY_QUERIED } from './data/mock';
import { TabLinkListItem } from './components/List';
import { PrimaryListGroup, SecondaryListGroup } from './components/ListGroup';
import { BLOG_DATA, BLOG_DATA_2 } from './data/articles';
import { ContributeBanner, DevCommunityBanner, MainBanner, StickerBanner } from './components/Banner';
import { A } from './components/Global';

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
          <FlexCol gap="20px">
            <DevCommunityBanner></DevCommunityBanner>
            <PrimaryListGroup links={LINKS}></PrimaryListGroup>
            <PrimaryListGroup links={POLICY_LINKS} title="Other"></PrimaryListGroup>
            <FlexRow gap="20px">
              {SOCIAL_LINKS.map(({ icon }, i) => <A key={i}>{icon}</A>)}
            </FlexRow>
            <PrimaryListGroup links={POPULAR_TAGS} title="Popular Tags"></PrimaryListGroup>
            <StickerBanner></StickerBanner>
            <ContributeBanner></ContributeBanner>
          </FlexCol>

          <FlexCol gap="7px">
            <FlexRow as="ul" gap="0">
              {Tabs.map((item, index) => <TabLinkListItem key={index} {...item}></TabLinkListItem>)}
            </FlexRow>
            {BLOG_DATA.map((item, index) => <Card key={index} {...item}></Card>)}
            <MainBanner></MainBanner>
            {BLOG_DATA_2.map((item, index) => <Card key={index} {...item}></Card>)}
          </FlexCol>

          <FlexCol gap="20px">
            <AsideList {...LISTING_DATA}></AsideList>
            <AsideList {...HElP_DATA}></AsideList>
            <AsideList {...DISCUSS_DATA}></AsideList>
            <AsideList {...CHALLENGE_DATA}></AsideList>
            <SecondaryListGroup links={TRENDING_LINKS} title="trending guides/resources"></SecondaryListGroup>
            <SecondaryListGroup links={RECENTLY_QUERIED} title="recently queried"></SecondaryListGroup>
          </FlexCol>
        </MainGrid>
      </FlexCol>
    </div>
  );
}

export default App;
