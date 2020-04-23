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
  tips: string[];
  comments: string[];
}

export type UserSnapshot = Fields & References;

export default class User extends Model<Fields, References> implements Fields {
  readonly userName!: string;
  readonly email!: string;
  readonly oauthId!: string;
  readonly oauthType!: string;
  readonly point?: number;

  constructor({tips, comments, ...props}: UserSnapshot, cache: BackendCache) {
    super(props, {tips, comments}, cache)
  }
}