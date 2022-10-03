import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { GraduationCap, House, SignOut, User } from "phosphor-react";
import { FC, ReactNode } from "react";

export const SidebarContent = () => {
  return (
    <Flex flexDirection="column" h="full">
      <Item icon={<House size={20} />} href="/" title="時間割" />
      <Item
        icon={<GraduationCap size={20} />}
        href="/classrooms"
        title="クラス一覧"
      />
      <Item icon={<User size={20} />} href="/mypage" title="マイページ" />
      <Box mt="auto">
        <Item icon={<SignOut size={20} />} href="/logout" title="ログアウト" />
      </Box>
    </Flex>
  );
};

type props = {
  href: string;
  icon: ReactNode;
  title: string;
  onClick?: () => void;
};
const Item: FC<props> = ({ href, icon, title, onClick }) => {
  const isActive = useRouter().pathname === href;
  return (
    <Link href={href} onClick={onClick}>
      <a>
        <Box
          width="full"
          px="16px"
          py="16px"
          bg="white"
          textColor="teal.500"
          fontWeight="bold"
          cursor="pointer"
          _hover={{ bg: "teal.500", textColor: "white" }}
          {...(isActive && { bg: "teal.500", textColor: "white" })}
        >
          <Flex alignItems="center" gap="15px">
            {icon}
            {title}
          </Flex>
        </Box>
      </a>
    </Link>
  );
};
