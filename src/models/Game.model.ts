import { Word } from "./Word.model";

export interface Game{
  WordSelected:number;
  TextInputUser: Word[];
  TextCombat: Word[];
  TextShow:string;
  PrimaryTextCombat: string;
}
