import type { NextPage } from "next";
import { Baseball, Pencil } from "phosphor-react";
import { Suspense } from "react";
import { AuthContent } from "../../components/common/AuthContent";
import { Layout } from "../../components/common/Layout";
import { PageTitle } from "../../components/common/PageTitle";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallbackTile } from "../../components/common/error/ErrorFallbackTile";
import { LoadingTile } from "../../components/common/loading/LoadingTile";
import { RegisterPage } from "../../components/register";

const Page: NextPage = () => {
  return (
    <AuthContent>
      <Layout>
        <PageTitle title="データ登録" icon={<Pencil />} iconUrl="/register" />
        <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
          <Suspense fallback={<LoadingTile />}>
            <RegisterPage />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </AuthContent>
  );
};

export default Page;
