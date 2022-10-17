import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { CaretLeft, Pencil } from "phosphor-react";
import { ClassroomDetail } from "../../components/classroom/detail/Index";
import { PageTitle } from "../../components/common/PageTitle";

const CreatePage: NextPage = () => {
  return (
    <>
      <PageTitle
        title="1年1組"
        icon={<CaretLeft size={25} />}
        iconUrl="/classrooms"
        rightItem={
          <Link href="/classrooms/1">
            <a>
              <Button leftIcon={<Pencil />}>名簿を編集する</Button>
            </a>
          </Link>
        }
      />
      <ClassroomDetail />
    </>
  );
};

export default CreatePage;
