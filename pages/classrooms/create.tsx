import type { NextPage } from "next";
import { CaretLeft } from "phosphor-react";
import { Create } from "../../components/classroom/Create";
import { PageTitle } from "../../components/common/PageTitle";

const CreatePage: NextPage = () => {
  return (
    <>
      <PageTitle
        title="クラス新規登録"
        icon={<CaretLeft size={25} />}
        iconUrl="/classrooms"
      />
      <Create />
    </>
  );
};

export default CreatePage;
