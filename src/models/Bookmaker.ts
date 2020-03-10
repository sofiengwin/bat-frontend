import BackendCache from '../data/BackendCache';
import Model from './Model';

interface Fields {
  id: string;
  name: string;
  review: string;
  imageUrl: string;
  url: string;
  rating: number;
}

export default class Bookmaker extends Model<Fields> implements Fields {
  readonly id: string;
  readonly name: string;
  readonly review: string;
  readonly imageUrl: string;
  readonly url: string;
  readonly rating: number;

  constructor(props: Field, cache: BackendCache) {
    super(props, {}, cache);
    this.cache = cache;
  }
}