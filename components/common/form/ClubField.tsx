import { Select, SelectProps } from "@chakra-ui/react";
import { FC, Suspense } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { useClassrooms } from "../../../hooks/Classroom";
import { useClubs } from "../../../hooks/Clubs";
import { LoadingField } from "../loading/LoadingField";

type props = {
  register?: UseFormRegisterReturn;
} & SelectProps;
export const ClubField = ({ register, ...props }: props) => {
  return (
    <Suspense fallback={<LoadingField />}>
      <Field register={register} {...props} />
    </Suspense>
  );
};
const Field: FC<props> = ({ register, ...props }) => {
  const { clubs } = useClubs();
  return (
    <Select placeholder="選択して下さい" {...(register ?? null)} {...props}>
      {clubs.map((club) => (
        <option key={club.id} value={club.id}>
          {club.name}
        </option>
      ))}
    </Select>
  );
};
