import {
  Avatar,
  Box,
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
import { EnvelopeSimple, UserPlus } from "phosphor-react";
import { FC, useEffect, useState } from "react";
import { useInvitations } from "../../hooks/Invitation";
import { useUsers } from "../../hooks/User";
import { isSmartPhoneScreen } from "../../styles/Responsive";
import { Invitation } from "../../types/Invitation";
import { User } from "../../types/User";
import { formatDate } from "../../utils/time";
import { CommonError } from "../common/error/CommonError";
import { PageTitle } from "../common/PageTitle";
import { Tile, TilesWrapper } from "../common/Tile";
import { CancelInvitationButtton } from "./CancelInvitationButton";
import { DeleteUserButtton } from "./DeleteUserButton";

export const UserList = () => {
  const { users, refetch: refetchUsers } = useUsers();
  const { invitations, refetch: refetchInvitations } = useInvitations();
  const router = useRouter();

  useEffect(() => {
    refetchUsers();
    refetchInvitations();
  }, [router]);

  return (
    <TilesWrapper>
      {!users.length ? (
        <Tile>
          <CommonError message="ユーザーが存在しません" />
        </Tile>
      ) : (
        <Tile>
          <TableContainer>
            <Table size={["sm", "md"]}>
              <Thead>
                <Tr>
                  <Th>アイコン</Th>
                  <Th>ユーザー</Th>
                  <Th>メールアドレス</Th>
                  <Th>最終ログイン</Th>
                  <Th>削除</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users?.map((user) => (
                  <UserRow key={user.id} user={user} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Tile>
      )}
      <Box>
        <PageTitle iconUrl="/users" title="招待中" icon={<UserPlus />} />
        {!invitations?.length ? (
          <Tile>
            <CommonError message="招待中のユーザーはいません" />
          </Tile>
        ) : (
          <Tile>
            <TableContainer>
              <Table size={["sm", "md"]}>
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
                  {invitations?.map((invitation) => (
                    <InvitationRow
                      key={invitation.id}
                      invitation={invitation}
                    />
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Tile>
        )}
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
      <Td>{user.email}</Td>
      <Td>{formatDate(user.lastAuthenticatedAt)}</Td>
      <Td>
        <DeleteUserButtton user={user} />
      </Td>
    </Tr>
  );
};

type InvitationRowProps = {
  invitation: Invitation;
};
const InvitationRow: FC<InvitationRowProps> = ({ invitation }) => {
  return (
    <Tr>
      <Td>
        <IconButton
          icon={<EnvelopeSimple />}
          aria-label="メール送信"
          rounded="full"
          size={isSmartPhoneScreen() ? "xs" : "sm"}
        />
      </Td>
      <Td>{invitation.email}</Td>
      <Td>{invitation.createdBy.name}</Td>
      <Td>{formatDate(invitation?.createdAt)}</Td>
      <Td>
        <CancelInvitationButtton invitation={invitation} />
      </Td>
    </Tr>
  );
};
