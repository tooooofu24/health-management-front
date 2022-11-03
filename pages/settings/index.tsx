import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import { WifiHigh } from "phosphor-react";
import { AuthContent } from "../../components/common/AuthContent";
import { Layout } from "../../components/common/Layout";
import { PageTitle } from "../../components/common/PageTitle";
import { AddIPButton } from "../../components/settings/IP/AddIPButton";
import { IPList } from "../../components/settings/IP/Index";

const TopPage: NextPage = () => {
  return (
    <AuthContent>
      <Layout>
        <PageTitle
          title="IPアドレス"
          icon={<WifiHigh />}
          iconUrl="/setting"
          rightItem={<AddIPButton />}
        />
        <IPList />
      </Layout>
    </AuthContent>
  );
};

export default TopPage;
