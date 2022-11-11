import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { GraduationCap, Plus } from "phosphor-react";
import { Suspense } from "react";
import { ClassroomList } from "../../components/classroom/index/ClassroomList";
import { AuthContent } from "../../components/common/AuthContent";
import { Layout } from "../../components/common/Layout";
import { PageTitle } from "../../components/common/PageTitle";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallbackTile } from "../../components/common/error/ErrorFallbackTile";
import { LoadingTile } from "../../components/common/loading/LoadingTile";

const ClassroomPage: NextPage = () => {
  return (
    <AuthContent>
      <Layout>
        <PageTitle
          title="クラス一覧"
          icon={<GraduationCap />}
          iconUrl="/classrooms"
          rightItem={
            <Link href="/classrooms/create">
              <a>
                <Button variant="responsive" leftIcon={<Plus />}>
                  クラス新規登録
                </Button>
              </a>
            </Link>
          }
        />
        <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
          <Suspense fallback={<LoadingTile />}>
            <ClassroomList />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </AuthContent>
  );
};

export default ClassroomPage;
