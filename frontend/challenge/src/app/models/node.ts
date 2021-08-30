import { Status } from './status';

export interface INode {
  id: string;
  name: string;
  url: string;
  state: Status;
}
