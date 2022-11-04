import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useScores } from "../../../hooks/Score";
import { Course } from "../../../types/Course";
import { Loading } from "../../common/loading/Loading";

type props = {
  courseId: number;
};
export const ScoreTable: FC<props> = ({ courseId }) => {
  const { scores, getScores, isLoading } = useScores();

  useEffect(() => {
    getScores(courseId);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>出席番号</Th>
            <Th>氏名</Th>
            <Th>出席率</Th>
            <Th>知識・技能</Th>
            <Th>思考力・判断力・表現力</Th>
            <Th>主体的に取り組む態度</Th>
            <Th>評定</Th>
          </Tr>
        </Thead>
        <Tbody>
          {scores.map((score) => {
            return (
              <Tr key={score.student.id}>
                <Td>{score.student.number}</Td>
                <Td>{score.student.name}</Td>
                <Td>{score.attendanceRate}</Td>
                <Td>{score.knowledgeAverage}</Td>
                <Td>{score.expressionAverage}</Td>
                <Td>{score.attitudeAverage}</Td>
                <Td>?</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
