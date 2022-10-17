import { AspectRatio, Box, IconButton } from "@chakra-ui/react";
import { FC } from "react";
import { Schedule } from "../../../types/Schedule";
import { ScheduleItemContent } from "../ScheduleItemContent";
import { Plus, X } from "phosphor-react";
import { PlusButton } from "./PlusButton";
import { DeleteButton } from "./DeleteButton";

type props = {
  schedule?: Schedule;
};
export const EditScheduleItem: FC<props> = ({ schedule }) => {
  if (schedule) {
    return (
      <Box position="relative">
        <AspectRatio ratio={1} color="gray.400">
          <ScheduleItemContent schedule={schedule} />
        </AspectRatio>
        <Box position="absolute" top="0" right="0">
          <DeleteButton schedule={schedule} />
        </Box>
      </Box>
    );
  } else {
    return (
      <AspectRatio ratio={1}>
        <Box>
          <PlusButton />
        </Box>
      </AspectRatio>
    );
  }
};
