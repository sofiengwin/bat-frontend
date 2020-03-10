import BackendCache from '../data/BackendCache';
import Model from './Model';
import User from './User';

interface Fields {
  id: string;
  outcome?: boolean;
  body: string;
  bet: string;
}

interface References {
  comments: string[];
  user: User;
  match: any;
}

type TipSnapshot = Fields & References;

export default class Tip extends Model<Fields, References> implements Fields {
  readonly id: string;
  readonly outcome?: boolean;
  readonly body: string;
  readonly bet: string;

  constructor({comments, user, match, ...props}: TipSnapshot, cache: BackendCache) {
    super(props, {comments, user, match}, cache);
    this.cache = cache;
  }
}


