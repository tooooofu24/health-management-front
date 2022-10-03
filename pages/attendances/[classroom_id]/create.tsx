import type { NextPage } from "next";
import { PageTitle } from "../../../components/common/PageTitle";
import { AttendanceTable } from "../../../components/attendance/AttendanceTable";
import { CaretLeft } from "phosphor-react";
import { Tile } from "../../../components/common/Tile";

const CreatePage: NextPage = () => {
  return (
    <>
      <PageTitle title="成績登録" icon={<CaretLeft size={25} />} iconUrl="/" />
      <Tile>
        <AttendanceTable />
      </Tile>
    </>
  );
};

export default CreatePage;
