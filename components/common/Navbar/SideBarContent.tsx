import { Box, BoxProps, Flex, Text, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  CalendarCheck,
  Gear,
  GraduationCap,
  SignOut,
  Users,
} from "phosphor-react";
import { FC, ReactNode } from "react";
import { Icon } from "../Icon";
import { LogoutModal } from "../LogoutModal";

export const SidebarContent = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex flexDirection="column" h="full" py="20px">
      {/* ロゴ部分 */}
      <Box mb="20px">
        <Link href="/">
          <a>
            <Flex alignItems="center" px="16px" gap="15px" height="75px">
              <Icon width={30} height={30} />
              <Text fontWeight="bold" fontSize="20px" color="teal.500">
                出席くん
              </Text>
            </Flex>
          </a>
        </Link>
      </Box>
      {/* ロゴ部分終了 */}
      <Link href="/">
        <a>
          <Item
            icon={<CalendarCheck />}
            title="時間割"
            isActive={router.pathname == "/"}
          />
        </a>
      </Link>
      <Link href="/classrooms">
        <a>
          <Item
            icon={<GraduationCap />}
            title="クラス一覧"
            isActive={router.pathname == "/classrooms"}
          />
        </a>
      </Link>
      <Link href="/users">
        <a>
          <Item
            icon={<Users />}
            title="ユーザー一覧"
            isActive={router.pathname == "/users"}
          />
        </a>
      </Link>
      <Link href="/settings">
        <a>
          <Item
            icon={<Gear />}
            title="設定"
            isActive={router.pathname == "/settings"}
          />
        </a>
      </Link>
      <Box mt="auto">
        <Item
          icon={<SignOut />}
          isActive={isOpen}
          title="ログアウト"
          onClick={onOpen}
        />
        <LogoutModal onClose={onClose} isOpen={isOpen} />
      </Box>
    </Flex>
  );
};

type props = {
  icon: ReactNode;
  title: string;
  isActive: boolean;
} & BoxProps;
const Item: FC<props> = ({ isActive, icon, title, ...props }) => {
  return (
    <Box
      width="full"
      p="16px"
      bg="white"
      textColor="teal.500"
      fontWeight="bold"
      cursor="pointer"
      _hover={{ bg: "teal.500", textColor: "white" }}
      {...(isActive && { bg: "teal.500", textColor: "white" })}
      {...props}
      __css={{
        svg: {
          height: "20px",
          width: "20px",
        },
      }}
    >
      <Flex alignItems="center" gap="15px">
        {icon}
        {title}
      </Flex>
    </Box>
  );
};
