import { Box, BoxProps, Flex, Text, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Baseball,
  CalendarCheck,
  FaceMask,
  Gear,
  GraduationCap,
  House,
  SignOut,
  Users,
} from "phosphor-react";
import { FC, ReactNode } from "react";
import { Icon } from "../Icon";
import { Logo } from "../Logo";
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
            <Logo />
          </a>
        </Link>
      </Box>
      {/* ロゴ部分終了 */}
      <Link href="/">
        <a>
          <Item
            icon={<House />}
            title="ホーム"
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
      <Link href="/clubs">
        <a>
          <Item
            icon={<Baseball />}
            title="部活一覧"
            isActive={router.pathname == "/clubs"}
          />
        </a>
      </Link>
      <Link href="/users">
        <a>
          <Item
            icon={<Users />}
            title="教員一覧"
            isActive={router.pathname == "/users"}
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
      textColor="telegram.500"
      fontWeight="bold"
      cursor="pointer"
      _hover={{ bg: "telegram.500", textColor: "white" }}
      {...(isActive && { bg: "telegram.500", textColor: "white" })}
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
