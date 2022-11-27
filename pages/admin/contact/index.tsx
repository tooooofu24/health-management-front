import type { NextPage } from "next";
import {
  Baseball,
  ChatsCircle,
  MagnifyingGlass,
  User,
  UsersThree,
} from "phosphor-react";
import { Suspense } from "react";
import { AuthContent } from "../../../components/common/AuthContent";
import { Layout } from "../../../components/common/Layout";
import { PageTitle } from "../../../components/common/PageTitle";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallbackTile } from "../../../components/common/error/ErrorFallbackTile";
import { LoadingTile } from "../../../components/common/loading/LoadingTile";
import { ContactForm } from "../../../components/common/ContactForm";

const Page: NextPage = () => {
  return (
    <AuthContent>
      <Layout role="Teacher">
        <PageTitle title="お問い合わせ" icon={<ChatsCircle />} iconUrl="" />
        <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
          <Suspense fallback={<LoadingTile />}>
            <ContactForm />
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </AuthContent>
  );
};

export default Page;
