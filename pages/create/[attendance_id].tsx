import type { NextPage } from "next";
import { PageTitle } from "../../components/common/PageTitle";
import { AttendanceTable } from "../../components/attendance/AttendanceTable";

const CreatePage: NextPage = () => {
  return (
    <>
      <PageTitle>成績入力</PageTitle>
      <AttendanceTable />
    </>
  );
};

export default CreatePage;
