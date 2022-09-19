import {
  Checkbox,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { AttendanceABCButtons } from "./AttendanceABCButtons";
import { AttendanceTableTd } from "./AttendanceTableTd";
import { AttendanceTableTh } from "./AttendanceTableTh";

export const AttendanceTable = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <AttendanceTableTh width="5%">出席番号</AttendanceTableTh>
            <AttendanceTableTh width="10%">氏名</AttendanceTableTh>
            <AttendanceTableTh width="5%">出席</AttendanceTableTh>
            <AttendanceTableTh width="20%">知識・技能</AttendanceTableTh>
            <AttendanceTableTh width="20%">
              思考力・判断力・表現力
            </AttendanceTableTh>
            <AttendanceTableTh width="20%">
              主体的に取り組む態度
            </AttendanceTableTh>
            <AttendanceTableTh width="20%">コメント等</AttendanceTableTh>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <AttendanceTableTd>1</AttendanceTableTd>
            <AttendanceTableTd>石田京楓</AttendanceTableTd>
            <AttendanceTableTd>
              <Checkbox colorScheme="teal" size="lg" defaultChecked></Checkbox>
            </AttendanceTableTd>
            <AttendanceTableTd>
              <AttendanceABCButtons />
            </AttendanceTableTd>
            <AttendanceTableTd>
              <AttendanceABCButtons />
            </AttendanceTableTd>
            <AttendanceTableTd>
              <AttendanceABCButtons />
            </AttendanceTableTd>
            <AttendanceTableTd>
              <Input
                placeholder="コメントを入力してください。"
                size="md"
                width="300px"
              />
            </AttendanceTableTd>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
