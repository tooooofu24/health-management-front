import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { CalendarCheck, GraduationCap, SignOut, User } from "phosphor-react";
import { FC, ReactNode } from "react";
import { Icon } from "./Icon";

export const SidebarContent = () => {
  return (
    <Flex flexDirection="column" h="full" py="20px">
      {/* ロゴ部分 */}
      <Box mb="20px">
        <Link href="/">
          <a>
            <Flex alignItems="center" px="16px" gap="15px" py="20px">
              <Icon width={30} height={30} />
              <Text fontWeight="bold" fontSize="20px" color="teal.500">
                出席くん
              </Text>
            </Flex>
          </a>
        </Link>
      </Box>
      {/* ロゴ部分終了 */}
      <Item icon={<CalendarCheck size={20} />} href="/" title="時間割" />
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
          p="16px"
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
