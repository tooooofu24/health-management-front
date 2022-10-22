import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import { CalendarCheck } from "phosphor-react";
import { PageTitle } from "../components/common/PageTitle";
import { Schedule } from "../components/schedules/Index";
import Router from "next/router";
import { Pencil } from "phosphor-react";
import { Layout } from "../components/common/Layout";
import { AuthContent } from "../components/common/AuthContent";

const TopPage: NextPage = () => {
  return (
    <AuthContent>
      <Layout>
        <PageTitle
          title="時間割"
          icon={<CalendarCheck />}
          iconUrl="/"
          rightItem={
            <Button
              leftIcon={<Pencil />}
              onClick={() => Router.push("/schedules/edit")}
            >
              編集
            </Button>
          }
        />
        <Schedule />
      </Layout>
    </AuthContent>
  );
};

export default TopPage;
