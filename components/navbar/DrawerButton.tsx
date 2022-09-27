import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { List } from "phosphor-react";

export const DrawerButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton icon={<List />} aria-label="メニュー" onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>あ</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
