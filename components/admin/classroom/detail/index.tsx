import { Tile } from "../../../common/Tile";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Tag,
} from "@chakra-ui/react";
import { CaretRight } from "phosphor-react";
import { Classroom, Teacher } from "@prisma/client";
import { useRouter } from "next/router";
import { useClassrooms } from "../../../../hooks/Classroom";

export const ClassroomPage = () => {
  const { classrooms } = useClassrooms();
  return <Tile></Tile>;
};
