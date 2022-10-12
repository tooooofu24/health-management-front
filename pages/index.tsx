import type { NextPage } from "next";
import { CalendarCheck } from "phosphor-react";
import { PageTitle } from "../components/common/PageTitle";
import { Schedule } from "../components/top/Index";

const TopPage: NextPage = () => {
  return (
    <>
      <PageTitle
        title="時間割"
        icon={<CalendarCheck size={25} />}
        iconUrl="/"
      />
      <Schedule />
    </>
  );
};

export default TopPage;
