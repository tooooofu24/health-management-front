import type { NextPage } from "next";
import { PageTitle } from "../components/common/PageTitle";
import { TimeSlot } from "../components/top/TimeSlot/TimeSlot";

const TopPage: NextPage = () => {
  return (
    <>
      <PageTitle>時間割</PageTitle>
      <TimeSlot />
    </>
  );
};

export default TopPage;
