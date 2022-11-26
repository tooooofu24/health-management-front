import type { NextPage } from "next";
import { MagnifyingGlass } from "phosphor-react";
import { Suspense } from "react";
import { AuthContent } from "../../../components/common/AuthContent";
import { Layout } from "../../../components/common/Layout";
import { PageTitle } from "../../../components/common/PageTitle";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallbackTile } from "../../../components/common/error/ErrorFallbackTile";
import { LoadingTile } from "../../../components/common/loading/LoadingTile";
import { HealthChecksPage } from "../../../components/admin/healthCheck/Index";

const Page: NextPage = () => {
  return (
    <AuthContent>
      <Layout role="Teacher">
        <PageTitle title="回答検索" icon={<MagnifyingGlass />} iconUrl="" />
        <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
          <Suspense fallback={<LoadingTile />}>
            <HealthChecksPage />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </AuthContent>
  );
};

export default Page;
