import Tip from './Tip';
import Model from './Model';
import BackendCache from '../data/BackendCache';

interface Fields {
  id: string;
  userName: string;
  email: string;
  oauthId: string;
  oauthType: string;
  point?: number;
}

type References = {
  tips: any[];
  comments: any[];
}

export type UserSnapshot = Fields & Partial<References>

export default class User extends Model<Fields, References> implements Fields {
  readonly userName: string;
  readonly email: string;
  readonly oauthId: string;
  readonly oauthType: string;
  readonly point?: number;

  constructor({tips, ...props}: UserSnapshot, cache: BackendCache) {
    super(props, {tips}, cache)
  }
}