import {
  Table,
  TableColumnHeaderProps,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { Schedule } from "../../types/Schedule";
import { EditScheduleItem } from "./edit/EditScheduleItem";
import { ScheduleItem } from "./ScheduleItem";
import { days } from "../../types/Day";
import { periods } from "../../types/Period";

type props = {
  schedules: Schedule[];
  type: "index" | "edit";
};
export const SchedulesTable: FC<props> = ({ schedules, type }) => {
  return (
    <TableContainer>
      <Table variant="unstyled">
        <Thead>
          <Tr>
            <DayTh></DayTh>
            <DayTh>月</DayTh>
            <DayTh>火</DayTh>
            <DayTh>水</DayTh>
            <DayTh>木</DayTh>
            <DayTh>金</DayTh>
          </Tr>
        </Thead>
        <Tbody>
          {periods.map((period) => {
            return (
              <Tr key={period}>
                <PeriodTh>{period}</PeriodTh>
                {days.map((day) => {
                  const schedule = schedules.find(
                    (v) => v.dayJa === day && v.period === period
                  );
                  return (
                    <StyledTd day={day} period={period} key={day}>
                      {type == "index" ? (
                        <ScheduleItem schedule={schedule} />
                      ) : (
                        <EditScheduleItem
                          schedule={schedule}
                          period={period}
                          day={day}
                        />
                      )}
                    </StyledTd>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

type StyledTdProps = {
  day: string;
  period: number;
  children: ReactNode;
};
const StyledTd = ({ day, period, children }: StyledTdProps) => {
  let borderRight = "1px";
  let borderBottom = "1px";
  if (day === "金") borderRight = "0";
  if (period === 6) borderBottom = "0";
  return (
    <Td
      p={0}
      borderRight={borderRight}
      borderBottom={borderBottom}
      borderColor="gray.300"
    >
      {children}
    </Td>
  );
};

const DayTh: FC<TableColumnHeaderProps> = ({ children, ...props }) => {
  return (
    <Th p={0} {...props}>
      <Text fontSize={["2xs", "xs", "sm"]}>{children}</Text>
    </Th>
  );
};

const PeriodTh: FC<TableColumnHeaderProps> = ({ children, ...props }) => {
  return (
    <Th w={6} p={0} {...props}>
      <Text fontSize={["2xs", "xs", "sm"]}>{children}</Text>
    </Th>
  );
};
