import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Img,
  Input,
  Select,
  Square,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  AddressBook,
  Calendar,
  Clock,
  House,
  PaperPlaneTilt,
} from "phosphor-react";
import { isPCScreen } from "../../../styles/Responsive";
import { Tile, TilesWrapper } from "../../common/Tile";
import { AttendanceList } from "./AttendanceList";
import { AttendanceTable } from "./AttendanceTable";

export const AttendanceCreate = () => {
  return (
    <>
      {isPCScreen() ? (
        <TilesWrapper>
          <Tile>
            <Flex gap="20px" flexWrap="wrap" width="full">
              <FormControl isInvalid={false} flex={1} minWidth="200px">
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
              <FormControl isInvalid={false} flex={1} minWidth="200px">
                <FormLabel>
                  <Calendar />
                  <Text>日付</Text>
                </FormLabel>
                <Input type="date" value="2022-10-01" />
                <FormErrorMessage>Email is required.</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={false} flex={1} minWidth="200px">
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
      ) : (
        <Flex
          alignItems="center"
          flexDirection="column"
          h="full"
          justifyContent="center"
          pt="10vh"
        >
          <Square size="350px">
            <Img
              src="/img/can-not.png"
              alt="寂しい女の子のイラスト"
              width="full"
            />
          </Square>
          <Text>お使いの端末では成績登録はできません。</Text>
          <Link href="/">
            <a>
              <Button marginTop={10} leftIcon={<House size={20} />}>
                トップページに戻る
              </Button>
            </a>
          </Link>
        </Flex>
      )}
    </>
  );
};
