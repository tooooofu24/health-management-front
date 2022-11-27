import { Box } from "@chakra-ui/react";
import { GraduationCap } from "phosphor-react";
import { FC } from "react";
import { ClassroomResponse } from "../../../../types/APIResponse";
import { PageTitle } from "../../../common/PageTitle";
import { Tile, TilesWrapper } from "../../../common/Tile";

type props = {
  classroom: ClassroomResponse;
};
export const ClassroomDetailPage: FC<props> = ({ classroom }) => {
  return (
    <TilesWrapper>
      <Box>
        <PageTitle
          title={`${classroom.grade}年${classroom.name}組`}
          icon={<GraduationCap />}
          iconUrl=""
        />
        <Tile></Tile>
      </Box>
    </TilesWrapper>
  );
};
