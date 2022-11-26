import type { NextPage } from "next";
import { Bell } from "phosphor-react";
import { PageTitle } from "../components/common/PageTitle";
import { Layout } from "../components/common/Layout";
import { AuthContent } from "../components/common/AuthContent";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { LoadingTile } from "../components/common/loading/LoadingTile";
import { ErrorFallbackTile } from "../components/common/error/ErrorFallbackTile";
import { HomePage } from "../components/student/home/Index";

const TopPage: NextPage = () => {
  return (
    <AuthContent>
      <Layout role="Student">
        <PageTitle title="お知らせ" icon={<Bell />} iconUrl="/" />
        <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
          <Suspense fallback={<LoadingTile />}>
            <HomePage />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </AuthContent>
  );
};

export default TopPage;
