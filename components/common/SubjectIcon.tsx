import {
  Flask,
  GlobeStand,
  IconProps,
  MathOperations,
  Notebook,
  Question,
  Translate,
} from "phosphor-react";

type props = {
  subjectName: string;
} & IconProps;
export const SubjectIcon = (props: props) => {
  const { subjectName } = props;
  if (subjectName === "国語") return <Notebook {...props} />;
  if (subjectName === "数学") return <MathOperations {...props} />;
  if (subjectName === "社会") return <GlobeStand {...props} />;
  if (subjectName === "理科") return <Flask {...props} />;
  if (subjectName === "英語") return <Translate {...props} />;
  return <Question {...props} />;
};
