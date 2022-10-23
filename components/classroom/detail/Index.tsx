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
import { Loading } from "../../common/loading/Loading";
import { Tile, TilesWrapper } from "../../common/Tile";
import { CalculateTable } from "./CalculatedTable";

type props = {
  classroom: Classroom | null;
};
export const ClassroomDetail: FC<props> = ({ classroom }) => {
  const [subjectId, setSubjectId] = useState("");

  useEffect(() => {
    if (!classroom) return;
    setSubjectId(classroom?.subjects?.[0]?.id ?? "");
  }, [classroom]);
  return (
    <TilesWrapper>
      {classroom ? (
        <Tile>
          <Flex h="70px" alignItems="center">
            <TableContainer>
              <Table variant="unstyled" size="sm" width="auto">
                <Thead>
                  <Tr>
                    <Th textAlign="start">担任</Th>
                    <Th textAlign="start">人数</Th>
                    <Th textAlign="start">授業</Th>
                    <Th textAlign="start">最終授業日</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td textAlign="start" fontSize="16px" pe="50px">
                      {classroom?.teacher}
                    </Td>
                    <Td textAlign="start" fontSize="16px" pe="50px">
                      {classroom?.studentsCount}人
                    </Td>
                    <Td textAlign="start" pe="50px">
                      <Flex gap="10px" justifyContent="center">
                        {classroom?.subjects?.map((subject) => (
                          <Tag key={subject.id}>{subject.name}</Tag>
                        ))}
                      </Flex>
                    </Td>
                    <Td textAlign="start" fontSize="16px" pe="50px">
                      {classroom?.lastLessonDate ?? "なし"}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        </Tile>
      ) : (
        <Tile>
          <Loading h="70px" />
        </Tile>
      )}
      <Tile>
        <Tabs>
          <TabList>
            {classroom ? (
              classroom?.subjects?.map((subject) => (
                <Tab
                  h={10}
                  key={subject.id}
                  onClick={() => setSubjectId(subject.id)}
                >
                  {subject.name}
                </Tab>
              ))
            ) : (
              <>
                <SkeltonTab />
                <SkeltonTab />
              </>
            )}
          </TabList>
        </Tabs>
        <Box py={4}>
          <CalculateTable subjectId={subjectId} classroomId={classroom?.id} />
        </Box>
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
