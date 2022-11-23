import { IconButton } from "@chakra-ui/react";
import { HealthCheck } from "@prisma/client";
import { Check } from "phosphor-react";
import { FC, useEffect, useState } from "react";
import { KeyedMutator } from "swr";
import { useCheckHealthCheck } from "../../../hooks/HealthCheck";
import { useCustomToast } from "../../../hooks/Toast";

type props = {
  healthCheck: HealthCheck;
  refetch: KeyedMutator<any>;
};
export const CheckButton: FC<props> = ({ healthCheck, refetch }) => {
  const { showToast } = useCustomToast();
  const { checkHealthCheck } = useCheckHealthCheck();
  const [isLoading, setIsLoading] = useState(false);
  const onClick = async () => {
    setIsLoading(true);
    await checkHealthCheck(healthCheck.id);
    await refetch();
    setIsLoading(false);
    showToast("承認しました！", "info");
  };
  return (
    <IconButton
      size="sm"
      rounded="full"
      icon={<Check />}
      aria-label="承認する"
      isLoading={isLoading}
      onClick={onClick}
      disabled={Boolean(healthCheck.checkedTeacherId)}
    />
  );
};
