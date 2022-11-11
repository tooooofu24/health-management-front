import {
  Box,
  Flex,
  Skeleton,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC } from "react";
import { Classroom } from "../../../types/Classroom";
import { formatDate } from "../../../utils/time";
import { CommonError } from "../../common/error/CommonError";
import { Tile, TilesWrapper } from "../../common/Tile";
import { ScoreTable } from "./ScoresTable";

type props = {
  classroom: Classroom;
};
export const ClassroomDetail: FC<props> = ({ classroom }) => {
  return (
    <TilesWrapper>
      <Tile>
        <Flex h="70px" alignItems="center">
          <TableContainer>
            <Table
              variant="unstyled"
              size="sm"
              width="auto"
              __css={{
                td: {
                  fontSize: "16px",
                  textAlign: "start",
                },
                th: {
                  textAlign: "start",
                },
              }}
            >
              <Thead>
                <Tr>
                  <Th>担任</Th>
                  <Th>人数</Th>
                  <Th>授業</Th>
                  <Th>最終授業日</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{classroom.teacher}</Td>
                  <Td>{classroom.studentsCount}人</Td>
                  <Td>
                    <Flex gap="10px">
                      {!classroom.courses?.length && <>なし</>}
                      {classroom.courses?.map((course) => (
                        <Tag key={course.subject.id}>{course.subject.name}</Tag>
                      ))}
                    </Flex>
                  </Td>
                  <Td>{formatDate(classroom.lastLessonDate) || "なし"}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Tile>
      <Tile>
        {!classroom.courses?.length ? (
          <CommonError message="担当している授業がありません" />
        ) : (
          <>
            <Tabs>
              <TabList>
                {classroom.courses?.map((course) => (
                  <Tab h={10} key={course.id}>
                    {course.subject.name}
                  </Tab>
                ))}
              </TabList>
              <TabPanels>
                {classroom.courses?.map((course) => (
                  <TabPanel key={course.id}>
                    <ScoreTable scores={course.scores!} />
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </>
        )}
      </Tile>
    </TilesWrapper>
  );
};
