import type { NextPage } from "next";
import { PageTitle } from "../../../components/common/PageTitle";
import { AttendanceTable } from "../../../components/attendance/AttendanceTable";
import { CaretLeft } from "phosphor-react";

const CreatePage: NextPage = () => {
  return (
    <>
      <PageTitle title="成績登録" icon={<CaretLeft size={25} />} iconUrl="/" />
      <AttendanceTable />
    </>
  );
};

export default CreatePage;
