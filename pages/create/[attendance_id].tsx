import type { NextPage } from "next";
import { PageTitle } from "../../components/common/PageTitle";
import { AttendanceTable } from "../../components/attendance/AttendanceTable";

const CreatePage: NextPage = () => {
  return (
    <>
      <PageTitle title="成績入力" backURL="/" />
      <AttendanceTable />
    </>
  );
};

export default CreatePage;
