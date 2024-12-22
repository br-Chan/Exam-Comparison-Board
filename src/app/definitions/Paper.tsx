import { Semester } from "./Semester";

export type Paper = {
  id: string;
  course: string; // can be replaced by a Course type
  semester: Semester;
  year: number;
};
