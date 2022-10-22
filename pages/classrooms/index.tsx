import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { GraduationCap, Plus } from "phosphor-react";
import { ClassroomList } from "../../components/classroom/index/ClassroomList";
import { Layout } from "../../components/common/Layout";
import { PageTitle } from "../../components/common/PageTitle";
import { Tile } from "../../components/common/Tile";

const ClassroomPage: NextPage = () => {
  return (
    <Layout>
      <PageTitle
        title="クラス一覧"
        icon={<GraduationCap />}
        iconUrl="/classrooms"
        rightItem={
          <Link href="/classrooms/create">
            <a>
              <Button leftIcon={<Plus />}>クラス新規登録</Button>
            </a>
          </Link>
        }
      />
      <ClassroomList />
    </Layout>
  );
};

export default ClassroomPage;
