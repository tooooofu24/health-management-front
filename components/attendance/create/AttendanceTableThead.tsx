import { Thead, Tr } from "@chakra-ui/react";
import { AttendanceTableTh } from "./AttendanceTableTh";

export const AttendanceTableThead = () => {
  return (
    <Thead>
      <Tr>
        <AttendanceTableTh width="5%">出席番号</AttendanceTableTh>
        <AttendanceTableTh width="10%">氏名</AttendanceTableTh>
        <AttendanceTableTh width="5%">出席</AttendanceTableTh>
        <AttendanceTableTh width="20%">知識・技能</AttendanceTableTh>
        <AttendanceTableTh width="20%">
          思考力・判断力・表現力
        </AttendanceTableTh>
        <AttendanceTableTh width="20%">主体的に取り組む態度</AttendanceTableTh>
        <AttendanceTableTh width="20%">コメント等</AttendanceTableTh>
      </Tr>
    </Thead>
  );
};
