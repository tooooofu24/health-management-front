import { NextPage } from "next";
import { Users } from "phosphor-react";
import { Layout } from "../../components/common/Layout";
import { PageTitle } from "../../components/common/PageTitle";
import { UserList } from "../../components/users/Index";
import { InviteButton } from "../../components/users/InviteButton";

const UsersPage: NextPage = () => {
  return (
    <Layout>
      <PageTitle
        title="ユーザー一覧"
        icon={<Users />}
        iconUrl="/users"
        rightItem={<InviteButton />}
      />
      <UserList />
    </Layout>
  );
};

export default UsersPage;
