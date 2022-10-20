import type { NextPage } from "next";
import { CaretLeft } from "phosphor-react";
import { Create } from "../../components/classroom/Create";
import { Layout } from "../../components/common/Layout";
import { PageTitle } from "../../components/common/PageTitle";

const CreatePage: NextPage = () => {
  return (
    <Layout>
      <PageTitle
        title="クラス新規登録"
        icon={<CaretLeft size={25} />}
        iconUrl="/classrooms"
      />
      <Create />
    </Layout>
  );
};

export default CreatePage;
