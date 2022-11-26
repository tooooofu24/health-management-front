import type { NextPage } from "next";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { AuthContent } from "../../components/common/AuthContent";
import { PageTitle } from "../../components/common/PageTitle";
import { ErrorFallbackTile } from "../../components/common/error/ErrorFallbackTile";
import { LoadingTile } from "../../components/common/loading/LoadingTile";
import { Layout } from "../../components/common/Layout";
import { House } from "phosphor-react";
import { AdminHomePage } from "../../components/admin/home";

const TopPage: NextPage = () => {
  return (
    <AuthContent>
      <Layout role="Teacher">
        <PageTitle title="ホーム" icon={<House />} iconUrl="" />
        <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
          <Suspense fallback={<LoadingTile />}>
            <AdminHomePage />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </AuthContent>
  );
};

export default TopPage;
