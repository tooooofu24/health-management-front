import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import { WifiHigh } from "phosphor-react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AuthContent } from "../../components/common/AuthContent";
import { ErrorFallbackTile } from "../../components/common/error/ErrorFallbackTile";
import { Layout } from "../../components/common/Layout";
import { LoadingTile } from "../../components/common/loading/LoadingTile";
import { PageTitle } from "../../components/common/PageTitle";
import { AddIPButton } from "../../components/settings/IP/AddIPButton";
import { IPList } from "../../components/settings/IP/Index";

const TopPage: NextPage = () => {
  return (
    <AuthContent>
      <Layout>
        <PageTitle
          title="IPアドレス"
          icon={<WifiHigh />}
          iconUrl="/settings"
          rightItem={<AddIPButton />}
        />
        <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
          <Suspense fallback={<LoadingTile />}>
            <IPList />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </AuthContent>
  );
};

export default TopPage;
