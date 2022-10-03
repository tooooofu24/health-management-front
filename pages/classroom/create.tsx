import type { NextPage } from "next";
import { Create } from "../../components/classroom/Create";
import { PageTitle } from "../../components/common/PageTitle";

const CreatePage: NextPage = () => {
  return (
    <>
      <PageTitle title="クラス新規登録" backURL="/" />
      <Create />
    </>
  );
};

export default CreatePage;
