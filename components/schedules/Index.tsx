import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { useSchedules } from "../../hooks/Schedule";
import { DataFetchError } from "../common/error/DataFetchError";
import { Tile } from "../common/Tile";
import { ScheduleItem } from "./ScheduleItem";

export const Schedule = () => {
  const { schedules, getSchedules } = useSchedules();
  const [error, setError] = useState("");

  useEffect(() => {
    getSchedules().catch((e: any) => {
      setError(e.message || "不明なエラー");
    });
  }, []);

  return error ? (
    <Tile py="5%">
      <DataFetchError message={error} />
    </Tile>
  ) : (
    <Tile>
      <TableContainer>
        <Table variant="unstyled">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>月</Th>
              <Th>火</Th>
              <Th>水</Th>
              <Th>木</Th>
              <Th>金</Th>
            </Tr>
          </Thead>
          <Tbody>
            {[...Array(6)].map((v, i) => {
              const period = i + 1;
              return (
                <Tr key={period}>
                  <Th width="20px">{period}</Th>
                  {["月", "火", "水", "木", "金"].map((day) => {
                    const schedule = schedules.find(
                      (v) => v.dayJa === day && v.period === period
                    );
                    return (
                      <StyledTd day={day} period={period} key={day}>
                        <ScheduleItem schedule={schedule} />
                      </StyledTd>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Tile>
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
      borderRight={borderRight}
      borderBottom={borderBottom}
      borderColor="gray.300"
    >
      {children}
    </Td>
  );
};
