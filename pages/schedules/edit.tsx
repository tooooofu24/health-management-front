import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Router from "next/router";
import { CalendarCheck, Check } from "phosphor-react";
import { PageTitle } from "../../components/common/PageTitle";
import { ScheduleEdit } from "../../components/schedules/edit/Index";

const TopPage: NextPage = () => {
  return (
    <>
      <PageTitle
        title="時間割編集"
        icon={<CalendarCheck size={25} />}
        iconUrl="/"
        rightItem={
          <Button
            variant="outline"
            leftIcon={<Check />}
            onClick={() => Router.push("/")}
          >
            終了
          </Button>
        }
      />
      <ScheduleEdit />
    </>
  );
};

export default TopPage;
