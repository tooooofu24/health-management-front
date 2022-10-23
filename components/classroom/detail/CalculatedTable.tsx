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
import { useCalculatedAttendances } from "../../../hooks/CalculatedAttendance";
import { Loading } from "../../common/loading/Loading";

type props = {
  classroomId?: number | string;
  subjectId?: number | string;
};
export const CalculateTable: FC<props> = ({ classroomId, subjectId }) => {
  const { calculatedAttendances, getCalculatedAttendances, isLoading } =
    useCalculatedAttendances();
  useEffect(() => {
    if (!subjectId || !classroomId) return;
    getCalculatedAttendances(classroomId, subjectId);
  }, [subjectId, classroomId]);

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
          {calculatedAttendances.map((calculatedAttendance) => (
            <Tr key={calculatedAttendance.student.id}>
              <Td>{calculatedAttendance.student.number}</Td>
              <Td>{calculatedAttendance.student.name}</Td>
              <Td>{calculatedAttendance.attendanceRate}</Td>
              <Td>{calculatedAttendance.knowledgeAverage}</Td>
              <Td>{calculatedAttendance.expressionAverage}</Td>
              <Td>{calculatedAttendance.attitudeAverage}</Td>
              <Td>?</Td>
            </Tr>
          ))}
          <Tr></Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
