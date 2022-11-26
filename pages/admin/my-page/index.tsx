import type { NextPage } from "next";
import { Baseball, MagnifyingGlass, User } from "phosphor-react";
import { Suspense } from "react";
import { AuthContent } from "../../../components/common/AuthContent";
import { Layout } from "../../../components/common/Layout";
import { PageTitle } from "../../../components/common/PageTitle";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallbackTile } from "../../../components/common/error/ErrorFallbackTile";
import { LoadingTile } from "../../../components/common/loading/LoadingTile";
import { HealthChecksPage } from "../../../components/admin/healthCheck/Index";
import { AdminMyPage } from "../../../components/admin/my-page";
import { MyPageEditButton } from "../../../components/student/my-page/MyPageEditButton";

const Page: NextPage = () => {
  return (
    <AuthContent>
      <Layout role="Teacher">
        <PageTitle
          title="マイページ"
          rightItem={<MyPageEditButton />}
          icon={<User />}
          iconUrl=""
        />
        <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
          <Suspense fallback={<LoadingTile />}>
            <AdminMyPage />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </AuthContent>
  );
};

export default Page;
