import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  Book,
  ChatCircle,
  ChatCircleDots,
  Check,
  HandPalm,
  Lightbulb,
  Notebook,
  PaperPlaneTilt,
} from "phosphor-react";
import { useFieldArray, useForm } from "react-hook-form";
import {
  AttendanceForm,
  AttendanceFormDefaultValue,
  onSubmitAttendanceForm,
} from "../../../hooks/form/AttendanceFormHook";
import { isPCScreen } from "../../../styles/Responsive";
import { InputField } from "../../common/form/InputField";
import { AttendanceABCButtons } from "./AttendanceABCButtons";

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
          <Thead>
            <Tr>
              <Th maxWidth={100}>番号</Th>
              <Th>氏名</Th>
              <Th maxWidth={100}>出欠</Th>
              <Th>知識・技能</Th>
              <Th>思考力・判断力・表現力</Th>
              <Th>主体的に学習に取り組む態度</Th>
              <Th maxWidth={100}>コメント</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>千葉陶也</Td>
              <Td>
                <Checkbox size="lg" />
              </Td>
              <Td>
                <AttendanceABCButtons />
              </Td>
              <Td>
                <AttendanceABCButtons />
              </Td>
              <Td>
                <AttendanceABCButtons />
              </Td>
              <Td>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  color="gray.500"
                >
                  <IconButton
                    height="auto"
                    minWidth="auto"
                    icon={<ChatCircle size={25} />}
                    aria-label=""
                    variant="ghost"
                  />
                </Flex>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </form>
  );
};
