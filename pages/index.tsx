import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import { CalendarCheck } from "phosphor-react";
import { PageTitle } from "../components/common/PageTitle";
import { Schedule } from "../components/schedules/Index";
import Router from "next/router";
import { Pencil } from "phosphor-react";
import { Layout } from "../components/common/Layout";
import { AuthContent } from "../components/common/AuthContent";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { LoadingTile } from "../components/common/loading/LoadingTile";
import { ErrorFallbackTile } from "../components/common/error/ErrorFallbackTile";

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
              variant="responsive"
              leftIcon={<Pencil />}
              onClick={() => Router.push("/schedules/edit")}
            >
              編集
            </Button>
          }
        />
        <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
          <Suspense fallback={<LoadingTile />}>
            <Schedule />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </AuthContent>
  );
};

export default TopPage;
