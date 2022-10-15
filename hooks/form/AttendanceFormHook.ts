export type AttendanceForm = {
  course_id?: number;
  date?: string;
  period?: number;
  attendances: AttendanceRow[];
};

export type AttendanceRow = {
  attend?: boolean;
  knowledge?: "A" | "B" | "C";
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
