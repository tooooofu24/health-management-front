import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
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
} from "phosphor-react";
import { useForm } from "react-hook-form";
import { BooleanField } from "../common/form/BooleanField";
import { TempField } from "../common/form/TempField";
import { Tile } from "../common/Tile";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
    control,
  } = useForm<form>({
    mode: "onBlur",
    defaultValues: {
      date: "2022-11-01",
      cough: 0,
      stuffiness: 0,
      languor: 0,
      lessAppetite: 0,
      goHospital: 0,
      comment: "",
    },
  });

  const onSubmit = (data: form) => {
    console.log(data);
  };
  return (
    <Tile>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection="column" gap="1.5rem">
          <FormControl isInvalid={Boolean(errors.date)}>
            <FormLabel>
              <Calendar />
              <Text>日付</Text>
            </FormLabel>
            <Input
              type="date"
              {...register("date", { required: "必須項目です！" })}
            />
            <FormErrorMessage>{errors.date?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.nightTemp)}>
            <FormLabel>
              <Moon />
              <Text>昨晩の体温</Text>
            </FormLabel>
            <TempField
              register={register("nightTemp", {
                required: "必須項目です！",
                min: {
                  value: 34,
                  message: "34 ~ 42の範囲で入力してください！",
                },
                max: {
                  value: 42,
                  message: "34 ~ 42の範囲で入力してください！",
                },
                valueAsNumber: true,
              })}
            />
            <FormErrorMessage>{errors.nightTemp?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.morningTemp)}>
            <FormLabel>
              <Sun />
              <Text>起床時の体温</Text>
            </FormLabel>
            <TempField
              register={register("morningTemp", {
                required: "必須項目です！",
                min: {
                  value: 34,
                  message: "34 ~ 42の範囲で入力してください！",
                },
                max: {
                  value: 42,
                  message: "34 ~ 42の範囲で入力してください！",
                },
                valueAsNumber: true,
              })}
            />
            <FormErrorMessage>{errors.morningTemp?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.bedTime)}>
            <FormLabel>
              <Moon />
              <Text>就寝時間</Text>
            </FormLabel>
            <Input
              type="time"
              {...register("bedTime", { required: "必須項目です！" })}
            />
            <FormErrorMessage>{errors.bedTime?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.wakeUpTime)}>
            <FormLabel>
              <Sun />
              <Text>起床時間</Text>
            </FormLabel>
            <Input
              type="time"
              {...register("wakeUpTime", { required: "必須項目です！" })}
            />
            <FormErrorMessage>{errors.wakeUpTime?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.cough)}>
            <FormLabel>
              <FaceMask />
              <Text>咳はありますか？</Text>
            </FormLabel>
            <BooleanField
              register={register("cough", {
                required: "必須項目です！",
                valueAsNumber: true,
              })}
            />
            <FormErrorMessage>{errors.cough?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.stuffiness)}>
            <FormLabel>
              <SmileySad />
              <Text>息苦しさはありますか？</Text>
            </FormLabel>
            <BooleanField
              register={register("stuffiness", {
                required: "必須項目です！",
                valueAsNumber: true,
              })}
            />
            <FormErrorMessage>{errors.stuffiness?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.languor)}>
            <FormLabel>
              <HeartBreak />
              <Text>だるさはありますか？</Text>
            </FormLabel>
            <BooleanField
              register={register("languor", {
                required: "必須項目です！",
                valueAsNumber: true,
              })}
            />
            <FormErrorMessage>{errors.languor?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.lessAppetite)}>
            <FormLabel>
              <ForkKnife />
              <Text>食欲の減退はありますか？</Text>
            </FormLabel>
            <BooleanField
              register={register("lessAppetite", {
                required: "必須項目です！",
                valueAsNumber: true,
              })}
            />
            <FormErrorMessage>{errors.lessAppetite?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.goHospital)}>
            <FormLabel>
              <FirstAid />
              <Text>通院していますか？</Text>
            </FormLabel>
            <BooleanField
              register={register("goHospital", {
                required: "必須項目です！",
                valueAsNumber: true,
              })}
            />
            <FormErrorMessage>{errors.goHospital?.message}</FormErrorMessage>
          </FormControl>
        </Flex>
        <Button leftIcon={<PaperPlaneTilt />} mt={8} w="full" type="submit">
          送信
        </Button>
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
  cough: 0 | 1; // 咳
  stuffiness: 0 | 1; // 息苦しさ
  languor: 0 | 1; // だるさ
  lessAppetite: 0 | 1; // 食欲の減退
  goHospital: 0 | 1; // 通院
  comment: string;
};
