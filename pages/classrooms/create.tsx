import type { NextPage } from "next";
import { CaretLeft } from "phosphor-react";
import { Create } from "../../components/classroom/create/Index";
import { AuthContent } from "../../components/common/AuthContent";
import { Layout } from "../../components/common/Layout";
import { PageTitle } from "../../components/common/PageTitle";

const CreatePage: NextPage = () => {
  return (
    <AuthContent>
      <Layout>
        <PageTitle
          title="クラス新規登録"
          icon={<CaretLeft />}
          iconUrl="/classrooms"
        />
        <Create />
      </Layout>
    </AuthContent>
  );
};

export default CreatePage;
