import { Letter } from "./Letter.model";

export interface Word {
  value: string;
  Letters: Letter[];
}
