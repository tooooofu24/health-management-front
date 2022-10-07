import type { NextPage } from "next";
import { PageTitle } from "../../../components/common/PageTitle";
import { AttendanceTable } from "../../../components/attendance/create/AttendanceTable";
import { CaretLeft } from "phosphor-react";
import { Tile } from "../../../components/common/Tile";
import { AttendanceCreate } from "../../../components/attendance/create/Index";

const CreatePage: NextPage = () => {
  return (
    <>
      <PageTitle title="成績登録" icon={<CaretLeft size={25} />} iconUrl="/" />
      <AttendanceCreate />
    </>
  );
};

export default CreatePage;
