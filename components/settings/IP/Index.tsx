import {
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
import { Check, Trash, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { useCurrentIP, useIPAddresses } from "../../../hooks/IPAddress";
import { formatDate } from "../../../utils/time";
import { CommonError } from "../../common/error/CommonError";
import { Loading } from "../../common/loading/Loading";
import { Tile } from "../../common/Tile";
import { DeleteIPButtton } from "./DeleteIPButton";

export const IPList = () => {
  const { IPAddresses, getIPAddresses, isLoading } = useIPAddresses();
  const [error, setError] = useState("");
  const { currentIP } = useCurrentIP();
  const router = useRouter();

  useEffect(() => {
    getIPAddresses().catch((e) => {
      setError(e.message);
    });
  }, [router]);
  return error ? (
    <Tile>
      <CommonError message="データの取得に失敗しました" error={error} />
    </Tile>
  ) : isLoading ? (
    <Tile>
      <Loading />
    </Tile>
  ) : !IPAddresses.length ? (
    <Tile>
      <CommonError message="IPアドレスが存在しません" />
    </Tile>
  ) : (
    <Tile>
      <TableContainer>
        <Table>
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
                  {currentIP == IPAddress.ip && (
                    <Flex justifyContent="center" color="teal.500">
                      <Check />
                    </Flex>
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
