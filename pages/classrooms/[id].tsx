import type { NextPage } from "next";
import { useRouter } from "next/router";
import { CaretLeft, Pencil } from "phosphor-react";
import { Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { DetailSkelton } from "../../components/classroom/detail/DetailSkelton";
import { ClassroomDetail } from "../../components/classroom/detail/Index";
import { AuthContent } from "../../components/common/AuthContent";
import { CommonError } from "../../components/common/error/CommonError";
import { ErrorFallbackTile } from "../../components/common/error/ErrorFallbackTile";
import { Layout } from "../../components/common/Layout";
import { PageTitle } from "../../components/common/PageTitle";
import { Tile } from "../../components/common/Tile";
import { useClassroom } from "../../hooks/Classroom";

const CreatePage: NextPage = () => {
  return (
    <AuthContent>
      <Layout>
        <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
          <Suspense fallback={<DetailSkelton />}>
            <Content />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </AuthContent>
  );
};

const Content = () => {
  const router = useRouter();
  const { id } = router.query;
  const { classroom, refetch } = useClassroom(String(id));

  useEffect(() => {
    refetch();
  }, [router]);

  return (
    <>
      <PageTitle
        title={
          classroom ? classroom?.grade + "年" + classroom?.name + "組" : ""
        }
        icon={<CaretLeft />}
        iconUrl="/classrooms"
      />
      <ClassroomDetail classroom={classroom} />
    </>
  );
};

export default CreatePage;
