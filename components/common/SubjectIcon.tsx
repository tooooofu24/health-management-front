import {
  CookingPot,
  DesktopTower,
  Flask,
  Globe,
  GlobeStand,
  Heart,
  IconProps,
  MathOperations,
  MusicNotes,
  Notebook,
  PaintBrush,
  PersonSimpleRun,
  Question,
  Translate,
} from "phosphor-react";

type props = {
  subjectName: string;
} & IconProps;
export const SubjectIcon = ({ subjectName, ...props }: props) => {
  if (subjectName === "国語") return <Notebook {...props} />;
  if (subjectName === "数学") return <MathOperations {...props} />;
  if (subjectName === "社会") return <GlobeStand {...props} />;
  if (subjectName === "理科") return <Flask {...props} />;
  if (subjectName === "英語") return <Translate {...props} />;
  if (subjectName === "保健体育") return <PersonSimpleRun {...props} />;
  if (subjectName === "音楽") return <MusicNotes {...props} />;
  if (subjectName === "家庭") return <CookingPot {...props} />;
  if (subjectName === "美術") return <PaintBrush {...props} />;
  if (subjectName === "技術") return <DesktopTower {...props} />;
  if (subjectName === "道徳") return <Heart {...props} />;
  if (subjectName === "総合") return <Globe {...props} />;
  return <Question {...props} />;
};
