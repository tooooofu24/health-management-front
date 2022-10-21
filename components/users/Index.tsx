import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Check, EnvelopeSimple, UserPlus } from "phosphor-react";
import { useCurrentUser } from "../../hooks/CurrentUser";
import { PageTitle } from "../common/PageTitle";
import { Tile, TilesWrapper } from "../common/Tile";
import { DeleteUserButtton } from "./DeleteUserButton";

export const UserList = () => {
  const { user } = useCurrentUser();
  return (
    <TilesWrapper>
      <Tile>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>ユーザー</Th>
                <Th>メールアドレス</Th>
                <Th>アクティブ</Th>
                <Th>最終ログイン</Th>
                <Th>削除</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Flex justifyContent="center" alignItems="center" gap="10%">
                    <Avatar
                      name={user?.displayName ?? ""}
                      src={user?.photoURL ?? undefined}
                      size="sm"
                      referrerPolicy="no-referrer"
                    />
                    {user?.displayName}
                  </Flex>
                </Td>
                <Td>{user?.email}</Td>
                <Td>
                  <Flex justifyContent="center">
                    <Check size={20} />
                  </Flex>
                </Td>
                <Td>{format(String(user?.metadata.lastSignInTime))}</Td>
                <Td>
                  <DeleteUserButtton />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Tile>
      <Box>
        <PageTitle iconUrl="/users" title="招待中" icon={<UserPlus />} />
        <Tile>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>再通知</Th>
                  <Th>メールアドレス</Th>
                  <Th>招待ユーザー</Th>
                  <Th>招待日時</Th>
                  <Th>キャンセル</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <IconButton
                      icon={<EnvelopeSimple />}
                      aria-label="メール送信"
                      size="sm"
                      rounded="full"
                    />
                  </Td>
                  <Td>chiba.chatplus@gmail.com</Td>
                  <Td>{user?.displayName}</Td>
                  <Td>2022-10-01</Td>
                  <Td>
                    <DeleteUserButtton />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Tile>
      </Box>
    </TilesWrapper>
  );
};

const format = (s: string) => {
  const date = new Date(s);
  return date.toLocaleDateString();
};
