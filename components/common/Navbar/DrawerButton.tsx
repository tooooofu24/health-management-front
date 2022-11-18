import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import Router, { useRouter } from "next/router";
import { House, List, UserPlus } from "phosphor-react";
import React, { FC, ReactNode, useEffect } from "react";
import { SidebarContent } from "./SideBarContent";

export const DrawerButton = () => {
  const router = useRouter();
  useEffect(() => {
    onClose();
  }, [router]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        icon={<List size={22} />}
        aria-label="メニュー"
        onClick={onOpen}
        variant="ghost"
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody p={0}>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

type props = {
  children: ReactNode;
  href: string;
  onClose: () => void;
  icon: ReactNode;
};
const Item: FC<props> = ({ children, onClose, href, icon }) => {
  const onClick = () => {
    Router.push(href);
    onClose();
  };
  const isActive = location.pathname === href;
  return (
    <Box
      width="full"
      px="20px"
      py="20px"
      bg="white"
      textColor="telegram.500"
      fontWeight="bold"
      cursor="pointer"
      _hover={{ bg: "telegram.500", textColor: "white" }}
      {...(isActive && { bg: "telegram.500", textColor: "white" })}
      onClick={onClick}
    >
      <Flex alignItems="center" gap="20px">
        {icon} {children}
      </Flex>
    </Box>
  );
};
