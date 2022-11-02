import {
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC } from "react";
import { Control, UseFormRegister, useWatch } from "react-hook-form";
import {
  AttendanceForm,
  AttendanceRow,
} from "../../../utils/form/AttendanceForm";
import { ABCButtons } from "../../common/form/ABCButtons";
import { MessageButton } from "./MessageButton";

type props = {
  fields?: AttendanceRow[];
  register: UseFormRegister<AttendanceForm>;
  errors: any;
  control: Control<AttendanceForm>;
};
export const AttendanceTable: FC<props> = ({
  fields,
  register,
  errors,
  control,
}) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>番号</Th>
            <Th>氏名</Th>
            <Th>出欠</Th>
            <Th>知識・技能</Th>
            <Th>思考力・判断力・表現力</Th>
            <Th>主体的に学習に取り組む態度</Th>
            <Th>コメント</Th>
          </Tr>
        </Thead>
        <Tbody>
          {fields?.map((field, i) => {
            return (
              <Row
                key={i}
                errors={errors}
                register={register}
                field={field}
                i={i}
                control={control}
              />
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

type RowProps = {
  field: AttendanceRow;
  register: UseFormRegister<AttendanceForm>;
  errors: any;
  i: number;
  control: Control<AttendanceForm>;
};
const Row: FC<RowProps> = ({ field, register, errors, i, control }) => {
  const message = useWatch({ name: `attendances.${i}.message`, control });
  return (
    <Tr key={field.student.id}>
      <Td>{field.student.number}</Td>
      <Td>{field.student.name}</Td>
      <Td>
        <FormControl isInvalid={Boolean(errors.attendances?.[i]?.attend)}>
          <Checkbox {...register(`attendances.${i}.attend`)} size="lg" />
          <FormErrorMessage justifyContent="center">
            {errors.attendances?.[i]?.attend?.message}
          </FormErrorMessage>
        </FormControl>
      </Td>
      <Td>
        <ABCButtons
          register={register(`attendances.${i}.knowledge`)}
          error={errors.attendances?.[i]?.knowledge}
        />
      </Td>
      <Td>
        <ABCButtons
          register={register(`attendances.${i}.expression`)}
          error={errors.attendances?.[i]?.expression}
        />
      </Td>
      <Td>
        <ABCButtons
          register={register(`attendances.${i}.attitude`)}
          error={errors.attendances?.[i]?.attitude}
        />
      </Td>
      <Td>
        <Flex alignItems="center" justifyContent="center">
          <MessageButton
            filled={Boolean(message)}
            register={register(`attendances.${i}.message`)}
          />
        </Flex>
      </Td>
    </Tr>
  );
};
