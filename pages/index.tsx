import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { House } from "phosphor-react";
import { PageTitle } from "../components/common/PageTitle";
import { TimeSlot } from "../components/top/TimeSlot/TimeSlot";

const TopPage: NextPage = () => {
  return (
    <>
      <PageTitle title="時間割" icon={<House size={25} />} iconUrl="/" />
      <Flex justifyContent="center">
        <TimeSlot />
      </Flex>
    </>
  );
};

export default TopPage;
