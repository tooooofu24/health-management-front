import { Button, Flex, Table, TableContainer, Tbody } from "@chakra-ui/react";
import { PaperPlaneTilt } from "phosphor-react";
import { useFieldArray, useForm } from "react-hook-form";
import {
  AttendanceForm,
  AttendanceFormDefaultValue,
  onSubmitAttendanceForm,
} from "../../hooks/form/AttendanceFormHook";
import { AttendanceTableThead } from "./AttendanceTableThead";
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
        <Table variant="simple">
          <AttendanceTableThead />
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
