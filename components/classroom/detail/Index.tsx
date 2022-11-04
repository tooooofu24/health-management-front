import {
  Box,
  Flex,
  Skeleton,
  Tab,
  Table,
  TableContainer,
  TabList,
  Tabs,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Classroom } from "../../../types/Classroom";
import { formatDate } from "../../../utils/time";
import { Tile, TilesWrapper } from "../../common/Tile";
import { ScoreTable } from "./ScoresTable";

type props = {
  classroom: Classroom;
};
export const ClassroomDetail: FC<props> = ({ classroom }) => {
  const [courseId, setCourseId] = useState("");

  // useEffect(() => {
  //   if (!classroom) return;
  //   setCourseId(classroom?.subjects?.[0]?.id ?? "");
  // }, [classroom]);
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
                  <Td>{classroom?.teacher}</Td>
                  <Td>{classroom?.studentsCount}人</Td>
                  <Td>
                    <Flex gap="10px">
                      {classroom?.subjects?.map((subject) => (
                        <Tag key={subject.id}>{subject.name}</Tag>
                      ))}
                    </Flex>
                  </Td>
                  <Td>{formatDate(classroom?.lastLessonDate) || "なし"}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Tile>
      <Tile>
        <Tabs>
          <TabList>
            {classroom?.subjects?.map((subject) => (
              <Tab h={10} key={subject.id}>
                {subject.name}
              </Tab>
            ))}
          </TabList>
        </Tabs>
        <Box py={4}>
          <ScoreTable courseId={36} />
        </Box>
      </Tile>
    </TilesWrapper>
  );
};
