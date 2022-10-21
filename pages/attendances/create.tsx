import type { NextPage } from "next";
import { CaretLeft } from "phosphor-react";
import { AttendanceCreate } from "../../components/attendance/create/Index";
import { Layout } from "../../components/common/Layout";
import { PageTitle } from "../../components/common/PageTitle";

const CreatePage: NextPage = () => {
  return (
    <Layout>
      <PageTitle title="成績登録" icon={<CaretLeft />} iconUrl="/" />
      <AttendanceCreate />
    </Layout>
  );
};

export default CreatePage;
