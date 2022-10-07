import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { GraduationCap, Plus } from "phosphor-react";
import { Create } from "../../components/classroom/Create";
import { ClassroomList } from "../../components/classroom/index/ClassroomList";
import { PageTitle } from "../../components/common/PageTitle";
import { Tile } from "../../components/common/Tile";

const ClassroomPage: NextPage = () => {
  return (
    <>
      <PageTitle
        title="クラス一覧"
        icon={<GraduationCap size={25} />}
        iconUrl="/classrooms"
        rightItem={
          <Link href="classrooms/create">
            <a>
              <Button leftIcon={<Plus />}>クラス新規登録</Button>
            </a>
          </Link>
        }
      />
      <Tile>
        <ClassroomList />
      </Tile>
    </>
  );
};

export default ClassroomPage;
