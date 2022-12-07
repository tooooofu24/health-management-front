import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  BoxProps,
  Flex,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Baseball,
  ChatsCircle,
  GraduationCap,
  House,
  MagnifyingGlass,
  SignOut,
  User,
  UsersThree,
  WarningCircle,
} from "phosphor-react";
import { FC, ReactNode } from "react";
import { useUnreadCount } from "../../../hooks/HealthCheck";
import { Logo } from "../Logo";
import { LogoutModal } from "../LogoutModal";

export const SidebarContentTeacher = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { count } = useUnreadCount();

  return (
    <Flex flexDirection="column" h="full" py="20px">
      {/* ロゴ部分 */}
      <Box mb="20px">
        <Link href="/admin/">
          <a>
            <Logo />
          </a>
        </Link>
      </Box>
      {/* ロゴ部分終了 */}
      <Link href="/admin">
        <a>
          <SidebarItem
            icon={<House />}
            title="ホーム"
            isActive={router.pathname == "/admin"}
            {...(count && count > 0
              ? { notify: count > 9 ? "9+" : String(count) }
              : null)}
          />
        </a>
      </Link>
      <Link href="/admin/health-checks">
        <a>
          <SidebarItem
            icon={<MagnifyingGlass />}
            title="回答検索"
            isActive={router.pathname == "/admin/health-checks"}
          />
        </a>
      </Link>
      <Link href="/admin/students">
        <a>
          <SidebarItem
            icon={<UsersThree />}
            title="生徒検索"
            isActive={router.pathname == "/admin/students"}
          />
        </a>
      </Link>
      <Link href="/admin/classrooms">
        <a>
          <SidebarItem
            icon={<GraduationCap />}
            title="クラス一覧"
            isActive={router.pathname == "/admin/classrooms"}
          />
        </a>
      </Link>
      <Link href="/admin/clubs">
        <a>
          <SidebarItem
            icon={<Baseball />}
            title="部活一覧"
            isActive={router.pathname == "/admin/clubs"}
          />
        </a>
      </Link>
      <Link href="/admin/contact">
        <a>
          <SidebarItem
            icon={<ChatsCircle />}
            title="お問い合わせ"
            isActive={router.pathname == "/admin/contact"}
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

type props = {
  icon: ReactNode;
  title: string;
  isActive: boolean;
  notify?: string;
} & BoxProps;
export const SidebarItem: FC<props> = ({
  isActive,
  icon,
  title,
  notify,
  ...props
}) => {
  return (
    <Box
      position="relative"
      _hover={{
        div: {
          bg: "telegram.500",
          textColor: "white",
        },
        span: { bg: "white", textColor: "telegram.500" },
      }}
    >
      <Box
        width="full"
        p="16px"
        bg="white"
        textColor="telegram.500"
        fontWeight="bold"
        cursor="pointer"
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
      {notify && (
        <Flex
          right="1rem"
          top="0"
          position="absolute"
          alignItems="center"
          h="full"
        >
          <Tag
            justifyContent="center"
            rounded="full"
            width={3}
            height={3}
            fontSize={12}
            fontWeight="bold"
            bg="telegram.500"
            textColor="white"
            {...(isActive && { bg: "white", textColor: "telegram.500" })}
          >
            {notify}
          </Tag>
        </Flex>
      )}
    </Box>
  );
};
