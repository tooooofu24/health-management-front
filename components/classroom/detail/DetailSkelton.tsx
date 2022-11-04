import { Skeleton, Tabs, Tab, TabList } from "@chakra-ui/react";
import { Loading } from "../../common/loading/Loading";
import { Tile, TilesWrapper } from "../../common/Tile";

export const DetailSkelton = () => {
  return (
    <TilesWrapper>
      <Tile>
        <Loading h="70px" />
      </Tile>
      <Tile>
        <Tabs>
          <TabList>
            <SkeltonTab />
            <SkeltonTab />
          </TabList>
        </Tabs>
        <Loading h="70px" />
      </Tile>
    </TilesWrapper>
  );
};

const SkeltonTab = () => {
  return (
    <Tab h={10}>
      <Skeleton h={6} w="40px" />
    </Tab>
  );
};
