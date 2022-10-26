import {
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ChatCircle } from "phosphor-react";
import { FC } from "react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import {
  AttendanceForm,
  AttendanceRow,
} from "../../../utils/form/AttendanceForm";
import { AttendanceABCButtons } from "./AttendanceABCButtons";

type props = {
  fields?: AttendanceRow[];
  register: UseFormRegister<AttendanceForm>;
  errors: any;
};
export const AttendanceTable: FC<props> = ({ fields, register, errors }) => {
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
};
const Row: FC<RowProps> = ({ field, register, errors, i }) => {
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
        <AttendanceABCButtons
          register={register(`attendances.${i}.knowledge`, {
            required: "必須項目です！",
          })}
          error={errors.attendances?.[i]?.knowledge}
        />
      </Td>
      <Td>
        <AttendanceABCButtons
          register={register(`attendances.${i}.expression`, {
            required: "必須項目です！",
          })}
          error={errors.attendances?.[i]?.expression}
        />
      </Td>
      <Td>
        <AttendanceABCButtons
          register={register(`attendances.${i}.attitude`, {
            required: "必須項目です！",
          })}
          error={errors.attendances?.[i]?.attitude}
        />
      </Td>
      <Td>
        <Flex alignItems="center" justifyContent="center" color="gray.500">
          <IconButton
            color="gray.400"
            icon={<ChatCircle size={25} />}
            aria-label=""
            variant="ghost"
            size="md"
          />
        </Flex>
      </Td>
    </Tr>
  );
};
