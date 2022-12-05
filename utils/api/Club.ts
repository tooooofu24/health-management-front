import { useClubs } from "../../hooks/Clubs";

export const findClub = (id: number) => {
  const { clubs } = useClubs();
  const club = clubs.find((v) => v.id === id);
  return club;
};
