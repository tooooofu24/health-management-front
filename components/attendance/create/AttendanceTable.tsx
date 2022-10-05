import {
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { PaperPlaneTilt } from "phosphor-react";
import { useFieldArray, useForm } from "react-hook-form";
import {
  AttendanceForm,
  AttendanceFormDefaultValue,
  onSubmitAttendanceForm,
} from "../../../hooks/form/AttendanceFormHook";
import { AttendanceTableTr } from "./AttendanceTableTr";

export const AttendanceTable = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AttendanceForm>({
    defaultValues: AttendanceFormDefaultValue,
  });

  const { fields } = useFieldArray({
    name: "rows",
    control,
  });

  return (
    <form onSubmit={handleSubmit(onSubmitAttendanceForm)}>
      <TableContainer>
        <Table variant="simple" textAlign="center">
          <Thead>
            <Tr>
              <Th color="teal.500" textAlign="center">
                出席番号
              </Th>
              <Th color="teal.500" textAlign="center">
                氏名
              </Th>
              <Th color="teal.500" textAlign="center">
                出席
              </Th>
              <Th color="teal.500" textAlign="center">
                知識・技能
              </Th>
              <Th color="teal.500" textAlign="center">
                思考力・判断力・表現力
              </Th>
              <Th color="teal.500" textAlign="center">
                主体的に取り組む態度
              </Th>
              <Th color="teal.500" textAlign="center">
                コメント等
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {fields.map((field, index) => (
              <AttendanceTableTr
                key={index}
                register={register}
                index={index}
                error={errors?.rows?.[index]}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex w="full" justifyContent="end" p="20px">
        <Button rightIcon={<PaperPlaneTilt />} type="submit">
          成績を登録する
        </Button>
      </Flex>
    </form>
  );
};
