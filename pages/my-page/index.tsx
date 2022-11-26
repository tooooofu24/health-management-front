import type { NextPage } from "next";
import { Baseball, Pencil, User } from "phosphor-react";
import { Suspense } from "react";
import { AuthContent } from "../../components/common/AuthContent";
import { Layout } from "../../components/common/Layout";
import { PageTitle } from "../../components/common/PageTitle";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallbackTile } from "../../components/common/error/ErrorFallbackTile";
import { LoadingTile } from "../../components/common/loading/LoadingTile";
import { MyPage } from "../../components/student/mypage";
import { MyPageEditButton } from "../../components/student/mypage/MyPageEditButton";

const Page: NextPage = () => {
  return (
    <AuthContent>
      <Layout role="Student">
        <PageTitle
          title="マイページ"
          rightItem={<MyPageEditButton />}
          icon={<User />}
          iconUrl=""
        />
        <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
          <Suspense fallback={<LoadingTile />}>
            <MyPage />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </AuthContent>
  );
};

export default Page;
