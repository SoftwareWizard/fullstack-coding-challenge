import { BlockAttributes } from './block-attributes';

export interface Block {
  id: string;
  type: string;
  attributes: BlockAttributes;
}
