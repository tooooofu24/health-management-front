import { Box, BoxProps, Flex, Text, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Baseball,
  GraduationCap,
  House,
  Pencil,
  SignOut,
} from "phosphor-react";
import { FC, ReactNode } from "react";
import { Logo } from "../Logo";
import { LogoutModal } from "../LogoutModal";
import { SidebarItem } from "./SideBarContentTeacher";

export const SidebarContentStudent = () => {
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
          <SidebarItem
            icon={<House />}
            title="ホーム"
            isActive={router.pathname == "/"}
          />
        </a>
      </Link>
      <Link href="/register">
        <a>
          <SidebarItem
            icon={<Pencil />}
            title="データ登録"
            isActive={router.pathname == "/register"}
          />
        </a>
      </Link>
      <Box mt="auto">
        <SidebarItem
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
