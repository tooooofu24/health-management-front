import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Router from "next/router";
import { CalendarCheck, Check } from "phosphor-react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AuthContent } from "../../components/common/AuthContent";
import { ErrorFallbackTile } from "../../components/common/error/ErrorFallbackTile";
import { Layout } from "../../components/common/Layout";
import { LoadingTile } from "../../components/common/loading/LoadingTile";
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
        <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
          <Suspense fallback={<LoadingTile />}>
            <ScheduleEdit />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </AuthContent>
  );
};

export default TopPage;
