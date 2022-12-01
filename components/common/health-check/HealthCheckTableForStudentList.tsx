import { HealthCheck, Student } from "@prisma/client";
import { FC } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tag,
  Flex,
  Box,
} from "@chakra-ui/react";
import ja from "date-fns/locale/ja";
import { format } from "date-fns";
import { CheckButton } from "../../admin/healthCheck/CheckButton";
import { KeyedMutator } from "swr";
import { CommonError } from "../error/CommonError";
import { convertBoolean, convertNumber } from "./HealthCheckTable";
import { StudentResponse } from "../../../types/APIResponse";

type props = {
  students: StudentResponse[];
  refetch: KeyedMutator<any>;
};
export const HealthCheckTableForStudentList: FC<props> = ({
  students,
  refetch,
}) => {
  if (!students.length) {
    return <CommonError message="データがありません" />;
  }
  return (
    <Box position="relative">
      <TableContainer pr="4rem">
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>氏名</Th>
              <Th>起床時間</Th>
              <Th>就寝時間</Th>
              <Th>体温(夜)</Th>
              <Th>体温(朝)</Th>
              <Th>咳</Th>
              <Th>息苦しさ</Th>
              <Th>だるさ</Th>
              <Th>食欲不振</Th>
              <Th>通院</Th>
              <Th>コメント</Th>
            </Tr>
          </Thead>
          <Tbody>
            {students.map((student) => {
              const healthCheck = student.healthChecks?.[0];
              if (!healthCheck) {
                return (
                  <Tr key={student.id}>
                    <Td>{student.name}</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                  </Tr>
                );
              }
              return (
                <Tr key={student.id}>
                  <Td>{student.name}</Td>
                  <Td>
                    {format(new Date(healthCheck.wakeUpTime), "HH:mm", {
                      locale: ja,
                    })}
                  </Td>
                  <Td>
                    {format(new Date(healthCheck.bedTime), "HH:mm", {
                      locale: ja,
                    })}
                  </Td>
                  <Td>{convertNumber(healthCheck.nightTemp)}</Td>
                  <Td>{convertNumber(healthCheck.morningTemp)}</Td>
                  <Td>{convertBoolean(healthCheck.cough)}</Td>
                  <Td>{convertBoolean(healthCheck.stuffiness)}</Td>
                  <Td>{convertBoolean(healthCheck.languor)}</Td>
                  <Td>{convertBoolean(healthCheck.lessAppetite)}</Td>
                  <Td>{convertBoolean(healthCheck.goHospital)}</Td>
                  <Td>{healthCheck.comment}</Td>
                  <Td>{healthCheck.date}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <TableContainer position="absolute" top="0" right="0" w="4rem">
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th color="transparent">承認</Th>
            </Tr>
          </Thead>
          <Tbody>
            {students.map((student) => {
              const healthCheck = student.healthChecks?.[0];
              if (!healthCheck) return null;
              return (
                <Tr key={healthCheck.id}>
                  <Td>
                    <Flex alignItems="center" justifyContent="end">
                      <CheckButton
                        refetch={refetch}
                        healthCheck={healthCheck}
                      />
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
