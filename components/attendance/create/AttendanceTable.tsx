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
import { FC } from "react";
import {
  FieldErrorsImpl,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
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
  watch: UseFormWatch<AttendanceForm>;
};
export const AttendanceTable: FC<props> = ({
  fields,
  register,
  errors,
  watch,
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
                watch={watch}
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
  watch: UseFormWatch<AttendanceForm>;
};
const Row: FC<RowProps> = ({ field, register, errors, i, watch }) => {
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
          register={register(`attendances.${i}.knowledge`, {
            required: "必須項目です！",
          })}
          error={errors.attendances?.[i]?.knowledge}
        />
      </Td>
      <Td>
        <ABCButtons
          register={register(`attendances.${i}.expression`, {
            required: "必須項目です！",
          })}
          error={errors.attendances?.[i]?.expression}
        />
      </Td>
      <Td>
        <ABCButtons
          register={register(`attendances.${i}.attitude`, {
            required: "必須項目です！",
          })}
          error={errors.attendances?.[i]?.attitude}
        />
      </Td>
      <Td>
        <Flex alignItems="center" justifyContent="center">
          <MessageButton
            filled={Boolean(watch(`attendances.${i}.message`))}
            register={register(`attendances.${i}.message`)}
          />
        </Flex>
      </Td>
    </Tr>
  );
};
