import type { NextPage } from "next";
import { GraduationCap, Plus, Student } from "phosphor-react";
import { Suspense } from "react";
import { AuthContent } from "../../../components/common/AuthContent";
import { Layout } from "../../../components/common/Layout";
import { PageTitle } from "../../../components/common/PageTitle";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallbackTile } from "../../../components/common/error/ErrorFallbackTile";
import { LoadingTile } from "../../../components/common/loading/LoadingTile";
import { ClassroomPage } from "../../../components/admin/classroom/index/Index";

const Page: NextPage = () => {
  return (
    <AuthContent>
      <Layout>
        <PageTitle
          title="クラス一覧"
          icon={<GraduationCap />}
          iconUrl="/clubs"
        />
        <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
          <Suspense fallback={<LoadingTile />}>
            <ClassroomPage />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </AuthContent>
  );
};

export default Page;
