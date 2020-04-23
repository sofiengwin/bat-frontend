import BackendCache from '../data/BackendCache';
import Model from './Model';
import User from './User';

interface Fields {
  id: string;
  body: string;
  type: string;
  typeId: string;

}

type References = {
  user: string;
}

type CommentSnapshot = Fields & References;

export default class Comment extends Model<Fields, References> implements Fields {
  readonly body!: string;
  readonly type!: string;
  readonly typeId!: string;

  constructor({user, ...props}: CommentSnapshot, cache: BackendCache) {
    super(props, {user}, cache);
    this.cache = cache;
  }
}