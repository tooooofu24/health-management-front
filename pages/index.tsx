import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { PageTitle } from "../components/common/PageTitle";
import { TimeSlot } from "../components/top/TimeSlot/TimeSlot";

const TopPage: NextPage = () => {
  return (
    <>
      <PageTitle title="時間割" />
      <Flex justifyContent="center">
        <TimeSlot />
      </Flex>
    </>
  );
};

export default TopPage;
