import { Paper } from "../definitions/Paper";
import { papers } from "./placeholderData";

export const getPaper = (id: string): Paper | undefined => {
  return papers.find((paper) => paper.id === id);
};
