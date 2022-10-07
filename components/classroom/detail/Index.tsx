import {
  Button,
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
import { Tile } from "../../common/Tile";

export const ClassroomDetail = () => {
  return (
    <Tile>
      <Tabs>
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
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {[...Array(5)].map(() => {
                    return (
                      <Tr>
                        <Td>1</Td>
                        <Td>石田京楓</Td>
                        <Td>98.5%</Td>
                        <Td>A-</Td>
                        <Td>B</Td>
                        <Td>C+</Td>
                        <Td>3.7</Td>
                        <Td>
                          <Button
                            leftIcon={<ClockCounterClockwise size={20} />}
                          >
                            出欠履歴
                          </Button>
                        </Td>
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
  );
};
