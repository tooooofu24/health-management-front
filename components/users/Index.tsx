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
import { useRouter } from "next/router";
import { Check, EnvelopeSimple, UserPlus } from "phosphor-react";
import { FC, useEffect } from "react";
import { useCurrentUser } from "../../hooks/CurrentUser";
import { useUsers } from "../../hooks/User";
import { User } from "../../types/User";
import { PageTitle } from "../common/PageTitle";
import { Tile, TilesWrapper } from "../common/Tile";
import { DeleteUserButtton } from "./DeleteUserButton";

export const UserList = () => {
  const { users, getUsers } = useUsers();
  const router = useRouter();

  useEffect(() => {
    getUsers();
  }, [router]);
  const { user } = useCurrentUser();
  return (
    <TilesWrapper>
      <Tile>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>ユーザー</Th>
                <Th>メールアドレス</Th>
                <Th>アクティブ</Th>
                <Th>最終ログイン</Th>
                <Th>削除</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.length
                ? users.map((user) => <UserRow key={user.id} user={user} />)
                : null}
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

type UserRowProps = {
  user: User;
};
const UserRow: FC<UserRowProps> = ({ user }) => {
  return (
    <Tr>
      <Td>
        <Avatar
          name={user.name}
          src={user.profileImage}
          size="sm"
          referrerPolicy="no-referrer"
        />
      </Td>
      <Td>{user.name}</Td>
      <Td>？？？</Td>
      <Td>
        <Flex justifyContent="center">
          <Check size={20} />
        </Flex>
      </Td>
      <Td>？？？</Td>
      <Td>
        <DeleteUserButtton />
      </Td>
    </Tr>
  );
};
