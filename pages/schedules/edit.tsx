import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Router from "next/router";
import { CalendarCheck, Check } from "phosphor-react";
import { AuthContent } from "../../components/common/AuthContent";
import { Layout } from "../../components/common/Layout";
import { PageTitle } from "../../components/common/PageTitle";
import { ScheduleEdit } from "../../components/schedules/edit/Index";

const TopPage: NextPage = () => {
  return (
    <AuthContent>
      <Layout>
        <PageTitle
          title="時間割編集"
          icon={<CalendarCheck />}
          iconUrl="/"
          rightItem={
            <Button
              variant="responsiveOutline"
              leftIcon={<Check />}
              onClick={() => Router.push("/")}
            >
              終了
            </Button>
          }
        />
        <ScheduleEdit />
      </Layout>
    </AuthContent>
  );
};

export default TopPage;
