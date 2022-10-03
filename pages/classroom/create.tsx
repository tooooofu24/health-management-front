import type { NextPage } from "next";
import { GraduationCap } from "phosphor-react";
import { Create } from "../../components/classroom/Create";
import { PageTitle } from "../../components/common/PageTitle";

const CreatePage: NextPage = () => {
  return (
    <>
      <PageTitle
        title="クラス新規登録"
        icon={<GraduationCap size={25} />}
        iconUrl="/classroom/create"
      />
      <Create />
    </>
  );
};

export default CreatePage;
