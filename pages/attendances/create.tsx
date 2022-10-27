import type { NextPage } from "next";
import { CaretLeft } from "phosphor-react";
import { AttendanceCreate } from "../../components/attendance/create/Index";
import { AuthContent } from "../../components/common/AuthContent";
import { Layout } from "../../components/common/Layout";
import { PageTitle } from "../../components/common/PageTitle";

const CreatePage: NextPage = () => {
  return (
    <AuthContent>
      <Layout>
        <PageTitle title="出席登録" icon={<CaretLeft />} iconUrl="/" />
        <AttendanceCreate />
      </Layout>
    </AuthContent>
  );
};

export default CreatePage;
