import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Select,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VisuallyHidden,
} from "@chakra-ui/react";
import CSVReader from "react-csv-reader";
import { Tile } from "../common/Tile";
import {
  ArrowFatRight,
  Chalkboard,
  FileCsv,
  GraduationCap,
  PaperPlaneTilt,
} from "phosphor-react";

export const Create = () => {
  return (
    <Flex gap="50px">
      <Box flex={6}>
        <Tile>
          <Flex flexDirection="column" gap="20px">
            <FormControl isInvalid={false}>
              <FormLabel>
                <GraduationCap />
                <Text>学年</Text>
              </FormLabel>
              <Select placeholder="選択して下さい">
                <option value="option1">1年</option>
                <option value="option2">2年</option>
                <option value="option3">3年</option>
              </Select>
            </FormControl>
            <FormControl isInvalid={false}>
              <FormLabel>
                <Chalkboard />
                <Text>クラス</Text>
              </FormLabel>
              <Select placeholder="選択して下さい">
                <option value="option1">1組</option>
                <option value="option2">2組</option>
                <option value="option3">3組</option>
              </Select>
            </FormControl>
            <FormControl isInvalid={false}>
              <FormLabel>
                <FileCsv />
                <Text>生徒データ</Text>
              </FormLabel>
              <label>
                <VisuallyHidden>
                  <CSVReader
                    onFileLoaded={(data, fileInfo) =>
                      console.dir(data, fileInfo)
                    }
                    onError={(e) => console.log(e)}
                  />
                </VisuallyHidden>
                <Tag variant="solid" size="lg" cursor="pointer">
                  CSVファイルを選択
                </Tag>
              </label>
            </FormControl>
          </Flex>
        </Tile>
      </Box>
      <Flex
        flex={1}
        alignItems="center"
        color="gray.500"
        justifyContent="center"
      >
        <ArrowFatRight size={60} />
      </Flex>
      <Flex flexDirection="column" gap="20px" flex={6}>
        <Tile>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>学年・クラス</Th>
                  <Th>出席番号</Th>
                  <Th>氏名</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1年1組</Td>
                  <Td>1</Td>
                  <Td>石田きょうか</Td>
                </Tr>
                <Tr>
                  <Td>1年1組</Td>
                  <Td>2</Td>
                  <Td>高野かなこ</Td>
                </Tr>
                <Tr>
                  <Td>1年1組</Td>
                  <Td>3</Td>
                  <Td>井鍋りか</Td>
                </Tr>
                <Tr>
                  <Td>1年1組</Td>
                  <Td>3</Td>
                  <Td>井鍋りか</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Tile>
        <Flex justifyContent="end">
          <Button leftIcon={<PaperPlaneTilt />}>クラスを登録する</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
