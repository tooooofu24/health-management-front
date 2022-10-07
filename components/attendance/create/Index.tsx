import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { AddressBook, Calendar, Clock, PaperPlaneTilt } from "phosphor-react";
import { Tile, TilesWrapper } from "../../common/Tile";
import { AttendanceTable } from "./AttendanceTable";

export const AttendanceCreate = () => {
  return (
    <>
      <TilesWrapper>
        <Tile>
          <Flex gap="20px">
            <FormControl isInvalid={false}>
              <FormLabel>
                <AddressBook />
                <Text>クラスと教科</Text>
              </FormLabel>
              <Select placeholder="選択して下さい" defaultValue="option1">
                <option value="option1">1年1組 「道徳」</option>
                <option value="option2">2年2組 「音楽」</option>
                <option value="option3">3年1組 「音楽」</option>
              </Select>
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={false}>
              <FormLabel>
                <Calendar />
                <Text>日付</Text>
              </FormLabel>
              <Input type="date" value="2022-10-01" />
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={false}>
              <FormLabel>
                <Clock />
                時限
              </FormLabel>
              <Select placeholder="選択して下さい" defaultValue="option1">
                <option value="option1">1時間目</option>
                <option value="option2">2時間目</option>
                <option value="option3">3時間目</option>
              </Select>
              <FormErrorMessage>Email is required.</FormErrorMessage>
            </FormControl>
          </Flex>
        </Tile>
        <Tile>
          <AttendanceTable />
        </Tile>
        <Flex w="full" justifyContent="end" gap="20px">
          <Button rightIcon={<PaperPlaneTilt />} type="submit">
            成績を登録する
          </Button>
        </Flex>
      </TilesWrapper>
    </>
  );
};
