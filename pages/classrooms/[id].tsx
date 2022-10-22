import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { CaretLeft, Pencil } from "phosphor-react";
import { useEffect, useState } from "react";
import { ClassroomDetail } from "../../components/classroom/detail/Index";
import { AuthContent } from "../../components/common/AuthContent";
import { DataFetchError } from "../../components/common/error/DataFetchError";
import { Layout } from "../../components/common/Layout";
import { PageTitle } from "../../components/common/PageTitle";
import { Tile } from "../../components/common/Tile";
import { useClassroom } from "../../hooks/Classroom";

const CreatePage: NextPage = () => {
  const { classroom, getClassroom } = useClassroom();
  const [error, setError] = useState("");
  const router = useRouter();
  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;
    getClassroom(String(id)).catch((e: any) => {
      setError(e.message || "不明なエラー");
    });
  }, [router]);

  return (
    <AuthContent>
      <Layout>
        <PageTitle
          title={
            classroom ? classroom?.grade + "年" + classroom?.name + "組" : ""
          }
          icon={<CaretLeft />}
          iconUrl="/classrooms"
        />
        {error ? (
          <Tile py="5%">
            <DataFetchError message={error} />
          </Tile>
        ) : (
          <ClassroomDetail classroom={classroom} />
        )}
      </Layout>
    </AuthContent>
  );
};

export default CreatePage;
