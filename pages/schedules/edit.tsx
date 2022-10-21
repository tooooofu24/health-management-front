import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Router from "next/router";
import { CalendarCheck, Check } from "phosphor-react";
import { Layout } from "../../components/common/Layout";
import { PageTitle } from "../../components/common/PageTitle";
import { ScheduleEdit } from "../../components/schedules/edit/Index";

const TopPage: NextPage = () => {
  return (
    <Layout>
      <PageTitle
        title="時間割編集"
        icon={<CalendarCheck />}
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
    </Layout>
  );
};

export default TopPage;
