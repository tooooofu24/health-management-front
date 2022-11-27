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
import { useRouter } from "next/router";
import { useClassroom, useClassrooms } from "../../../hooks/Classroom";
import { ClassroomDetailPage } from "../../../components/admin/classroom/detail";

const Page: NextPage = () => {
  return (
    <AuthContent>
      <Layout role="Teacher">
        <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
          <Suspense fallback={<LoadingTile />}>
            <Content />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </AuthContent>
  );
};

const Content = () => {
  const router = useRouter();
  const { classrooms } = useClassrooms();
  const classroom = classrooms[0];
  //   const { classroom } = useClassroom(Number(router.query.id));
  return <ClassroomDetailPage classroom={classroom} />;
};

export default Page;
