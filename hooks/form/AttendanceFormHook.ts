export type AttendanceForm = {
  courseId?: string | null;
  date?: string | null;
  period?: string | null;
  attendances?: AttendanceRow[];
};

export type AttendanceRow = {
  attend?: boolean;
  knowledge?: "A" | "B" | "C" | null;
  expression?: "A" | "B" | "C";
  attitude?: "A" | "B" | "C";
  comment?: string;
};

export const AttendanceRowDefaultValue: AttendanceRow = {
  attend: true,
};

export const AttendanceFormDefaultValue: AttendanceForm = {
  attendances: [
    AttendanceRowDefaultValue,
    AttendanceRowDefaultValue,
    AttendanceRowDefaultValue,
    AttendanceRowDefaultValue,
    AttendanceRowDefaultValue,
    AttendanceRowDefaultValue,
  ],
};

export const onSubmitAttendanceForm = async (data: AttendanceForm) => {
  console.log(data);
};
