import {
  Avatar,
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
import { Check, Trash, X } from "phosphor-react";
import { useCurrentUser } from "../../hooks/CurrentUser";
import { Tile } from "../common/Tile";
import { DeleteUserButtton } from "./DeleteUserButton";

export const UserList = () => {
  const { user } = useCurrentUser();
  return (
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
  );
};

const format = (s: string) => {
  const date = new Date(s);
  return date.toLocaleDateString();
};
