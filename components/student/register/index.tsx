import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { format, parse } from "date-fns";
import { ja } from "date-fns/locale";
import { useRouter } from "next/router";
import {
  Calendar,
  FaceMask,
  FirstAid,
  ForkKnife,
  HeartBreak,
  Moon,
  SmileySad,
  Sun,
  PaperPlaneTilt,
  User,
} from "phosphor-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useCurrentStudent } from "../../../hooks/CurrentStudent";
import { useCustomToast } from "../../../hooks/Toast";
import {
  HealthCheckFormProps,
  registerHealthCheck,
} from "../../../utils/api/HealthCheck";
import { ErrorAlert } from "../../common/error/ErrorAlert";
import { BooleanField } from "../../common/form/BooleanField";
import { TempField } from "../../common/form/TempField";
import { Tile } from "../../common/Tile";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<form>({
    mode: "onBlur",
    defaultValues: {
      date: format(new Date(), "yyyy-MM-dd"),
      cough: 0,
      stuffiness: 0,
      languor: 0,
      lessAppetite: 0,
      goHospital: 0,
      comment: "",
    },
  });

  const { student } = useCurrentStudent();

  const { showToast } = useCustomToast();
  const router = useRouter();

  const [error, setError] = useState("");

  const onSubmit = async (data: form) => {
    const {
      date,
      bedTime,
      wakeUpTime,
      cough,
      stuffiness,
      languor,
      lessAppetite,
      goHospital,
      ...others
    } = data;
    const submitData: HealthCheckFormProps = {
      ...others,
      date: date,
      bedTime: parse(bedTime, "HH:mm", new Date(), { locale: ja }),
      wakeUpTime: parse(wakeUpTime, "HH:mm", new Date(), { locale: ja }),
      cough: Boolean(cough),
      stuffiness: Boolean(cough),
      languor: Boolean(cough),
      lessAppetite: Boolean(cough),
      goHospital: Boolean(cough),
    };
    await registerHealthCheck(submitData)
      .then(() => {
        showToast("?????????????????????", "info");
        router.push("/");
      })
      .catch((e) => {
        setError(e.message);
      });
  };
  return (
    <Tile>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection="column" gap="1.5rem">
          <FormControl>
            <FormLabel>
              <User />
              <Text>??????</Text>
            </FormLabel>
            <Tooltip label="?????????????????????????????????" placement="top">
              <Input value={student?.name} readOnly />
            </Tooltip>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.date)}>
            <FormLabel>
              <Calendar />
              <Text>??????</Text>
            </FormLabel>
            <Input
              type="date"
              {...register("date", { required: "?????????????????????" })}
            />
            <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.nightTemp)}>
            <FormLabel>
              <Moon />
              <Text>???????????????</Text>
            </FormLabel>
            <TempField
              register={register("nightTemp", {
                required: "?????????????????????",
                min: {
                  value: 34,
                  message: "34 ~ 42???????????????????????????????????????",
                },
                max: {
                  value: 42,
                  message: "34 ~ 42???????????????????????????????????????",
                },
                valueAsNumber: true,
              })}
            />
            <FormErrorMessage>{errors.nightTemp?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.morningTemp)}>
            <FormLabel>
              <Sun />
              <Text>??????????????????</Text>
            </FormLabel>
            <TempField
              register={register("morningTemp", {
                required: "?????????????????????",
                min: {
                  value: 34,
                  message: "34 ~ 42???????????????????????????????????????",
                },
                max: {
                  value: 42,
                  message: "34 ~ 42???????????????????????????????????????",
                },
                valueAsNumber: true,
              })}
            />
            <FormErrorMessage>{errors.morningTemp?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.bedTime)}>
            <FormLabel>
              <Moon />
              <Text>????????????</Text>
            </FormLabel>
            <Input
              type="time"
              {...register("bedTime", { required: "?????????????????????" })}
            />
            <FormErrorMessage>{errors.bedTime?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.wakeUpTime)}>
            <FormLabel>
              <Sun />
              <Text>????????????</Text>
            </FormLabel>
            <Input
              type="time"
              {...register("wakeUpTime", { required: "?????????????????????" })}
            />
            <FormErrorMessage>{errors.wakeUpTime?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.cough)}>
            <FormLabel>
              <FaceMask />
              <Text>????????????????????????</Text>
            </FormLabel>
            <BooleanField
              register={register("cough", {
                required: "?????????????????????",
                valueAsNumber: true,
              })}
            />
            <FormErrorMessage>{errors.cough?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.stuffiness)}>
            <FormLabel>
              <SmileySad />
              <Text>?????????????????????????????????</Text>
            </FormLabel>
            <BooleanField
              register={register("stuffiness", {
                required: "?????????????????????",
                valueAsNumber: true,
              })}
            />
            <FormErrorMessage>{errors.stuffiness?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.languor)}>
            <FormLabel>
              <HeartBreak />
              <Text>??????????????????????????????</Text>
            </FormLabel>
            <BooleanField
              register={register("languor", {
                required: "?????????????????????",
                valueAsNumber: true,
              })}
            />
            <FormErrorMessage>{errors.languor?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.lessAppetite)}>
            <FormLabel>
              <ForkKnife />
              <Text>????????????????????????????????????</Text>
            </FormLabel>
            <BooleanField
              register={register("lessAppetite", {
                required: "?????????????????????",
                valueAsNumber: true,
              })}
            />
            <FormErrorMessage>{errors.lessAppetite?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.goHospital)}>
            <FormLabel>
              <FirstAid />
              <Text>???????????????????????????</Text>
            </FormLabel>
            <BooleanField
              register={register("goHospital", {
                required: "?????????????????????",
                valueAsNumber: true,
              })}
            />
            <FormErrorMessage>{errors.goHospital?.message}</FormErrorMessage>
          </FormControl>
        </Flex>
        <Button leftIcon={<PaperPlaneTilt />} mt={8} w="full" type="submit">
          ??????
        </Button>
        <ErrorAlert message={error} mt={3} />
      </form>
    </Tile>
  );
};

type form = {
  date: string;
  bedTime: string;
  wakeUpTime: string;
  nightTemp: number;
  morningTemp: number;
  cough: 0 | 1; // ???
  stuffiness: 0 | 1; // ????????????
  languor: 0 | 1; // ?????????
  lessAppetite: 0 | 1; // ???????????????
  goHospital: 0 | 1; // ??????
  comment: string;
};
