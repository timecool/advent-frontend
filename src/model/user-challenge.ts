import { IChallenge } from "./challenge";

export interface IUserChallenge {
  id:        number;
  filePath:  string;
  challenge: IChallenge;
  checked:   boolean;
}
