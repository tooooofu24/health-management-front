import type { NextPage } from "next";
import { useRouter } from "next/router";
import { CaretLeft, Pencil } from "phosphor-react";
import { useEffect, useState } from "react";
import { DetailSkelton } from "../../components/classroom/detail/DetailSkelton";
import { ClassroomDetail } from "../../components/classroom/detail/Index";
import { AuthContent } from "../../components/common/AuthContent";
import { CommonError } from "../../components/common/error/CommonError";
import { Layout } from "../../components/common/Layout";
import { PageTitle } from "../../components/common/PageTitle";
import { Tile } from "../../components/common/Tile";
import { useClassroom } from "../../hooks/Classroom";

const CreatePage: NextPage = () => {
  return (
    <AuthContent>
      <Layout>
        <Content />
      </Layout>
    </AuthContent>
  );
};

const Content = () => {
  const { classroom, getClassroom, isLoading } = useClassroom();
  const [error, setError] = useState("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    getClassroom(String(id)).catch((e: any) => {
      setError(e.message);
    });
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
      {isLoading ? (
        <DetailSkelton />
      ) : error ? (
        <Tile>
          <CommonError message="データの取得に失敗しました" error={error} />
        </Tile>
      ) : (
        <ClassroomDetail classroom={classroom!} />
      )}
    </>
  );
};

export default CreatePage;
