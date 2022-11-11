import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Check } from "phosphor-react";
import { useEffect } from "react";
import { useCurrentIP, useIPAddresses } from "../../../hooks/IPAddress";
import { formatDate } from "../../../utils/time";
import { CommonError } from "../../common/error/CommonError";
import { Tile } from "../../common/Tile";
import { DeleteIPButtton } from "./DeleteIPButton";

export const IPList = () => {
  const { IPAddresses, refetch } = useIPAddresses();
  const { currentIP } = useCurrentIP();
  const router = useRouter();

  useEffect(() => {
    refetch();
  }, [router]);

  return !IPAddresses.length ? (
    <Tile>
      <CommonError message="IPアドレスが存在しません" />
    </Tile>
  ) : (
    <Tile>
      <TableContainer>
        <Table size={["sm", "md"]}>
          <Thead>
            <Tr>
              <Th>使用中</Th>
              <Th>ラベル</Th>
              <Th>IPアドレス</Th>
              <Th>追加ユーザー</Th>
              <Th>追加日時</Th>
              <Th>削除</Th>
            </Tr>
          </Thead>
          <Tbody>
            {IPAddresses.map((IPAddress) => (
              <Tr key={IPAddress.id}>
                <Td>
                  {currentIP == IPAddress.ip ? (
                    <Flex
                      mx="auto"
                      w={8}
                      justifyContent="center"
                      color="teal.500"
                    >
                      <Check />
                    </Flex>
                  ) : (
                    <Box w={8} />
                  )}
                </Td>
                <Td>{IPAddress.label}</Td>
                <Td>{IPAddress.ip}</Td>
                <Td>{IPAddress.createdBy.name}</Td>
                <Td>{formatDate(IPAddress.createdAt)}</Td>
                <Td>
                  <DeleteIPButtton IPAddress={IPAddress} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Tile>
  );
};
