import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { CaretLeft, Pencil } from "phosphor-react";
import { useEffect } from "react";
import { ClassroomDetail } from "../../components/classroom/detail/Index";
import { Layout } from "../../components/common/Layout";
import { PageTitle } from "../../components/common/PageTitle";
import { useClassroom } from "../../hooks/Classroom";

const CreatePage: NextPage = () => {
  const { classroom, getClassroom } = useClassroom();
  const router = useRouter();
  useEffect(() => {
    const { id } = router.query;
    if (!router.isReady) return;
    getClassroom(String(id));
  }, [router]);

  return (
    <Layout>
      <PageTitle
        title={classroom?.grade + "年" + classroom?.name + "組"}
        icon={<CaretLeft />}
        iconUrl="/classrooms"
      />
      <ClassroomDetail classroom={classroom} />
    </Layout>
  );
};

export default CreatePage;
