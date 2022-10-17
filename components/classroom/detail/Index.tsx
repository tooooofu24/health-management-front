import {
  Button,
  Flex,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ClockCounterClockwise } from "phosphor-react";
import { Tile, TilesWrapper } from "../../common/Tile";

export const ClassroomDetail = () => {
  return (
    <TilesWrapper>
      <Tile>
        <TableContainer>
          <Table variant="unstyled" size="sm" width="auto">
            <Thead>
              <Tr>
                <Th textAlign="start" pe="50px">
                  担任
                </Th>
                <Th textAlign="start" pe="50px">
                  人数
                </Th>
                <Th textAlign="start" pe="50px">
                  授業回数
                </Th>
                <Th textAlign="start" pe="50px">
                  最終授業日
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td textAlign="start" fontSize="16px" pe="50px">
                  石田京香
                </Td>
                <Td textAlign="start" fontSize="16px" pe="50px">
                  33人
                </Td>
                <Td textAlign="start" fontSize="16px" pe="50px">
                  22回
                </Td>
                <Td textAlign="start" fontSize="16px" pe="50px">
                  2022/10/10
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Tile>
      <Tile>
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab>国語</Tab>
            <Tab>道徳</Tab>
            <Tab>音楽</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>出席番号</Th>
                      <Th>氏名</Th>
                      <Th>出席率</Th>
                      <Th>知識・技能</Th>
                      <Th>思考力・判断力・表現力</Th>
                      <Th>主体的に取り組む態度</Th>
                      <Th>総合評価</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {[...Array(5)].map((v, i) => {
                      return (
                        <Tr key={i}>
                          <Td>1</Td>
                          <Td>石田京楓</Td>
                          <Td>98.5%</Td>
                          <Td>A-</Td>
                          <Td>B</Td>
                          <Td>C+</Td>
                          <Td>3.7</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Tile>
    </TilesWrapper>
  );
};
