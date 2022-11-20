import type { NextPage } from "next";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { AuthContent } from "../../components/common/AuthContent";
import { PageTitle } from "../../components/common/PageTitle";
import { ErrorFallbackTile } from "../../components/common/error/ErrorFallbackTile";
import { LoadingTile } from "../../components/common/loading/LoadingTile";
import { CommonError } from "../../components/common/error/CommonError";
import { Tile } from "../../components/common/Tile";
import { Layout } from "../../components/common/Layout";
import { House } from "phosphor-react";

const TopPage: NextPage = () => {
  return (
    <AuthContent>
      <Layout>
        <PageTitle title="ホーム" icon={<House />} iconUrl="" />
        <ErrorBoundary FallbackComponent={ErrorFallbackTile}>
          <Suspense fallback={<LoadingTile />}>
            <Tile>
              <CommonError message="実装中です..." />
            </Tile>
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </AuthContent>
  );
};

export default TopPage;
