import { HealthCheck } from "@prisma/client";
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
} from "@chakra-ui/react";
import ja from "date-fns/locale/ja";
import { format } from "date-fns";

type props = {
  healthChecks: HealthCheck[];
};
export const HealthCheckTable: FC<props> = ({ healthChecks }) => {
  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>氏名</Th>
            <Th>起床時間</Th>
            <Th>就寝時間</Th>
            <Th>体温（夜）</Th>
            <Th>体温（朝）</Th>
            <Th>咳</Th>
            <Th>息苦しさ</Th>
            <Th>だるさ</Th>
            <Th>食欲不振</Th>
            <Th>通院</Th>
            <Th>コメント</Th>
            <Th>日付</Th>
          </Tr>
        </Thead>
        <Tbody>
          {healthChecks.map((healthCheck) => {
            return (
              <Tr key={healthCheck.id}>
                <Td>{healthCheck.studentId}</Td>
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
                <Td>
                  {format(new Date(healthCheck.date), "MM月dd日", {
                    locale: ja,
                  })}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const convertBoolean = (value: boolean) => {
  if (value) {
    return (
      <Tag size="sm" colorScheme="red">
        あり
      </Tag>
    );
  } else {
    return "なし";
  }
};

const convertNumber = (value: number) => {
  if (value >= 37.5) {
    return (
      <Tag size="sm" colorScheme="red">
        {value.toFixed(1)}
      </Tag>
    );
  } else {
    return <>{value.toFixed(1)}</>;
  }
};
