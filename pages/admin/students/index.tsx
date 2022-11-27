import type { NextPage } from "next";
import { Baseball, MagnifyingGlass, User, UsersThree } from "phosphor-react";
import { Suspense } from "react";
import { AuthContent } from "../../../components/common/AuthContent";
import { Layout } from "../../../components/common/Layout";
import { PageTitle } from "../../../components/common/PageTitle";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallbackTile } from "../../../components/common/error/ErrorFallbackTile";
import { LoadingTile } from "../../../components/common/loading/LoadingTile";
import { StudentSearchPage } from "../../../components/admin/student";
import { StudentCreateButton } from "../../../components/admin/student/StudentCreateButton";

const Page: NextPage = () => {
  return (
    <AuthContent>
      <Layout role="Teacher">
        <PageTitle
          title="生徒検索"
          icon={<UsersThree />}
          iconUrl=""
          rightItem={<StudentCreateButton />}
        />
        <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
          <Suspense fallback={<LoadingTile />}>
            <StudentSearchPage />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </AuthContent>
  );
};

export default Page;
