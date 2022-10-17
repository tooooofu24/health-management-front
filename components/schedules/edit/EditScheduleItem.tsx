import { AspectRatio, Box, IconButton } from "@chakra-ui/react";
import { FC } from "react";
import { Schedule } from "../../../types/Schedule";
import { ScheduleItemContent } from "../ScheduleItemContent";
import { Plus, X } from "phosphor-react";

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
          <IconButton
            colorScheme="red"
            size="sm"
            icon={<X />}
            aria-label="削除"
            rounded="full"
          />
        </Box>
      </Box>
    );
  } else {
    return (
      <AspectRatio ratio={1}>
        <Box>
          <IconButton
            size="lg"
            icon={<Plus />}
            aria-label="追加"
            rounded="full"
          />
        </Box>
      </AspectRatio>
    );
  }
};
