import type { NextPage } from "next";
import { GraduationCap } from "phosphor-react";
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
      />
      <Tile>
        <ClassroomList />
      </Tile>
    </>
  );
};

export default ClassroomPage;
