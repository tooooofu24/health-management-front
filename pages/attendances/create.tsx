import type { NextPage } from "next";
import { CaretLeft } from "phosphor-react";
import { AttendanceCreate } from "../../components/attendance/create/Index";
import { PageTitle } from "../../components/common/PageTitle";

const CreatePage: NextPage = () => {
  return (
    <>
      <PageTitle title="成績登録" icon={<CaretLeft size={25} />} iconUrl="/" />
      <AttendanceCreate />
    </>
  );
};

export default CreatePage;
